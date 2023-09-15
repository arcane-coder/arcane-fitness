import './ui.css'

export default function ExerciseCard({ img, name, target, bodyPart, equipment }) {
  return (
    <div className='ex-card'>
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
    </div>
  )
}
