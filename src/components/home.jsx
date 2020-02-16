import React, { Component } from "react";
import Search from './search'

class Home extends Component{
    render(){
        return (
            <div className="container">
                <Search/>
            </div>
        );
    }
}

export default Home;