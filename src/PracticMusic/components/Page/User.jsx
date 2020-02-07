import React,{Component} from "react";

class User extends Component{
    constructor(props){
        super(props)

        this.state={
            users:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users",{method:"get"})
        .then(response=>response.json())
        .then(json=>this.setState({
              done: true,
               users:json
            }))
    }

    render(){
        const {users} = this.state;
        return(
            <>
            
            <div>{
                users.map(u=>(
                    <div key={u.id}>{u.name}</div>
                    ))
                }
            </div>
            </>
        );
    }
}
export default User;
