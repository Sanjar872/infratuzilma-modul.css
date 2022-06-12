import React from 'react'
import styles from '../styles/rejalar.module.css'
import zmeyka from '../assets/icons/zmeyka.svg';
import { style } from '@mui/system';

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
               <div><p>iQtisodiyotni rivojlantirish va liberallashtirish : iQtisodiyot, ijtimoiy soxa, boshQaruv
                  tizimiga axborot-kommunikatsion texnologiyalarni joriy etish. kichik biznes va xususiy tadbirkorlikni
                  rivojlantirish rag’batlantirish</p></div>
               <div><p>Davlat boshQaruvi tizimini takomillashtirish: davlat organlariNING ochiQligini ta’minlash,
                  “elektron Hukumat ” tizimini takomillashtirish, sifatini oshirish</p></div>
               <div><p>xavsizlik, diniy bag’rikenglik va millitlar aro totuvlikni taminlash</p></div>
               <div><p>QONUN USTUVORLIGINI TA’MINLASH, SUD-HUQUQ TIZIMINI ISLOH QILISH</p></div>
            </div>
         </div>
         <div className={styles.zmeyka}>
            <div className={styles.zmeykaTitle}>
               <span>
                  O’ZBEKISTON RESPUBLIKASI VAZIRLAR MAHKAMASINING “YAGONA INTERAKTIV DAVLAT XIZMATLARI PORTALI ORQALI
                  ELEKTRON DAVLAT XIZMATLARINI TAKOMILLASHTIRISH CHORA-TADBIRLARI TO’G’RISIDA”GI QARORI LOYIHASI
                  <p>
                  FAOLIYATNING 40 TURI BO’YICHA ELEKTRON LITSENZIYALASH PORTALINI YO’LGA QO’YISH
                  </p>
               </span>
               <span>
               “YAGONA DARCHA” MARKAZLARIDA AVTOMATLASHTIRILGAN AXBOROT VA DAVLAT XIZMATLARI UCHUN TO’LOVLARNING BILLING TIZIMINI YARATISH
                  <p>
                  HUDUDLARDA “YAGONA DARCHA” MARKAZLARI VA “O’ZBEKISTON POCHTASI” AJ BO’LINMALARIDA 250 TA INFOKIOSKANI O’RNATISH
                  </p>
               </span>
               <span>
               RESPUBLIKA HUDUDLARIDA 66 TA YUQORI QUVVATLI VA 328 TA KAM QUVVATLI RAQAMLI TELEVIDENIE UZATKICHLARINI O’RNATISH VA ISHGA TUSHIRISH 
                  <p>
                  RESPUBLIKA HUDUDLARIDA MOBIL ALOQA OPERATORLARNING 1843 TA BAZA STANSIYALARINI O’RNATISH 
                  </p>
               </span>
               <span>
               RESPUBLIKA HUDUDLARIDA 2300 KM OPTIK TOLALI ALOQA LINIYALARINI QUIRSH
                  <p>
                  YOSHLARNING BO’SH VAQTDAN OQILONA FOYDALANISHLARI VA ULARNING IMKONIYATLARINI OSHIRISH UCHUN O’YINLAR - MILLIY MOBIL INTERNETNI TASHKIL ETISH
                  </p>
               </span>
               <span>
               RESPUBLIKA HUDUDLARIDA AHOLI VA TADBIRKORLIK SUB’EKTLARI UCHUN INTERNET ORQALI DAVLAT XIZMATLARIDAN FOYDALANISHNI O’RGATISH BO’YICHA KOMPYUTER SAVODXONLIGI VA MALAKALARNI OSHIRISH 
                  <p>
                  ELEKTRON SUD PROTSESSI IJRONI AMALGA OSHIRISHNING ZAMONAVIY SHAKLLARI HAMDA USULLARINI JORIY ETISH
                  </p>
               </span>
            </div>
            <div className={styles.ZmeykaImg}>
               <img src={zmeyka} alt=""/>
            </div>
            <div className={styles.zmeyka_title2}>
               <span>
               O’ZBEKISTON RESPUBLIKASI PREZIDENTINING “2018-2021 YILLARDA “ELEKTRON HUKUMAT” TIZIMINI YANADA RIVOJLANTIRISH BO’YICHA CHORA-TADBIRLAR TO’G’RISIDA”GI QARORI LOYIHASI
               <p>DASTURIY MAHSULOTLARNI ISHLAB CHIQARISHNI RAG’BATLANTIRISH UCHUN INNOVATSIYALAR MARKAZINI BUNYOD ETISH</p>
               </span>
               <span>
               “ELEKTRON HUKUMAT” DOIRASIDA AXBOROT XAVFSIZLIGI TIZIMINING MONITORINGI
               <p>DAVLAT ORGANLARIDA KADRLAR POTENSIALI HISOBINI YURITISH UCHUN YAGONA IDORALARARO “KADRLAR” TIZIMINI JORIY ETISH </p>
               </span>
               <span>
               IMS TEXNOLOGIYALARI NEGIZIDA KOMMUTATSIYA MARKAZLARINI ZAMONAVIYLASHTIRISH 
               <p>IMS TEXNOLOGIYALARI NEGIZIDA KOMMUTATSIYA MARKAZLARINI ZAMONAVIYLASHTIRISH </p>
               </span>
               <span>
               KIBERXAVFSIZLIK SOHASIDA QONUNCHILIK BAZASINI TAKOMILLASHTIRISH
               <p>YOSHLAR UCHUN TA’LIM VA MAORIF SOHASIDA ZAMONAVIY AXBOROT IMKONIYATLARI HAMDA, MULTIMEDIA MAHSULOTLARINI YARATISH. MILLIY KONTENTNI RIVOJLANTIRISH VA TAG’RIB QILISH</p> 
               </span>
            </div>
         </div>
         <div className={styles.Koompaniya}>
            <div>
            <h1>IT Kompaniyalar</h1>
            <p>5.Xozrida Andijonda ko'plab IT kompaniyalar turli yo'nalishlarda o'z ish faoliyatini olib bormoqdalar: pochta, aloqa va internet xizmatlari bilan xalq turmush darajasining yaxshilanishiga, ijtimoiy extiyojlarning qondirilishiga, iqtisodning o'sishi hamda fan-texnika taraqqiyotining jadallashishiga xizmat qilishmoqda.</p>

            </div>
         </div>

      </div>
   )
}

export default Rejalar