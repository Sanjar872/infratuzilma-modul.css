import React from 'react'
import styles from '../../styles/rejalar.module.css'
const Rejalar = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.wrap}>
            <div className={styles.Harakatlar}>
                <h1>Harakatlar Strategiyasi</h1>
                <p>Axborot texnologiyalari va</p> 
                 <p>kommunikasiyalarini rivojlantirish vazirligining</p>   
                    <p> 2017 yilda amalga oshiradigan CHORA-TADBIRLAR DASTURI</p>
            </div>
        </div>
        <div className={styles.KattaGrid}>

            <div className={styles.Gridlar}>
                <div><p>iQtisodiyotni rivojlantirish va liberallashtirish : iQtisodiyot, ijtimoiy soxa, boshQaruv tizimiga axborot-kommunikatsion texnologiyalarni joriy etish. kichik biznes va xususiy tadbirkorlikni rivojlantirish rag’batlantirish</p></div>
                <div><p>Davlat boshQaruvi tizimini takomillashtirish: davlat organlariNING ochiQligini ta’minlash, “elektron Hukumat ” tizimini takomillashtirish, sifatini oshirish</p></div>
                <div><p>xavsizlik, diniy bag’rikenglik va millitlar aro totuvlikni taminlash</p></div>
                <div><p>QONUN USTUVORLIGINI TA’MINLASH, SUD-HUQUQ TIZIMINI ISLOH QILISH</p></div>

            </div>
        </div>


    </div>
  )
}

export default Rejalar