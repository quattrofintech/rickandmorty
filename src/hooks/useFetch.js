import React, {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(url){
            setIsLoading(true)
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
        }
    }, [url])

    return {data, isLoading, error}
}
