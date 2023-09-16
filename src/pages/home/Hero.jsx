import { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Hero() {
    const imgContainerRef = useRef(null);
    const [loop, setLoop] = useState(0);
    function runCarousel(loopValue) {
        if (imgContainerRef.current) {
            imgContainerRef.current.style.transition = 'left 0.5s ease-in-out'; // Add a transition effect
            imgContainerRef.current.style.left = `-${100 * loopValue}vw`;
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setLoop((prevLoop) => {
                const newLoop = prevLoop + 1;
                return newLoop === 4 ? 0 : newLoop;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        runCarousel(loop);
    }, [loop]);

    return (
        <div className="hero section-padding">
            <div className="carousel" ref={imgContainerRef}>
                <div className="img-box">
                    <img src="./images/bg/1.jpg" alt="bg1" />
                    <img src="./images/bg/2.jpg" alt="bg2" />
                    <img src="./images/bg/3.jpg" alt="bg3" />
                    <img src="./images/bg/4.jpg" alt="bg4" />
                </div>
            </div>
            <div className="info-box">
                <h1>BOOST YOUR <span className="clr-p">HEALTH</span> IN JUST FEW MONTHS WITH <span className="clr-p"> ARCANE FITNESS</span></h1>
                <p>Arcane fitness is the online platform where you can find to do your Gym Exercise at home with just few equipment. Our goal is to help every to maintain their Physical health with proper guidence.</p>
                <Link to="/exercise" className="btn btn-p">Browse Exercise</Link>
            </div>
        </div>
    )
}
