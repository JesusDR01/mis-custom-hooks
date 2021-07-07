import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null })
    const isMounted = useRef(true)

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, error: null })
        // setState({...state,loading:true})
        fetch(url).then(res => res.json()).then(data => {

            if (isMounted.current) {
                setState({
                    loading: false,
                    error: null,
                    data: data
                })
            }
            
        })
    }, [url])

    return state;
}
