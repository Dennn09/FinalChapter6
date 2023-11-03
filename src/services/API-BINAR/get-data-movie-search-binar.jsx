import { useQuery } from "@tanstack/react-query"
// import http from "../../utils/htpp"
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http2 from "../../utils/http2";

export const reduxMovieSearch = async (query) => {
    return await http2.get(`${API_ENDPOINT.SEARCH_MOVIE_BINAR}?page=1&query=${query} `)
}

//unutk nge hit API
// const fetchDataMovie = async (page) => {
    const fetchDataMovieSearch = async ({queryKey}) => {
    //v3
    // const { data } = await http.get(`${API_ENDPOINT.NOW_PLAYING}?page=${page ? page :1}`)
    // return data
    //v4
    // const [_key, _params] = queryKey;
    // const { data } = await http.get(_key, { params : _params});
    // return data
    const [_key, _params] = queryKey;
    const { data } = await http2.get(_key, { params : _params})
    return data
}


const useMovieDataQuerySearch = (options) => {
    // v3
    // return useQuery(["userData", page], () => fetchDataMovie(page))
    //v4
    // return useQuery([API_ENDPOINT.NOW_PLAYING , options]  , fetchDataMovie)
    return useQuery([API_ENDPOINT.SEARCH_MOVIE_BINAR, options], fetchDataMovieSearch)

}

export {fetchDataMovieSearch, useMovieDataQuerySearch}