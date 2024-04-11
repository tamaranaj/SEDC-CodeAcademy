import { v4 as uuid} from "uuid"

interface IMovie {
    id: string;
    title: string;
    duration: number;
    genre: string;
    hasWonOscar?: boolean;
}

class Movie implements IMovie{
    private _id: string;
    private _title: string;
    private _duration: number;
    private _genre: string
    private _hasWonOscar?: boolean

    constructor(movieTitle: string, movieD: number, movieGenre: string, oscar?: boolean){
        this._id = uuid()
        this._title = movieTitle
        this._duration = movieD
        this._genre = movieGenre
        this._hasWonOscar = oscar
    }
   
    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get duration(): number {
        return this._duration;
    }

    get genre(): string {
        return this._genre;
    }

    get hasWonOscar(): boolean | undefined{
        return this._hasWonOscar;
    }

}

class MovieLibrary{

    private movies: Movie [] = []

    addMovie(movie: Movie): void{
        this.movies.push(movie)
    }

    printMovies(genre: string = "action"): Movie[] | string{
       const movies = this.movies.filter(item=> item.genre === genre)
       
        if(movies.length === 0){
            return `No ${genre} movies found.`
        }else{
            return movies
        }
        
    }

    static movieDetail(movie: Movie): string{
        return `Movie name is ${movie.title} and is of genre : ${movie.genre}`
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


