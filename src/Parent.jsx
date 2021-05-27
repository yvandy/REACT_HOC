import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component{

    constructor(){
        super();
        this.inputRef = React.createRef();
        
    }

    render(){
        return(
            <div>
                <Child ref={this.inputRef} />
                <button onClick={()=>{this.inputRef.current.focus()}}>
                    Update
                </button>
            </div>            
        )
    }
}

export default Parent;

//********************* shortcut to create class component (rcc) ***********************/