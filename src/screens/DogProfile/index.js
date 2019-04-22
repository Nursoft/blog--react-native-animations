import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import DogDetails from './DogDetails'
import AdoptConfirmation from './AdoptConfirmation'
import AdoptionCompleted from './AdoptionCompleted'

const Navigator = createAppContainer(FluidNavigator({
  AdoptionCompleted,
  DogDetails,
  AdoptConfirmation
}, {
  initialRouteName: 'DogDetails'
}));

class DogProfile extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      showAdoptConfirmation: false
    }
  }

  render() {
    const { dog } = this.props
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
