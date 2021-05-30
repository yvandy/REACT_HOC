import React from 'react'
import Hoc from './hoc'

const SecondComp = () => {
  return <h3> Hello </h3>
}

export default Hoc(SecondComp, 'tp')
