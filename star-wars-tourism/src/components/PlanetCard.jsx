import React from 'react'
import { connect } from 'react-redux'

const PlanetCard = (props) => {

  console.log('planet card props', props.item)


    return (
        <div className="card">
            <h2>Planet: {props.item.name}</h2>
        </div>
    )
}

// export default PlanetCard

function mapStateToProps(state) {
    return {
      planet: state.planet,
      isLoading: state.isLoading,
      error: state.error
    }
  }

export default connect(
    mapStateToProps, {}
    )(PlanetCard);