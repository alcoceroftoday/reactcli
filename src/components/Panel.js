import React from 'react';
import "../styles/styles.scss";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";    
import Timelive from "./access/Timelive"

function createLink(user){
return <p><a href="#">{user.link}</a></p>
}
function FullName(user){
return user.firstName+" "+user.lastName;
}
const user = {
    firstName: 'David',
    lastName: 'Alcocer',    
    title: 'Mi perfil',    
    fullName: 'user.firstName user.lastName',    
    descripcion: 'Me llamo........ tengo.........',    
    imgUrl: 'https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/02/01/Recortada/img_azarzoso_20180201-124709_imagenes_lv_propias_azarzoso_foto5-kjaF-U44445823725ekB-992x558@LaVanguardia-Web.jpg',    
    link: 'www.dalcocer.com'
};
function TimeLives(){
    return  <h4>{new Date().toLocaleTimeString()}  </h4>
/* <TimeLive /> */
    
}
function Content(user) {
    return (
    <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{user.user.title}<i className="material-icons right">Más + </i></span>
        {createLink(user.user)}
        <Timelive />
    </div>
    );
}

// className ContentclassName extends React.Component {
//     render() {
//       return (
//         <div className="card-content">
//         <span className="card-title activator grey-text text-darken-4">{user.user.title}<i className="material-icons right">Más + </i></span>
//         {createLink(user.user)}
//         <Timelive />
//     </div>
//       );
//     }
//   }


const Panel = () => (
<>
    <div className="main">
    <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={user.imgUrl}/>
        </div>
        <Content user={user} />
 
        <div id="contenedorTime" className="card-reveal">
            <span className="card-title grey-text text-darken-4">{FullName(user)}<i className="material-icons right">close</i></span>
                    <p>{user.descripcion}</p>
        </div>
    </div>
    </div>     
</>
)
// setInterval(TimeLives, 1000);
export default Panel;
