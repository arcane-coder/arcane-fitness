import { useContext } from "react"
import DataContext from '../../context/DataContext'
import { useLocation } from 'react-router-dom';

export default function Detail() {
    const { exercise } = useContext(DataContext);
    const { gifUrl, name, target, bodyPart, equipment } = exercise[0];
    let location = useLocation();
    const containsExercisedetail = location.pathname.includes("exercisedetail");

    return (
        <div className='ex-detail section-padding'>
            <div className="img-box">
                <img src={containsExercisedetail ? `.${gifUrl}` : gifUrl} alt={name} />
            </div>
            <div className="info-box">
                <p className="name bold">{name}</p>
                <p className="detail">{name} is one of the best exercise to target your {target}. It will help you to improve your mood and gain energy.</p>
                <div className="group-box">
                    <div className="group">
                        <div className="icon-box"><img src="../images/icons/body-builder.svg" alt="" /></div>
                        <p className="body-part"> {bodyPart}</p>
                    </div>
                    <div className="group">
                        <div className="icon-box"><img src="../images/icons/tire.svg" alt="" /></div>
                        <p className="target">{target}</p>
                    </div>
                    <div className="group">
                        <div className="icon-box"><img src="../images/icons/barbells.svg" alt="" /></div>
                        <p className="equipment">{equipment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
