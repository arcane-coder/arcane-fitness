import { useContext } from "react";
import { data } from "../../data/data";
import _ from 'lodash';
import DataContext from "../../context/DataContext";
import ExerciseCard from "../../components/ui/ExerciseCard";

export default function SimilarEquipment() {
    const { exercise } = useContext(DataContext);
    const similarEquipmentExercises = data.filter(item => item.equipment === exercise[0].equipment);
    const shuffledArray = _.shuffle(similarEquipmentExercises);
    const selectedExercise = shuffledArray.slice(0, 8)

    return (
        <section className="same-equip section-padding">
            <div className="section-heading">
                <h1>Exercise with similar equipment</h1>
            </div>
            <div className="card-container">
                {
                    selectedExercise.map(ex => <ExerciseCard key={ex.id + 22} exercise={ex} />)
                }
            </div>
        </section>
    )
}
