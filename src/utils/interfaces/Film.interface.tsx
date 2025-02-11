// TODO: Define an interface for the `Film` object based on the data provided by OMDb API
// TODO: Can the properties be marked as readonly?
export default interface Film {
    readonly Title: string,
    readonly Year: number,
    readonly Rated: string,
    readonly Released: string,
    readonly Genre: string,
    readonly Director: string,
    readonly Writer: string,
    readonly Actors: string,
    readonly Plot: string,
    readonly Language: string,
    readonly Country: string,
    readonly Awards: string,
    readonly Poster: string,
    readonly Ratings: object[]
    readonly Metascore: number,
    readonly imdbRating: number,
    readonly imdbVotes: number,
    readonly imdbID: string,
    readonly Type: string,
    readonly DVD: string,
    readonly BoxOffice: string,
    readonly Production: string,
    readonly Website: string,
    readonly Response: string,
    onWatchList: boolean,
    onSeenItList: boolean
}
