import { createContext, useReducer } from "react"

export default (reducer, actions, initState) => {
    const Context = createContext()
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initState)
        const boundActions = {}
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }
        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }
    return { Context, Provider }
}