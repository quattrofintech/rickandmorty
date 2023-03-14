import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import Card from '../../components/card/Card'

const Home = () => {
  const maxCharacters = 826
  const maxLocations = 126
  const maxEp = 51

  const [characters, setCharacters] = useState([])
  const [locations, setLocations] = useState([])
  const [eps, setEps] = useState([])
  useEffect(() => {
    const set = async () => {
      setCharacters(await httpRequest(`https://rickandmortyapi.com/api/character/${String(gerarAleatorio(maxCharacters, 3))}`))
      setLocations(await httpRequest(`https://rickandmortyapi.com/api/location/${String(gerarAleatorio(maxLocations, 3))}`))
      setEps(await httpRequest(`https://rickandmortyapi.com/api/episode/${String(gerarAleatorio(maxEp, 3))}`))
    }
    set()
  }, [])

  function gerarAleatorio(valorMaximo, qntNumeroRetornados) {
    const lista = []
    while(lista.length < qntNumeroRetornados){
      let aleatorio = Math.floor(Math.random() * valorMaximo)
      if(!lista.includes(aleatorio)){
        lista.push(aleatorio)
      }
    }
    return lista.sort()
  }

  // function gerarAleatorio(valorMaximo, qntNumeroRetornados) {
  //   const lista = []
  //   for (let i = 0; i < qntNumeroRetornados; i++) {
  //     while (true) {
  //       let aleatorio = Math.floor(Math.random() * valorMaximo)
  //       for (let j = 0; j < lista.length; j++) {
  //         if (lista[j] === aleatorio) {
  //           break
  //         }
  //       }
  //       lista.push(aleatorio)
  //       break
  //     }
  //   }
  //   return lista.sort()
  // }

  const httpRequest = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
      return []
    }
  }

  return (
    <div>
      <section className={styles['grid-container']}>
        <div className={styles.title}>
          <p>Personagens</p>
          <Link to="/characters">Todos os personagens</Link>
        </div>
        {
          characters &&
          <div className={styles['flex-container']}>
            {
              characters.map(item => (
                <Card key={item.id} titulo={item.name} imagem={item.image} subtitulo={item.species} texto={item.gender} url={`/character/${item.id}`} classe={`char ${item.status}`} />
              ))
            }
          </div>
        }
      </section>

      <section className={styles['grid-container']}>
        <div className={styles.title}>
          <p>Lugares</p>
          <Link to="/locations">Todos os lugares</Link>
        </div>
        {
          locations &&
          <div className={styles['flex-container']}>
            {
              locations.map(item => (
                <Card key={item.id} titulo={item.name}  subtitulo={item.type} texto={item.dimension} classe="loc" url={`/location/${item.id}`}/>
              ))
            }
          </div>
        }
      </section>

      <section className={styles['grid-container']}>
        <div className={styles.title}>
          <p>Eps</p>
          <Link to="/episodios">Todos os episódios</Link>
        </div>
        {
          eps &&
          <div className={styles['flex-container']}>
            {
              eps.map(item => (
                <Card key={item.id} titulo={item.name} subtitulo={item.episode} texto={item.air_date} classe='eps' url={`/episode/${item.id}`}/>
              ))
            }
          </div>
        }
      </section>

    </div>
  )
}

export default Home