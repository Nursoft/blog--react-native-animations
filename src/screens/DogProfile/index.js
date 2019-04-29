import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

// Import our fluid navigator
import { FluidNavigator } from 'react-navigation-fluid-transitions'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';


// Screens that are going to transition
// using the react-navigation API
import DogDetails from './DogDetails'
import AdoptConfirmation from './AdoptConfirmation'
import AdoptionCompleted from './AdoptionCompleted'
import FosterSelection from './FosterSelection'

// Define our FluidNavigator and specify which screens
// can transition
const Navigator = createAppContainer(FluidNavigator({
  AdoptionCompleted,
  DogDetails,
  AdoptConfirmation,
  FosterSelection
}, {
  initialRouteName: 'DogDetails'
}));

class DogProfile extends Component {

  static options() {
    return {
      topBar: {
        backButton: {
          color: '#F9A03F'
        },
      },
    };
  }

  constructor(props) {
    super(props)
  
    this.state = {
      showAdoptConfirmation: false
    }
  }

  render() {
    const { dog } = this.props

    // This time, we only render the Navigator
    // and move the DogProfile's content
    // into the DogDetails screen
    return (
      <Navigator screenProps={{ dog: dog }}/>
    );
  }
}

DogProfile.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    monthlyExpenses: PropTypes.number,
    imageUrl: PropTypes.string
  }).isRequired
}

export default DogProfile
