import Header from '../../components/layouts/Header'
import Footer from '../../components/layouts/Footer'
import Hero from './Hero'
import SearchExercise from './SearchExercise'
import './home.css'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <SearchExercise />
            <Footer />
        </>
    )
}
