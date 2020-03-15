import {
  UPDATE_DATE,
  RESET_DATE,
  UPDATE_DATA
} from './types'

export const updateDate = (date) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_DATE, date })
  }
}

export const resetDate = () => {
  return (dispatch) => {
    dispatch({ type: RESET_DATE })
  }
}

export const updateData = (data) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_DATA, data })
  }
}