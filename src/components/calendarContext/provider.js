import React, { useReducer } from 'react'
import CalendarContext from './context'
import calendarReducer from './reducer'



const CalendarProvider = ({ children }) => {

  const initialState = {
    day: ''
  }
  const [state, dispatch] = useReducer(calendarReducer, initialState)

  //


  const updateDay = (day) => {
    try {
      dispatch({ type: 'UPDATE_DAY', value: day });
    }
    catch (err) {
      console.log(err.message)
    }
  }



  return (
    <CalendarContext.Provider value={
      {
        day: state.day,
        updateDay
      }
    }>
      {children}
    </CalendarContext.Provider >
  )
}

export default CalendarProvider
