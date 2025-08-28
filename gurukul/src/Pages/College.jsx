import React, { useEffect, useMemo, useState } from "react";
import universitiesRaw from "../data/university.json";
import "../css/college.css";

export default function College() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [type, setType] = useState("All");
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const ITEMS_PER_LOAD = 5;

  
  const universities = useMemo(() => {
    const cap = (s) =>
      typeof s === "string" && s.length
        ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
        : "Unknown";

    return (universitiesRaw || []).map((u, idx) => {
      const idNum = Number(u.id ?? idx + 1);
      return {
        id: isNaN(idNum) ? idx + 1 : idNum,
        name: u.name?.trim() || "Unnamed",
        type: cap(u.type), 
        level: u.level || "",
      
        city: "Jhapa",
        location: u.location || "Jhapa",
        courses: Array.isArray(u.courses) ? u.courses : [],
        map: u.map || "",
        
        about: u.info || u.description || "No description provided.",
     
        phone: u.phone || u.Phone || "N/A",
        email: (u.email || "").trim(),
        image: u.image || "",
        logo: u.logo || "",
      };
    });
  }, []);


  const cities = ["All", "Jhapa"];
  const types = useMemo(() => {
  const s = new Set(universities.map((u) => u.type));
  // remove "Community"
  return ["All", ...Array.from(s).filter((t) => t !== "Community")];
}, [universities]);

  const filtered = useMemo(() => {
    let list = universities;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.level.toLowerCase().includes(q) ||
          u.courses.join(" ").toLowerCase().includes(q)
      );
    }

    if (city !== "All") {
      list = list.filter((u) => u.city === city);
    }

    if (type !== "All") {
      list = list.filter((u) => u.type === type);
    }

    return list;
  }, [universities, search, city, type]);

  
  useEffect(() => {
    setVisibleCount(ITEMS_PER_LOAD);
    setSelectedCollege(null);
  }, [search, city, type]);

  
  useEffect(() => {
    if (!selectedCollege) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setSelectedCollege(null);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedCollege]);

  return (
    <div className="college-page">
    
      <div className="filter-bar">
        <div className="filter-field">
          <span className="filter-label">Search</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search college, level, or course…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-field">
          <span className="filter-label">City</span>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <span className="filter-label">Type</span>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <button
          className="reset-btn"
          onClick={() => {
            setSearch("");
            setCity("All");
            setType("All");
          }}
        >
          Reset
        </button>
      </div>

  
      <div className="college-grid">
        {filtered.slice(0, visibleCount).map((uni) => (
          <article
            key={uni.id}
            className="college-card"
            onClick={() => setSelectedCollege(uni)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelectedCollege(uni)}
          >
            <img src={uni.image} alt={uni.name} className="college-img" />
            <div className="college-info">
              <img src={uni.logo} alt="logo" className="college-logo" />
              <h3 className="college-title">{uni.name}</h3>
              <p>📍 {uni.location}</p>
              <p>📞 {uni.phone}</p>
              <div className="pill-row">
                {uni.type !== "Unknown" && <span className="pill">{uni.type}</span>}
                {uni.level && <span className="pill">{uni.level}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>


      {visibleCount < filtered.length && (
        <div className="load-more-box">
          <span
            className="load-more-link"
            onClick={() => setVisibleCount((v) => v + ITEMS_PER_LOAD)}
          >
            Load more...
          </span>
        </div>
      )}

    
      {selectedCollege && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCollege(null)}
          role="presentation"
        >
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCollege.name} details`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelectedCollege(null)}>
              ✕
            </button>

            <div className="modal-header">
              <img
                src={selectedCollege.image}
                alt={selectedCollege.name}
                className="modal-hero"
              />
              <div className="modal-heading">
                <img
                  src={selectedCollege.logo}
                  alt="logo"
                  className="modal-logo"
                />
                <div>
                  <h2>{selectedCollege.name}</h2>
                  <div className="modal-meta">
                    <span className="pill">{selectedCollege.type}</span>
                    {selectedCollege.level && (
                      <span className="pill">{selectedCollege.level}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-grid">
                <div className="modal-block">
                  <h4>Overview</h4>
                  <p className="modal-desc">{selectedCollege.about}</p>
                </div>

                <div className="modal-block">
                  <h4>Contact</h4>
                  <ul className="detail-list">
                    <li><b>Location:</b> {selectedCollege.location}</li>
                    <li><b>Phone:</b> {selectedCollege.phone}</li>
                    {selectedCollege.email && (
                      <li><b>Email:</b> {selectedCollege.email}</li>
                    )}
                    {selectedCollege.map && (
                      <li>
                        <a
                          href={selectedCollege.map}
                          target="_blank"
                          rel="noreferrer"
                          className="map-link"
                        >
                          Open in Google Maps ↗
                        </a>
                      </li>
                    )}
                  </ul>
                </div>

                {selectedCollege.courses?.length > 0 && (
                  <div className="modal-block">
                    <h4>Courses</h4>
                    <div className="course-grid">
                      {selectedCollege.courses.map((c, i) => (
                        <span key={i} className="course-pill">{c}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
