import './index.css'
import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import Card from '../../components/card/Card'

const Characters = () => {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')
    const {data, isLoading, error} = useFetch(url)
    const [characters, setCharacters] = useState([])
    const [next, setNext] = useState('')
    const [prev, setPrev] = useState('')

    console.log(data)

    useEffect(() => {
        if(data.hasOwnProperty('info')){
            setCharacters(data.results)
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
                characters && 
                    characters.map(item => (
                        <Card key={item.id} titulo={item.name} imagem={item.image} subtitulo={item.species} texto={item.gender} url={`/character/${item.id}`} classe={`char ${item.status}`} />
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

export default Characters