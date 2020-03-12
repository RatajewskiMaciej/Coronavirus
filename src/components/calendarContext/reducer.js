export default (state, action) => {
  switch (action.type) {
    case "UPDATE_DAY":
      return {
        day: action.value
      }
    default:
      break
  }
}