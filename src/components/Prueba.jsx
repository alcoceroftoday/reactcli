import React from 'react';
import "../styles/styles.scss";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import PropTypes from "prop-types";

const Prueba = ({title,price}) =>(
<>
<div>{title}</div>
<p>{price}</p>
</>        
)
Prueba.propTypes={
    title: PropTypes.string,
    price: PropTypes.number
}
Prueba.defaultProps={
    title: "No hay titulo",
    price: "no hay imagen"
}

export default Prueba;