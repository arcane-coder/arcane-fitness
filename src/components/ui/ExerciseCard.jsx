import { useContext } from 'react'
import './ui.css'
import DataContext from '../../context/DataContext'
import { Link } from 'react-router-dom';

export default function ExerciseCard({ id, img, name, target, bodyPart, equipment }) {
  const { setNewExercise } = useContext(DataContext);

  return (
    <Link to="./exercisedetail" className='ex-card' onClick={() => setNewExercise(id)}>
      <div className="img-box">
        <img src={img} alt={name} />
      </div>
      <div className="info-box">
        <div className="flex-space">
          <p className="body-part">{bodyPart}</p>
          <p className="target">{target}</p>
        </div>
        <p className="name">{name}</p>
        {/* <p className="equipment">{equipment}</p> */}
      </div>
    </Link>
  )
}
