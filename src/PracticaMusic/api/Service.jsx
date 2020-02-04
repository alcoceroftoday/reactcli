import React, { Component } from 'react';


const Setimaa = (props) => (
    <ul>
        {/* {console.log(props.imaaaaads)} */}
        {
            props.items.map((item, i) => {
                return (
                    <>
                        { item.album_id ? <img className="activator" src={item.album_id}/> : "" } 
                    </>
                )
            })
        }
    </ul>
);
export default Setimage;
