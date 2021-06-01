import { Props, useState } from 'react'
import styles from './styles.module.scss'

import { FaWindowClose } from 'react-icons/fa'

type Character = {
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

function Character(props: Character) {

  const [isShow, setIsShow] = useState(false)

  return (
    <div className={styles.container}>
      <img src={props.image} alt={props.name} />
      <div className={styles.name}>
        <p>{props.name}</p>
      </div>
      {isShow
        ?
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.info}>
              <img src={props.image} alt="" />
              <div className={styles.box}>
                <div className={styles.boxClose}>
                  <button onClick={() => setIsShow(!isShow)}><FaWindowClose className={styles.iconClose} /></button>
                </div>
                <p>{props.name}</p>
                <p>{props.species}</p>
              </div>
            </div>
          </div>
        </div>
        :
        ""
      }
      <button className={styles.btnShow} onClick={() => setIsShow(!isShow)}></button>
    </div>
  )
}

export default Character