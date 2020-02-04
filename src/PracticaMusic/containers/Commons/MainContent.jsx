import React, { Component } from 'react';
import Content from "./Content";

class MainContent extends Component {
    constructor() {
        super();
        this.state = { 
            done: false,
            items: []
        };
        
    }
    TypeSharePer(){
        console.log(2);
    }
    componentDidMount() {
        let typeShare=this.props.type.toLowerCase();
        let idconsulta=this.props.id;
        console.log(idconsulta);
        let consulta='http://ec2-35-174-153-145.compute-1.amazonaws.com/api/'+typeShare;
        if(idconsulta){
            consulta='http://ec2-35-174-153-145.compute-1.amazonaws.com/api/'+typeShare+'/'+idconsulta;
        }
        fetch(consulta)
        .then(result=>result.json())
        .then( result => console.log(result)
        // result=>this.setState({
        //     done: true,
        //     items:result
        // })
        )
    }
    render() {
        return(
            <div>
                {2>1?<GetResult items={this.state.items} type={this.props.type.toLowerCase()} />:<GetResult items={this.state.items} type={this.props.type.toLowerCase()} />}
             
            </div>
        )
    }
}
function VerifyTypeShare(type,item){

        if(type=="tracks"){
            return (
                <Content type={type} nombre={item.name} duration={item.duration} /> 
            );
        }else if(type=="tracks"){
            return (
                <Content type={type} nombre={item.name} /> 
                ); 
        }else if(type=="artists"){
            return (
                <Content type={type} nombre={item.name} urlImage={item.artwork} idartist={item.id} /> 
                );
        }else if(type=="albums"){
            return (
                <Content type={type} nombre={item.name} urlImage={item.artwork} idartist={item.artist_id}/> 
                );
        }
    
}
const GetResult = (props) => (
    
       <div> 
        {
            props.items.map((item, i) => {
                return (
                    <>
                    {VerifyTypeShare(props.type,item)}
                    </>
                )
            })
        }
        </div>
);

export default MainContent;