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
import FosterSelection from './FosterSelection'

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
