import React, { useEffect } from 'react';
import { connect } from "react-redux"
import { getItinerary } from './actions/index';
import './App.css';

function App(props) {

useEffect(() => {
  props.getItinerary();
}, [])

  return (
    <div className="App">
      <h1>Hi</h1>

      {props.dogError && <p>Error: {props.dogError}</p>}

      <div className="button-container">
        {/* <button onClick={() => props.getItinerary()} > */}
        <button>
          Plan Your Getaway
        </button>
      </div>
      <div className="card-container">
        <h3>Something here.</h3>
        {/*We'll want to have a component here that spits out information about the planet we're wanting to visit here. This will be the result of the API call. */}
      </div>

    </div>
  );
}


function mapStateToProps(state) {
  return {
    planet: state.planet,
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
  )(App);


//creating a Star Wars tourism app. Han and Chewie are down on their luck, so they're setting up shop in the Mos Eisley spaceport cantina looking for passengers. This is an app they'll use to give potential passengers information about the planets they'll be going to. Information on the planet's size, climate, residents, etc.

//ideally, they'd stretch out the functionality to include a list of saved planets if someone wanted to go on a very long trip to a series of planets.