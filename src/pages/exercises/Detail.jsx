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
                
            </div>
        </div>
    )
}
