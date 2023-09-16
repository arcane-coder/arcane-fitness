import { useContext } from "react"
import DataContext from '../../context/DataContext'


export default function Detail() {
    const { exercise } = useContext(DataContext);
    const { id, gifUrl, name, target, bodyPart, equipment } = exercise[0];

    return (
        <div className='ex-detail section-padding'>
            <div className="img-box">
                <img src={gifUrl} alt={name} />
            </div>
            <div className="info-box">
                <p className="name bold">{name}</p>
                <p className="detail">{name} is one of the best exercise to target your {target}. It will help you to improve your mood and gain energy.</p>
                <div className="group-box">
                    <div className="group">
                        <div className="icon-box"><img src="./images/icons/body-builder.svg" alt="" /></div>
                        <p className="body-part"> {bodyPart}</p>
                    </div>
                    <div className="group">
                        <div className="icon-box"><img src="./images/icons/tire.svg" alt="" /></div>
                        <p className="target">{target}</p>
                    </div>
                    <div className="group">
                        <div className="icon-box"><img src="./images/icons/barbells.svg" alt="" /></div>
                        <p className="equipment">{equipment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
