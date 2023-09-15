import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className="hero section-padding">
            <div className="info-box">
                <h1>BOOST YOUR <span className="clr-p">HEALTH</span> IN JUST FEW MONTHS WITH <span className="clr-p"> ARCANE FITNESS</span></h1>
                <p>Arcane fitness is the online platform where you can find to do your Gym Exercise at home with just few equipment. Our goal is to help every to maintain their Physical health with proper guidence.</p>
                <Link to="/exercise" className="btn btn-p">Browse Exercise</Link>
            </div>
        </div>
    )
}
