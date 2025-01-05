import React, { createContext, useState } from 'react'

const GlobalContext = createContext()
const GlobalProvider = (props) => {
    const [search, setSearch] = useState(false)
  return (
    <GlobalContext.Provider>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
