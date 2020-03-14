

const initialDate = {
  date: ''
}

function date(state = initialDate, action) {
  switch (action.type) {
    case "UPDATE_DATE":
      return {
        date: action.date
      }
    case "RESET_DATE":
      return {
        date: ''
      }
    default:
      return state
  }
}

export default date 