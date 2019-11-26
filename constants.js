
export const API_URL = "https://api.nasa.gov/neo/rest/v1";

export const DATE_URL = `start_date=2018-01-01&end_date=2018-01-08`;
export const ID_DATA = `3542519`;

export const LIST_API_URL = `${API_URL}/feed?${DATE_URL}&api_key=${process.env.REACT_APP_API_KEY}`;

export const SPE_API_URL = `${API_URL}/neo/${ID_DATA}?api_key=${process.env.REACT_APP_API_KEY}`;