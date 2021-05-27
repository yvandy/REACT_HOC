import React from 'react';

const withPower = (Wcomponent) =>{
    const newComponent = (props) =>{
        // console.log(props);
        return(
            <div style = {{background : "red"}}>
                <Wcomponent name="vandana" {...props} />
            </div>
        )
    }
    return newComponent;
}

export default withPower;