
import { combineReducers } from '@reduxjs/toolkit'
import authLogin from './auth/authLogin'
import MoviePopuler from './movie/DataMoviePopuler'
import getUser from './auth/authGetUser'
import dataSearch from './movie/DataSearch'
import dataDetail from './movie/DataDetail'
export default combineReducers({
    auth: authLogin,
    dataMoviePopuler: MoviePopuler,
    reduxGetUser : getUser,
    reduxdataSearch : dataSearch,
    reduxDataDetail : dataDetail
})