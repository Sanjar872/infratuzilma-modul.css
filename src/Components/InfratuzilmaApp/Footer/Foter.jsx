import React from 'react'
import { Container, BredRasmlar, BoX, BredRasmlar5, PANd, Kompaniya, Brendlar, BredRasmlar6 } from './style'
import styles from '../styles/foter.module.css'

import rasm1 from '../assets/FoterImg/1rasm.png'
import rasm2 from '../assets/FoterImg/2rasm.png'
import rasm3 from '../assets/FoterImg/3rasm.png'
import rasm4 from '../assets/FoterImg/4rasm.png'
import rasm5 from '../assets/FoterImg/5rasm.png'


import Uztelecom from '../assets/FoterImg/Uzonline.png'
import Mobiuz from '../assets/FoterImg/Mobiuz.png'
import Beeline from '../assets/FoterImg/Beeline.png'
import Perfectum from '../assets/FoterImg/Pefectom.png'
import Uccell from '../assets/FoterImg/Uceel.png'

import Evo from '../assets/FoterImg/Evo.png'
import Tps from '../assets/FoterImg/Tps.png'
import Telcom from '../assets/FoterImg/Uzonline.png'

const Foter = () => {
    return (
        <Container>
            <Brendlar>
                <div className={styles.div1}> <h1>Andijona Pochta Xizmatlari</h1></div>
                <div class={styles.parent}>
                    <div className={styles.div2}><BredRasmlar src={rasm1} alt="" /></div>
                    <div className={styles.div2}><BredRasmlar src={rasm2} alt="" /> </div>
                    <div className={styles.div2}><BredRasmlar src={rasm3} alt="" /></div>
                    <div className={styles.div2}><BredRasmlar5 src={rasm4} alt="" /> </div>
                    <div className={styles.div2}><BredRasmlar6 src={rasm5} alt="" /></div>
                </div>

            </Brendlar>

            <BoX>
                <div>
                    <Kompaniya src={Uztelecom} alt="" />
                    <Kompaniya src={Mobiuz} alt="" />
                    <Kompaniya src={Beeline} alt="" />
                    <Kompaniya src={Perfectum} alt="" />
                    <Kompaniya src={Uccell} alt="" />
                </div>

                <PANd>Andijonda Mobil Operatorlari, uyali telefon kompaniyalar</PANd>

            </BoX>
            <div className={styles.Pasqism}>
                <h1>Andijonda Internet
                    Provayderlar</h1>


                    <div><img src={Evo} alt="" /></div>
                    <div><img src={Tps} alt="" /></div>
                    <div><img src={Uztelecom} alt="" /></div>

            </div>
        </Container>
    )
}

export default Foter