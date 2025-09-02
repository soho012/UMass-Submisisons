import { createContext, useContext, useState, useMemo } from 'react'

const LoadingContext = createContext({ loading: false, setLoading: () => {} })
export const useLoading = () => useContext(LoadingContext)

export function LoadingProvider({ children }) {
const [loading, setLoading] = useState(false)
const value = useMemo(() => ({ loading, setLoading }), [loading])
return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
}