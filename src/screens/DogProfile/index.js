import React, { Component } from 'react';
import { SharedElementRenderer } from 'react-native-motion';
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import DogDetails from './DogDetails'
import AdoptConfirmation from './AdoptConfirmation'

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
      <SharedElementRenderer>
        <View>
          <DogDetails
            dog={dog}
            onAdopt={() => {
              this.setState({
                showAdoptConfirmation: true
              })
            }}
          />
          <AdoptConfirmation
            dog={dog}
          />
        </View>
        
      </SharedElementRenderer>
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
