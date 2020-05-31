import react from 'react'
import style from './styles.scss'

const Bio = () => {

    return (
        <>
            <h1 className="title">Diego Duro</h1>
            <h2>Front-End Developer</h2>
            <p>Este sitio está en contrucción, I can do better than this ;-)</p>
            <p>El de acá abajo soy yo posando en San Juan, me gusta viajar. Abajo están mis redes y podés contactarme por ahí.</p>
            <img className={style.profilePic} src="/prof-pic-480.png" alt="Profile Picture"/>
        </>
    )
}

export default Bio