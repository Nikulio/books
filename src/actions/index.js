import * as consts from "./consts";
import axios from "axios";

import history from "../history";


export const addBook = (data, router) => async (dispatch) => {
  const res = await axios.post("/api/add", data);
  dispatch({
    type: consts.ADD_BOOK,
    payload: data,
  });
  history.push("/")
};

export const deleteBook = (id) => async (dispatch) => {
  const res = await axios.get(`/api/delete/${id}`);
  dispatch({
    type: consts.DELETE_BOOK,
  });
};


export const fetchBooks = () => async (res) => {
  const { data } = await axios.get("/api");
  res({
    type: consts.FETCH_BOOKS,
    payload: data,
  });
};

export const editNote = (id, data) => async (dispatch) => {
  const res = await axios.post(`/api/update/${id}`, data);
  history.push("/");
  return {
    type: consts.EDIT_BOOK,
  };
};
