
import { useParams, useNavigate } from "react-router-dom";
import universities from "../data/university.json";
import "../css/college.css";

export default function CollegeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const college = universities.find((u) => u.id === parseInt(id));

  if (!college) return <h2>College not found!</h2>;

  return (
    <div className="college-detail">
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <img src={college.image} alt={college.name} className="detail-img" />
      <div className="detail-info">
        <img src={college.logo} alt="logo" className="detail-logo" />
        <h2>{college.name}</h2>
        <p><b>Location:</b> {college.location}</p>
        <p><b>Phone:</b> {college.phone}</p>
        <p><b>About:</b> {college.description}</p>
      </div>
    </div>
  );
}
