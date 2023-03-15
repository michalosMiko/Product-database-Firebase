import "./AllMovies.css"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import { Link, link } from "react-router-dom"

const AllMovies = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect( () => {
    // get - vezmi then -pošli
    const unsubscribe = projectFirestore.collection("movies").onSnapshot( (snapshot) => {
      console.log(snapshot.docs)

      if (snapshot.empty) {
        setError("Žádné filmy k vypsání")
      } else {
        let result = []
        snapshot.docs.forEach( (oneMovie) => {
          // console.log(oneMovie.data()); vypíše data vid 38
          result.push( {id: oneMovie.id, ...oneMovie.data()} )
        } )
        // console.log(result);
        setData(result)
      }
      }, (err) => setError(err.message))

      return () => unsubscribe()
     
  }, [])

  const deleteMovie = (id) => {
    projectFirestore.collection("movies").doc(id).delete()
  }

  return <section>
    {error && <p>error</p>}
    {data.map( (oneMovie) => {
      const { id, title} = oneMovie

      return <div key={id} className = "one-movie">
        <p>{title}</p>
      <Link to={`/one-movie/${id}`}>Více informací</Link>
      <button type="button" onClick={ () => deleteMovie(id) }>Smazat</button>

      </div>

    })}
  </section>

}

export default AllMovies