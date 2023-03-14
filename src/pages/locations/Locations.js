import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import { useFetch } from '../../hooks/useFetch'

const Locations = () => {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/location')
    const {data, isLoading, error} = useFetch(url)
    const [locations, setLocations] = useState([])
    const [next, setNext] = useState('')
    const [prev, setPrev] = useState('')


    useEffect(() => {
        if(data.hasOwnProperty('info')){
            setLocations(data.results)
            setNext(data.info.next)
            setPrev(data.info.prev)
        }
    }, [data])

    const prevNextPage = (type) => {
        type === 0 ? setUrl(prev) : setUrl(next)
    }
  return (
    <div>
        <article className='grid'>
            {
                locations && 
                    locations.map(item => (
                        <Card key={item.id} titulo={item.name} subtitulo={item.type} texto={item.dimension} classe="loc" url={`/location/${item.id}`}/>
                  ))
            }
        </article>
        <section className='btns-page text-center'>
            {!prev && <button disabled>Prev</button>}
            {prev && <button onClick={() => prevNextPage(0)}>Prev</button>}
            {!next && <button disabled>Next</button>}
            {next && <button onClick={() => prevNextPage(1)}>Next</button>}
        </section>
    </div>
  )
}

export default Locations