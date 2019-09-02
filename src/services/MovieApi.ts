import axios, { AxiosInstance } from 'axios';


export default class MovieApi {
    private _httpClient: AxiosInstance;
  
    constructor() {
      this._httpClient = axios.create({
        baseURL: 'https://api.themoviedb.org/3/',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    public async get(url: string) {
        const response = await this._httpClient.get(url);
        return response;
    }
}

// const moviesApi = axios.create({
//     baseURL: "https://api.themoviedb.org/3/"
// });

// export default moviesApi; 