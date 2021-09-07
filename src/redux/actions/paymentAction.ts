// import axios from 'axios';
import { CREATE_PAYMENT, GET_PAYMENT } from '../types';

export const getPayment = () => (dispatch: any) => {
  dispatch({
    type: GET_PAYMENT,
  });
};
export const createPayment = (data: paymentDataTypes) => (dispatch: any) => {
  dispatch({
    type: CREATE_PAYMENT,
    payload: data,
  });
};
