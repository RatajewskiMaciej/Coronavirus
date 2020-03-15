import { UPDATE_DATE, RESET_DATE, UPDATE_DATA } from './types'


const initialDate = {
  date: '',
  data: []
}

function date(state = initialDate, action) {
  switch (action.type) {
    case UPDATE_DATE:
      return {
        date: action.date
      }
    case RESET_DATE:
      return {
        date: ''
      }
    case UPDATE_DATA:
      return {
        data: action.data
      }
    default:
      return state
  }
}

export default date 