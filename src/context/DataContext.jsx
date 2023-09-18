import { createContext, useState } from "react";
import { data } from "../data/data"
const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
    const [exercise, setExercise] = useState([data[0]]);
    const setNewExercise = (id) => setExercise(data.filter(item => item.id === id));

    return (
        <DataContext.Provider value={{ setNewExercise, exercise }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;