import react from 'react'
import style from './styles.scss'

const Bio = () => {

    return (
        <>
            <h1 className={style.title}>Diego Duro</h1>
            <h2>Front-End Developer</h2>
            <section className={style.description}>
                <p>Este sitio está en contrucción,</p><p> I can do better than this ;-)</p>
                <br/>
                <p>El de acá abajo soy yo posando en San Juan,</p><p>me gusta viajar.</p>
            </section>
            <br />
            <img className={style.profilePic} src="/prof-pic-480.png" alt="Profile Picture"/>
            <br />
        </>
    )
}

export default Bio