import React from 'react'
// import { connect } from 'react-redux'

const PlanetCard = (props) => {

  // console.log('planet card props', props)


    return (
        <div className="card">
          <h1> Hello </h1>
            <h2>Planet: {props.name}</h2>
        </div>
    )
}

export default PlanetCard

// function mapStateToProps(state) {
//     return {
//       planet: state.planet.results,
//       isLoading: state.isLoading,
//       error: state.error
//     }
//   }

// export default connect(
//     mapStateToProps, {}
//     )(PlanetCard);