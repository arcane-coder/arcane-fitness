import './ui.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



export default function ExerciseCard({ exercise }) {
  const { id, gifUrl, name, target, bodyPart } = exercise;
  let location = useLocation();
  const containsExercisedetail = location.pathname.includes("exercisedetail");

  return (
    <Link to={`/exercisedetail/${id}`}>
      <div className='ex-card outline-f'>
        <div className="img-box">
          <img src={containsExercisedetail ? `.${gifUrl}` : gifUrl} alt={name} />
        </div>
        <div className="info-box">
          <div className="flex-space">
            <p className="body-part">{bodyPart}</p>
            <p className="target">{target}</p>
          </div>
          <p className="name">{name}</p>
        </div>
      </div>
    </Link>
  )
}
