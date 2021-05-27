import React, { Component } from 'react';
import withPower from './withPower';

class Home extends Component{

    render(){
        console.log(this.props)
        return(
            <>
            <h1> Coders never Quit</h1>
            </>
        )
    }

}

export default withPower(Home);