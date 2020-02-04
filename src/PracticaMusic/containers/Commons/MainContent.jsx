import React from 'react';
import Content from "./Content";
import Setimage from "../../api/Service.jsx";

const MainContent = () =>(
    <div>
        <Setimage />
        {/* { this.state.done ? (
                // {this.state.done && this.state.items.isArray() ? (
                    // // this.state.items[0].item.name
                    //  JSON.stringify(this.state.items[0])
                    // "asda"
                    // console.log(this.state.items[0])
                <List items={this.state.items} />
                ) : (
                    <Carga />
                )} */}
        <Content />
        <Content />
        <Content />
    </div>  
)
const GetResult = (props) => (
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
export default MainContent;