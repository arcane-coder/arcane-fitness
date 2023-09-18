import { useContext } from "react";
import { data } from "../../data/data";
import _ from 'lodash';
import DataContext from "../../context/DataContext";
import ExerciseCard from "../../components/ui/ExerciseCard";

export default function SimilarMuscle() {
    const { exercise } = useContext(DataContext);
    const similarMuscleExercises = data.filter(item => item.target === exercise[0].target);
    const shuffledArray = _.shuffle(similarMuscleExercises);
    const selectedExercise = shuffledArray.slice(0, 8)



    return (
        <section className="same-muscle section-padding">
            <div className="section-heading">
                <h1>Similar muscle group exercise</h1>
            </div>
            <div className="card-container">
                {
                    selectedExercise.map(ex => <ExerciseCard key={ex.id + 2} exercise={ex}/>)
                }
            </div>
        </section>
    )
}
