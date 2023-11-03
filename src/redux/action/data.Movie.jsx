import { reduxDataDetailMovie } from "../../services/API-BINAR/get-data-detail-binar";
import { reduxDataMoviePopuler } from "../../services/API-BINAR/get-data-movie-populer-binar";
import { reduxMovieSearch } from "../../services/API-BINAR/get-data-movie-search-binar";
import { setDataDetail } from "../reducers/movie/DataDetail";
import { setData } from "../reducers/movie/DataMoviePopuler";
import { setDataSearch } from "../reducers/movie/DataSearch";


export const dataMovie = () => (dispatch) => {
    return reduxDataMoviePopuler().then((result) => {      
        console.log(result, "result")
        dispatch(setData(result))
    }).catch((err) => {
        
    });
}


export const dataSearchRedux = (query) => (dispatch) => {
    return reduxMovieSearch(query).then((result) => {
       dispatch(setDataSearch(result)) 
       console.log(result, "sdaaaaa")
    }).catch((err) => {
        
    });
}

export const dataDetailRedux = (id) => (dispatch) => {
    return reduxDataDetailMovie(id).then((result) => {
        console.log(result, "dataDetail")
        dispatch(setDataDetail(result))
    }).catch((err) => {
        
    });
}






// export const reduxDataMoviePopuler = async (page) => {
//     return await http2.get(API_ENDPOINT.NOW_POPULER_BINAR, page)
// }

// export const LoginUserRe = (input) => (dispatch) => {
//     LoginRedux(input)
//       .then((result) => {
//         CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
//         dispatch(setToken(result.data.data.token));
//         dispatch(setIsLoggedIn(true));
//         window.location.href = "/dashboard";
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err, "ini eror");
//         //  alert(err.response.data.message, "ini eror")
//         toast.error(err.response.data.message);
//       });