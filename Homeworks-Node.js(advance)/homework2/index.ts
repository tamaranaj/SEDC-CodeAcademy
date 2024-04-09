import { v4 as uuid} from "uuid"
type MovieType = {
    id: string,
    title: string,
    duration: number,
    genre: string,
    hasWonOscar?:boolean
}

interface IMovie {
    id: string
}

class Movie implements IMovie {
    id: string 
    private title: string
    private duration: number
    private genre: string
    private hasWonOscar?: boolean 
    constructor(movieTitle: string, movieDuration: number, movieGenre: string, movieHasOscar?: boolean) {
        this.id = uuid();
        this.title = movieTitle;
        this.duration = movieDuration;
        this.genre = movieGenre;
        this.hasWonOscar = movieHasOscar;
    }


    getProperties(): MovieType {
        return{
            id: this.id,
            title: this.title,
            duration: this.duration,
            genre: this.genre,
            hasWonOscar : this.hasWonOscar
        }
        
    }
}




class MovieLibrary{

    private movies: Movie [] = []

    addMovie(movie: Movie): void{
        this.movies.push(movie)
    }

    printMovies(genre: string = "action"): Movie[] | string{
       const movies = this.movies.filter(item=>item.getProperties().genre === genre)
       
        if(movies.length === 0){
            return `No ${genre} movies found.`
        }else{
            return movies
        }
        
    }

    static movieDetail(movie: Movie): string{
        return `Movie name is ${movie.getProperties().title} and is of genre : ${movie.getProperties().genre}`
    }

    getAllMovies(): IMovie[]{
        return this.movies
    }
}

const firstMovie = new Movie("No country for old men", 122,"crime", true)
const secondMovie = new Movie("Pulp Fiction", 153,"drama")
const thirdMovie = new Movie("The Godfather", 175,"crime", true)
const forthMovie = new Movie("The Dark Knight", 152, "action",false)
const movieLibrary = new MovieLibrary()

movieLibrary.addMovie(firstMovie)
movieLibrary.addMovie(secondMovie)
movieLibrary.addMovie(thirdMovie)
movieLibrary.addMovie(forthMovie)

console.table(movieLibrary.printMovies("crime"))
console.table(movieLibrary.printMovies())
console.table(movieLibrary.printMovies("drama"))
console.log(movieLibrary.printMovies("comedy"))
console.log(MovieLibrary.movieDetail(secondMovie))
console.table(movieLibrary.getAllMovies())
