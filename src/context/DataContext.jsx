import { createContext, useState } from "react";
import { data } from "../utils/data"
const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
    const [exercise, setExercise] = useState({});
    const setNewExercise = (id) => {
        const ex = data.filter(item => item.id === id);
        setExercise(ex)
    }
    

    return (
        <DataContext.Provider value={{ setNewExercise, exercise }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;