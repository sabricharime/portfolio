const reducer = (state, action) => {
  const { type } = action

  if (type === 'about') {
    return {
      ...state,
      data: (state.data = action.about),
      show: (state.show = true),
    }
  }

  if (type === 'skills') {
    return {
      ...state,
      data: (state.data = action.skills),
      show: (state.show = true),
    }
  }
  if (type === 'project') {
    return {
      ...state,
      data: (state.data = action.project),
      show: (state.show = true),
    }
  }
  if (type === 'hireme') {
    return {
      ...state,
      data: (state.data = action.hireme),
      show: (state.show = true),
    }
  }
  if (type === 'close') {
    return {
      ...state,
      data: (state.data = action.data),
      show: (state.show = action.open),
    }
  }
}

export default reducer
