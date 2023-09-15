import { useState } from "react";

export default function BMI() {
    const [unit, setUnit] = useState({ weight: 0, height: 0 });
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [bmi, setBmi] = useState(null);
    const handleChange = (e) => setUnit({ ...unit, [e.target.name]: e.target.value });

    const handleCalculate = () => {
        const bmi = unit?.weight / Math.pow(unit?.height, 2);
        setWeight(unit.weight)
        setHeight(unit.height)
        setBmi(bmi);
    }

    return (
        <div className="bmi section-padding">
            <div className="section-heading">
                <h1>Calculate your <span className="clr-p">Body Mass Indes</span> in just few clicks</h1>
            </div>
            <div className="container">

                <div className="calc-box">
                    <label htmlFor="bmi-weight">
                        <p>Weight</p><span className="opt"> (in kilograms)</span>
                        <input name="weight" value={unit.weight} onChange={handleChange} type="text" id="bmi-weight" placeholder="kilograms" />
                    </label>
                    <label htmlFor="bmi-height">
                        <p>Height</p><span className="opt"> (in meters)</span>
                        <input name="height" value={unit.height} onChange={handleChange} type="text" id="bmi-height" placeholder="meters" />
                    </label>
                    <button className="btn btn-p" onClick={handleCalculate}>CALCULATE</button>
                </div>

                {!isNaN(bmi) && bmi !== undefined && bmi !== null && (
                    <div className="result-box">
                        <p>
                            The BMI of weight {weight}kg and height {height}m is found to
                            be {bmi}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
