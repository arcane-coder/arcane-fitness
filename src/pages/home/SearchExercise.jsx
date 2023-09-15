import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { exerciseOption, fetchData } from "../../utils/FetchData";
import { data } from '../../utils/data'
import ExerciseCard from "../../components/ui/ExerciseCard";

export default function SearchExercise() {
    const [searchValue, setSearchValue] = useState("");
    const [bodyParts, setBodyParts] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    let [exercise, setExercise] = useState('');
    const handleChange = (e) => setSearchValue(e.target.value.toLowerCase());

    // Pagination
    const itemsPerPage = 12;
    const totalPages = Math.ceil(exercise.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    exercise = exercise.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (newPage) => { setCurrentPage(newPage) };

    // set Unique body parts name 
    useEffect(() => {
        const fetchExerciseData = async () => {
            // Create an empty Set to store unique bodyPart values
            const uniqueBodyParts = new Set();
            // Loop through the data array and add each bodyPart value to the Set
            data.forEach(item => { uniqueBodyParts.add(item.bodyPart) });
            // Convert the Set to an array (if needed)
            const uniqueBodyPartsArray = Array.from(uniqueBodyParts);
            setBodyParts(['all', ...uniqueBodyPartsArray])
            console.log(bodyParts)
        }
        fetchExerciseData();
    }, [])

    // Search Related Exercises with input
    const handleSearch = async () => {
        if (searchValue) {
            // const data = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOption);

            const searchedExercise = data.filter(
                (exercise) => exercise.name.toLowerCase().includes(searchValue) ||
                    exercise.target.toLowerCase().includes(searchValue) ||
                    exercise.equipment.toLowerCase().includes(searchValue) ||
                    exercise.bodyPart.toLowerCase().includes(searchValue)
            )
            setSearchValue('');
            setExercise(searchedExercise);
            setCurrentPage(1);
        }
    }

    // Search Related Exercises with Card
    const handleSearchByBodyParts = (bodyPart) => {
        // const exercises = data.filter(item => item.bodyPart.includes(bodyPart));
        if (bodyPart === 'all') {
            return setExercise(data);
        }
        const exercises = data.filter(item => item.bodyPart === bodyPart);
        setExercise(exercises);
        setCurrentPage(1);
    }

    return (
        <section className="search-ex section-padding">

            <div className="section-heading">
                <h1>Awsome Exercise you should know</h1>
                <label htmlFor="search-exercise" className="input-box">
                    <input type="text" id="search-exercise" name="search-exercise" value={searchValue} onChange={handleChange} placeholder="Search Exercise" />
                    <button onClick={handleSearch} className="btn btn-s" >Search</button>
                </label>
            </div>

            <div className="category">
                {bodyParts !== "" && bodyParts.map((bodyPart) => {
                    return <div key={bodyPart.id || bodyPart} className="body-part-card" onClick={() => { handleSearchByBodyParts(bodyPart) }}>
                        <p>{bodyPart}</p>
                    </div>
                })
                }
            </div>


            <div className="btn-box">
                <button
                    className="btn btn-t"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >Previous</button>
                <span>{currentPage} / {totalPages}</span>
                <button
                    className="btn btn-t"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >Next</button>
            </div>

            <div className="show-ex">
                {exercise !== '' ? exercise.map((ex) => {
                    return <ExerciseCard key={ex.id + 1} img={ex.gifUrl} name={ex.name} target={ex.target} bodyPart={ex.bodyPart} equipment={ex.equipment} />
                }) : setExercise(data)
                }
            </div>

            <div className="btn-box">
                <button
                    className="btn btn-t"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >Previous</button>
                <span>{currentPage} / {totalPages}</span>
                <button
                    className="btn btn-t"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >Next</button>
            </div>

        </section>
    )
}
