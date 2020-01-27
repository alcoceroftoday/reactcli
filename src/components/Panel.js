import React from 'react';
import "../styles/styles.scss";

const Panel = () => (
<>
   <div class="main-banner img-container " id="main-banner">
       <div class="ed-grid lg-grid-8">
           <div class="lg-cols-4 lg-x-2">
               <img class="main-banner__img" src="https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/02/01/Recortada/img_azarzoso_20180201-124709_imagenes_lv_propias_azarzoso_foto5-kjaF-U44445823725ekB-992x558@LaVanguardia-Web.jpg"/>
               <div class="main-banner__data s-center">
                   <p class="t2 s-mb-0">TITULO</p>
                   <p>Subtitulo</p>
                   <a href="#" class="button">Botón del banner</a>
               </div>

           </div>
       </div>
   </div>
</>
)
export default Panel;
