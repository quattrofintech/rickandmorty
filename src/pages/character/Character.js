import './index.css'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const Character = () => {
    const {id} = useParams()
    const {data, isLoading, error} = useFetch(`https://rickandmortyapi.com/api/character/${id}`)

    const returnlink = (type, url) => {
        const id = url.split('/')[5]
        if(type === 0) {
            url = `/location/${id}`
        }else{
            url = `/episodes/${id}`
        }   
        return [url, id]
    }

  return (
    <article className='character' style={{backgroundImage: `url(${data.image})`}}>
        <div>
            <h1>{data.name}</h1>
            <h2>{data.species}</h2>
            <h2>{data.type}</h2>
            <h3>{data.status}</h3>
            <p>{data.gender}</p>
            {
                data.origin &&
                <p>
                    <span>Origin </span>
                    <Link to={returnlink(0, data.origin.name)[0]}>{data.origin.name}</Link>
                </p>
            }
            {
                data.location &&
                <p>
                    <span>Location </span>
                    <Link to={returnlink(0, data.location.url)[0]}>{data.location.name}</Link>
                </p>
            }
                <h3>Episódios</h3>
            {
                data.episode && 
                data.episode.map((item, i )=> (
                    <Link key={i} to={returnlink(1, item)[0]} className='link-ep'>Episódio {returnlink(1, item)[1]}</Link>
                ))
            }
        </div>

    </article>
  )
}

export default Character