const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    case 'CLEAR_FILTER':
      return ''
    default:
      return state
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}


export default filterReducer
