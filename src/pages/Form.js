import "./Form.css"
import { useState } from "react"
import { projectFirestore } from "../firebase/config"

const Form = () => {
    const [movieTitle, setMovieTitle] = useState("")
    const [movieAge, setMovieAge] = useState(null)
    const [movieTime, setMovieTime] = useState(null)

    const submitForm = async (event) => {
        event.preventDefault()
        console.log(movieTitle, movieAge, movieTime);
        console.log(typeof(movieAge))
        console.log(typeof(movieTime));

        const newMovie = {
           title: movieTitle,
           minage: parseInt(movieAge),
           time: parseInt(movieTime)
        }
        try {
           await projectFirestore.collection("movies").add(newMovie)
            setMovieTitle("")
            setMovieAge("")
            setMovieTime("")
        } catch (err) {
           console.log(err.message);
        }
        
    }

    
    

  return <section className="form-section">
    <h1>Přidání produktů</h1>
    <form onSubmit={submitForm}>
        <input 
        className="input"
        type="text" 
        placeholder="Title" 
        onChange={ (e) => setMovieTitle(e.target.value) }
        value={movieTitle}
        />
        <input type="number"
        className="input"
        placeholder="Minimální věk"
        min="1"
        onChange={ (e) => setMovieAge(e.target.value) }
        value={movieAge}
         />
         <input type="number" 
         className="input"
         placeholder="Čas filmu"
         min="1"
         onChange={ (e) => setMovieTime(e.target.value) }
         value={movieTime}
         />
         <input type="submit" value="Přidat film" />
    </form>
  </section>
}

export default Form