import Genre from "../../models/Genre";

export class MovieApi {
    public async get(url: string) {
        let genres: Genre[] = new Array<Genre>();
        let genre: Genre = {
            id: 1,
            name: 'Ação'
        }
        genres.push(genre);
        return genres;
    }
}