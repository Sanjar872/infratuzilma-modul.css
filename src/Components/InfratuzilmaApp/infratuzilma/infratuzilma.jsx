import React from 'react'
import style from '../styles/infrotuzilma.module.css'
import { Grid } from '@mui/material'
import Uzbekistan from "./Uzbekistan";

const infratuzilma = () => {
  return (
    <div className={style.containerr}>
          <div className={style.infra}>
            <p className={style.Inf}>INFRATUZILMA</p>
         </div>
         <div className={style.main}>
            <Grid container spacing={5}>
               <Grid item xs={12} sm={12} md={6} xl={6}>
                  <div className={style.itemContainer}>
                     <h3>Oʻzbekistondagi IT markazlar</h3>
                     <p>
                        Bugungi kunga qadar O‘zbekistonning ko‘plab hududlarida IT markazlari tashkil etilgan. Bundan
                        ko'zlangan maqsad qiziquvchan yoshlarni IT ta’limga rag'batlantirish, ularning innovatsion
                        loyihalarini qo'llab quvvatlash va aholi turmush sharoitini yaxshilash kabi masalalar ilgari
                        surilgan.
                     </p>
                  </div>
               </Grid>
               <Grid item xs={12} sm={12} md={6} xl={6}>
                  <div className={style.itemContainer}>
                     <Uzbekistan />
                  </div>
               </Grid>
            </Grid>
         </div>
    </div>
  )
}

export default infratuzilma