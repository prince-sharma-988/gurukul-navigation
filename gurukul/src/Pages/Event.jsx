import React, { useState, useEffect } from "react";
import "../css/Event.css";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function Event() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPublishForm, setShowPublishForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [newEvent, setNewEvent] = useState({
    title: "",
    university: "",
    category: "",
    date: "",
    venue: "",
    attending: "",
    distance: "",
    description: "",
  });

  const eventsCollection = collection(db, "events");

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    const hasModal = showPublishForm || !!selectedEvent;
    document.body.style.overflow = hasModal ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setShowPublishForm(false);
        setSelectedEvent(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [showPublishForm, selectedEvent]);

  async function getEvents() {
    setLoading(true);
    try {
      const snapshot = await getDocs(eventsCollection);
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(list);
    } catch (err) {
      console.log("Error fetching events:", err);
    }
    setLoading(false);
  }

  function handleChange(e) {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  }

  async function handleAddEvent(e) {
    e.preventDefault();
    if (!newEvent.title) return alert("Title is required!");
    try {
      await addDoc(eventsCollection, {
        ...newEvent,
        attending: parseInt(newEvent.attending) || 0,
      });
      alert("Event Published ✅");
      setNewEvent({
        title: "",
        university: "",
        category: "",
        date: "",
        venue: "",
        attending: "",
        distance: "",
        description: "",
      });
      setShowPublishForm(false);
      getEvents();
    } catch (err) {
      console.log("Error adding event:", err);
    }
  }

  const filteredEvents = events.filter((e) =>
    Object.values(e).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div class="cont">
    <div className="event-container">
      <div className="action-bar">
        <input
          type="text"
          placeholder="🔍 Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button className="publish-btn" onClick={() => setShowPublishForm(true)}>
          ➕ Publish Event
        </button>
      </div>

      {showPublishForm && (
        <div className="modal-overlay" onClick={() => setShowPublishForm(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>Publish New Event</h2>
            <form onSubmit={handleAddEvent} className="publish-form">
              <input name="title" placeholder="Event Title" value={newEvent.title} onChange={handleChange} />
              <input name="university" placeholder="University" value={newEvent.university} onChange={handleChange} />
              <select name="category" value={newEvent.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="Technical">Technical</option>
                <option value="Cultural">Cultural</option>
                <option value="Sports">Sports</option>
                <option value="Academic">Academic</option>
              </select>
              <input type="datetime-local" name="date" value={newEvent.date} onChange={handleChange} />
              <input name="venue" placeholder="Venue" value={newEvent.venue} onChange={handleChange} />
              <input type="number" name="attending" placeholder="Expected Attendees" value={newEvent.attending} onChange={handleChange} />
              <input name="distance" placeholder="Distance (e.g., 3 km)" value={newEvent.distance} onChange={handleChange} />
              <textarea name="description" placeholder="Event Description" value={newEvent.description} onChange={handleChange} />
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Publish</button>
                <button type="button" className="cancel-btn" onClick={() => setShowPublishForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="event-list">
            {filteredEvents.length > 0 ? (
              filteredEvents.slice(0, visibleCount).map((event) => (
                <div
                  key={event.id}
                  className="event-card"
                  onClick={() => setSelectedEvent(event)}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedEvent(event)}
                  tabIndex={0}
                  role="button"
                >
                  <h3 className="card-title">{event.title}</h3>
                  <p className="university">{event.university}</p>
                  <span className="tag">{event.category}</span>
                  <p>📅 {event.date}</p>
                  <p>📍 {event.venue}</p>
                  <p>👥 {event.attending}</p>
                </div>
              ))
            ) : (
              <p>No events found</p>
            )}
          </div>
          {visibleCount < filteredEvents.length && (
            <div className="load-more-container">
              <button className="load-more-btn" onClick={() => setVisibleCount(visibleCount + 6)}>
                Load More
              </button>
            </div>
          )}
        </div>
      )}

      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-card modal-card-wide" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedEvent.title}</h2>
            <div className="detail-grid">
              <p><strong>University:</strong> {selectedEvent.university}</p>
              <p><strong>Category:</strong> {selectedEvent.category}</p>
              <p><strong>Date & Time:</strong> {selectedEvent.date}</p>
              <p><strong>Venue:</strong> {selectedEvent.venue}</p>
              <p><strong>Expected Attendees:</strong> {selectedEvent.attending}</p>
              <p><strong>Distance:</strong> {selectedEvent.distance}</p>
            </div>
            <p className="detail-desc">{selectedEvent.description}</p>
            <div className="modal-buttons">
              <button className="cancel-btn" onClick={() => setSelectedEvent(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div></div>
  );
}

export default Event;
