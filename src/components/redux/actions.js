
export const updateDate = (date) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_DATE", date: date })
  }
}

export const resetDate = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_DATE" })
  }
}