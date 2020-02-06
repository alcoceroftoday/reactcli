import React, { Component } from 'react';
import Service from "../../api/Service";
// import Content from "./Content";
interface IState{
    type:string,
    id?:string
}
interface NState{
    items:string[]
}
// function crear(dato2:string):string{
//     let dato2:string= Service;
//     console.log(dato2.getUser())
//     return dato2;
// }
class MainContent extends Component<IState> {
    constructor(props: IState) {
            super(props);
            this.state = { 
            done: false,
            items: []
        };
        
    }


 
    componentDidMount(){
        let a = new Service;
        const [type, resPromise] = a.GetData(this.props.type,this.props.id);
        resPromise.then((data: any) => {
            this.setState({...this.state, items: data, done: true});
        })
    }
    
    render() {
       
        
        


        console.log()
        return(
            <div>
                ass
                {this.props.type}
                {this.props.id ? "-"+this.props.id : ""}
                {/* {this.state.items} */}
                {/* {2>1?<GetResult items={this.state.items} type={this.props.type.toLowerCase()} />:<GetResult items={this.state.items} type={this.props.type.toLowerCase()} />} */}
             
            </div>
        )
    }
}
// function VerifyTypeShare(type,item){

//         if(type=="tracks"){
//             return (
//                 <Content type={type} nombre={item.name} duration={item.duration} /> 
//             );
//         }else if(type=="tracks"){
//             return (
//                 <Content type={type} nombre={item.name} /> 
//                 ); 
//         }else if(type=="artists"){
//             return (
//                 <Content type={type} nombre={item.name} urlImage={item.artwork} idartist={item.id} /> 
//                 );
//         }else if(type=="albums"){
//             return (
//                 <Content type={type} nombre={item.name} urlImage={item.artwork} idartist={item.artist_id}/> 
//                 );
//         }
    
// }
// const GetResult = (props) => (
    
//        <div> 
//         {
//             props.items.map((item, i) => {
//                 return (
//                     <>
//                     {VerifyTypeShare(props.type,item)}
//                     </>
//                 )
//             })
//         }
//         </div>
// );

export default MainContent;