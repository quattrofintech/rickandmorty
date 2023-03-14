import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import { useFetch } from '../../hooks/useFetch'

const Episodes = () => {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/episode')
    const {data, isLoading, error} = useFetch(url)
    const [episodes, setEpisodes] = useState([])
    const [next, setNext] = useState('')
    const [prev, setPrev] = useState('')


    useEffect(() => {
        if(data.hasOwnProperty('info')){
            setEpisodes(data.results)
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
                episodes && 
                    episodes.map(item => (
                        <Card key={item.id} titulo={item.name} subtitulo={item.episode} texto={item.air_date} url={item.id} classe='eps' />
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

export default Episodes