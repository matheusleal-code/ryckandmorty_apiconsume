import Character from '../../components/Character'
import { api } from '../../services/api'
import styles from './styles.module.scss'

type Characters = {
  id: number,
  name: string,
  image: string,
  gender: string,
  species: string,
  status: string,
  created: string,
  episode: [],
  location: Location,
  origin: Origin,
  type: string,
  url: string
}

type Origin = {
  name: string,
  url: string
}

type Location = {
  name: string,
  url: string
}

type Info = {
  count: number,
  pages: number,
  next: string,
  prev: string,
}

type HomeProps = {
  characters: Characters[];
  info: Info[]
}

export default function Characters({ characters, info }: HomeProps) {

  return (
    <div className={styles.container}>
      {characters.map(character => {
        return (
          <Character
            id={character.id}
            name={character.name}
            image={character.image}
            gender={character.gender}
            species={character.species}
            status={character.status}
            created={character.created}
            episode={character.episode}
            location={character.location}
            origin={character.origin}
            type={character.type}
            url={character.url}
          />
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await api.get('character')

  const characters = await response.data.results;
  const info = await response.data.info

  return {
    props: {
      characters, info
    },
    revalidate: 60 * 60 * 60, //24H
  }
}