import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const Location = () => {
    const {id} = useParams()
    const {data, isLoading, error} = useFetch(`https://rickandmortyapi.com/api/location/${id}`)

    const returnlink = (url) => {
        const id = url.split('/')[5] 
        return [`/character/${id}`, id]
    }

  return (
    <article className='character' style={{backgroundImage: `url(${data.image})`}}>
        <div>
            <h1>{data.name}</h1>
            <h2>{data.type}</h2>
            <h2>{data.dimension}</h2>
                <h3>Residentes</h3>
            {
                data.residents && 
                data.residents.map((item, i )=> (
                    <Link key={i} to={returnlink(item)[0]} className='link-ep'>Character {returnlink(item)[1]}</Link>
                ))
            }
        </div>

    </article>
  )
}

export default Location