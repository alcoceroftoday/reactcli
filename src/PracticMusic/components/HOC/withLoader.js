import React, { Component } from "react"

const withLoader = (WrappedComponent)=>{
    return class withLoader extends Component{
        constructor(props){
            super(props)
        }
        render(){
            return <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader;