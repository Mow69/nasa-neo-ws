import Axios from "axios";
import {API_URL, DATE_URL, ID_DATA, LIST_API_URL, SPE_API_URL} from "constants";

// export const getListData = async data => {
//     const response = await Axios.get(`${LIST_API_URL}`);
//
//     return response.data;
// };
//
// export const getSpeData = async data => {
//     const response = await Axios.get(`${SPE_API_URL}`);
//
//     return response.data;
// };

// TODO : Préciser pour la requête en entrée le résultat du formulaire

export const getListData = async data => {
    const response = await Axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-01-01&end_date=2018-01-08&api_key=${process.env.REACT_APP_API_KEY}`);

    return response.data;
};

export const getSpeData = async data => {
    const response = await Axios.get(`https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${process.env.REACT_APP_API_KEY}`);


    return response.data;
};



