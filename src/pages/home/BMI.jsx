import { useState } from "react";

export default function BMI() {
    const [unit, setUnit] = useState({ weight: '', height: '' });
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [bmi, setBmi] = useState(null);
    const handleChange = (e) => setUnit({ ...unit, [e.target.name]: e.target.value });

    const handleCalculate = () => {
        let bmi = unit?.weight / Math.pow(unit?.height, 2);
        const formattedNumber = parseFloat(bmi.toFixed(2));
        setWeight(unit.weight)
        setHeight(unit.height)
        setBmi(formattedNumber);
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

                {bmi !== null && bmi !== undefined && (
                    <div className="result-box">
                        {isNaN(bmi) && <p className="warning">Please Enter a valid numbers.</p>}
                        {!isNaN(bmi) &&
                            <>
                                <p>The BMI of weight {weight}kg and height {height}m is found to be <b> {bmi} </b></p> <hr /> 
                                <b>BMI Categories:</b>
                                <p>
                                    Underweight = less than 18.5 <br />
                                    Normal weight = 18.5 to 24.9 <br />
                                    Overweight = 25 to 29.9 <br />
                                    Obesity = BMI of 30 or greater
                                </p>
                            </>
                        }
                    </div>
                )}
            </div>
        </div>
    )
}
