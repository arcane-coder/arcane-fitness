import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from '../../components/layouts/Footer'
import Header from '../../components/layouts/Header'
import Detail from './Detail'
import SimilarEquipment from './SimilarEquipment'
import SimilarMuscle from './SimilarMuscle'
import YtDemo from './YtDemo'
import './exerciseDetail.css'
import DataContext from "../../context/DataContext";
import { fetchData, ytOptions } from "../../utils/FetchData";

export default function ExerciseDetail() {
  const { exercise, setNewExercise } = useContext(DataContext);
  const [exVdo, setExVdo] = useState([])
  const { exid } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const ytSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseVideosData = await fetchData(`${ytSearchUrl}/search?query=${exercise[0].name}`, ytOptions)
      setExVdo(exerciseVideosData.contents)
    }

    setNewExercise(exid);
    fetchExerciseData();
  }, [exid]);

  return (
    <>
      <Header />
      <Detail />
      <YtDemo ytVdo={exVdo} />
      <SimilarMuscle />
      <SimilarEquipment />
      <Footer />
    </>
  )
}
