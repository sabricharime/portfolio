import React from 'react'
import reducer from './reducer'

const initialState = {
  data: null,
  target: null,
  show: null,
}

const AppProvider = React.createContext()
const AppContext = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <AppProvider.Provider value={[state, dispatch]}>
      {children}
    </AppProvider.Provider>
  )
}

export const useAppContext = () => React.useContext(AppProvider)
export { AppContext }
