import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ titulo, subtitulo, texto, imagem, classe, status, url }) => {
    return (
        <Link className={classe} to={url}>
            {
            imagem &&
                <div className='card-image'>
                    <img src={imagem} alt={titulo} title={titulo} />
                </div>
            }
            <div className='card-text'>
                <p className='titulo'>{titulo}</p>
                <p className='subtitulo'>{subtitulo}</p>
                <p className='texto'>{texto}</p>
            </div>
        </Link>
    )
}

export default Card