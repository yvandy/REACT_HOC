import React from 'react'

const Hoc = (Wcomp, props) => {
  console.log(props)

  const newComp = props => {
    console.log(props)
    return (
      <div>
        <Wcomp {...props} />
      </div>
    )
  }
  return newComp
}

export default Hoc

// Dont mutate the original component. USe composition.:-
// Resist the temptation to modify a component's prototype(or mutate it) inside a HOC.
// 1. Wrapped Component can not be resused separately from the enhanced component.
// 2. if you apply another HOC to enhancedComponent that also mutates componentDidUpdate, the first HOC's functionality will be overridden.
