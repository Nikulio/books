import * as consts from "./consts";
import axios from "axios";

// export const fetchBooks = () => {
//   const res = axios.get('http://localhost:3000/').then((data) => {
//     return {
//       type: consts.FETCH_BOOKS,
//       payload: data.data,
//     };
//   });
// };
//

export const addBook = (data) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/add", data);
  dispatch({
    type: consts.ADD_BOOK,
    payload: data,
  });
};

export const fetchBooks = () => async (res) => {
  const { data } = await axios.get("http://localhost:5000/");
  res({
    type: consts.FETCH_BOOKS,
    payload: data,
  });
};

export const editNote = (id, data) => async (dispatch) => {
  const res = await axios.post(`http://localhost:5000/update/${id}`, data);
  return {
    type : consts.EDIT_BOOK
  }
};
