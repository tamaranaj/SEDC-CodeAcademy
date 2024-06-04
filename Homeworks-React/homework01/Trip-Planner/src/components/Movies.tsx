type MoviesProps = {
    movies: string []
}
const Movies=(moviesProps: MoviesProps)=>{
    return(
        
       <div>
        <p>My favorite movies are:</p>
        <ol>{moviesProps.movies.map(movie=>(<li key={movie} className="trip">{movie}</li>))}</ol>
       </div>
        
    )
}

export default Movies;
