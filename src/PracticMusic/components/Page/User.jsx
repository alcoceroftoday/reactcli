import React,{Component} from "react";
import axios from "axios";
import DataContext from "../Context/DataContext";
const User=()=>(


    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(
    //         json=>this.setState({
    //                   done: true,
    //                    users:json.data
    //         })
    //         )
    // }

  


           <DataContext.Consumer>
               {context=><div>{context.courses[0].id}--**</div>}
           </DataContext.Consumer>
);
export default User;
