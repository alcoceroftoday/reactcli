import React from 'react';
import "../styles/styles.scss";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

function createLink(user){
return <p><a href="#">{user.link}</a></p>
}
const user = {
    firstName: 'David',
    lastName: 'Alcocer',    
    title: 'Mi perfil',    
    imgUrl: 'https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/02/01/Recortada/img_azarzoso_20180201-124709_imagenes_lv_propias_azarzoso_foto5-kjaF-U44445823725ekB-992x558@LaVanguardia-Web.jpg',    
    link: 'www.dalcocer.com'
};


const Panel = () => (
<>
<div class="main">
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={user.imgUrl}/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{user.title}<i class="material-icons right">Más +</i></span>
      {createLink(user)}
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
</div>     

</>
)
export default Panel;
