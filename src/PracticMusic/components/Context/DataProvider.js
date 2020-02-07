import React, {Component} from "react";
import DataContext from "./DataContext";
class DataProvider extends Component {
constructor(props){
    super(props)

    this.state={
        courses:[{"id":2,"titulo":"react title"}]
    }
}
    render(){
        return (
            <DataContext.Provider value={this.state}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}
export default DataProvider;