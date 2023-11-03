import { useQuery } from "@tanstack/react-query"
// import http from "../../utils/htpp"
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http2 from "../../utils/http2";

export const reduxDataDetailMovie = async (id) =>{
  return await http2.get(`${API_ENDPOINT.DETAIL_BINAR}${id}&append_to_response=videos`)
}



const fetchDataMovieDetailBinar = async (id) => {

        const { data } = await http2.get(`${API_ENDPOINT.DETAIL_BINAR}${id}&append_to_response=videos`);
        return data

}

const useMovieDataQueryDetailBinar = (id) => {
  return useQuery(["movieData", id], () => fetchDataMovieDetailBinar(id));
};

export {useMovieDataQueryDetailBinar}
