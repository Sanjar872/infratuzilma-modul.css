import React from 'react'
import styles from '../../styles/andijon.module.css'
import AndMaps from '../../assets/icons/AndMap.svg'
import { Grid } from '@mui/material'
const Andijon = () => {
    return (
        <div className={styles.global}>
            <Grid className={styles.GridContainer} container spacing={5}>
                <Grid className={styles.Grid1} item xs={12} sm={12} md={6} xl={6}>
                    <div className={styles.Digital}>
                        <h1>“Digital City” Texnopark</h1>
                        <p>Digital City texnoparki Andijon viloyatidagi yetakchi IT markazlardan biridir. 5,6 gektar maydonda qurib bitkazilgan, 4 kavatli 3,5 ming kv.m. ni tashkil etadigan ushbu majmua axborot texnologiyalari va innovatsion loyihalarni qo‘llab-quvvatlash, dasturiy mahsulotlar eksportini yo‘lga qo‘yish va 50 dan ortiq IT sohasida xizmat ko‘rsatadigan korxonalarni joylashtirish uchun mo‘ljallangan. </p>
                    </div>

                </Grid>

                <Grid className={styles.Grid1} item xs={12} sm={12} md={6} xl={6}>
                    <div className={styles.Andmep}>
                        <img src={AndMaps} alt="" />
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default Andijon