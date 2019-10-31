import React from 'react'
import { connect } from 'react-redux'

import { getItinerary } from '../actions/index';
import PlanetCard from './PlanetCard'

export const PlanetList = props => {

  const planets = props.props.planet
  // console.log('props', props)
  console.log('Planets', planets)

    return (
        <div>
          {/* <h1> Rendering from the PlanetList component. </h1> */}
          {/* {console.log(planets)} */}
            {planets.map((item, index) => {
              // console.log(item)
              return (
              <PlanetCard 
                item = { item }
                key = { index }  
                /> )})}

        </div>
    )
}

const mapStateToProps = state => {
    return {
      planet: state.planet.results,
      isLoading: state.isLoading,
      error: state.error
    }
  }
  
  const mapDispatchToProps = {
    getItinerary
  }
  
  export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(PlanetList);