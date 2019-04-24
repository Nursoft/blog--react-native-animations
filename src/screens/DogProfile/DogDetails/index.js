import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { get } from 'lodash'
import { Transition } from 'react-navigation-fluid-transitions'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './style'

class DogDetails extends Component {
  render() {
    const { dog } = this.props.screenProps
    return (
      <View style={styles.container}>
        <Transition shared='dog-photo'>
          <View style={styles.imageContainer}>
            <Image
              resizeMode='cover'
              style={styles.dogImage}
              source={{ uri: get(dog, 'imageUrl', '') }}
            />
          </View>
        </Transition>
        <View style={styles.textContent}>
          <Text style={styles.dogName}>
            {get(dog, 'name', 'Unknown')}
          </Text>
          <Text style={styles.description}>{get(dog, 'description', '---')}</Text>
        </View>
        
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('FosterSelection')}
          >
            <Text style={styles.label}>Foster</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AdoptConfirmation')}
          >
            <Text style={styles.label}>Adopt</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

DogDetails.propTypes = {
  screenProps: PropTypes.shape({
    dog: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      monthlyExpenses: PropTypes.number,
      imageUrl: PropTypes.string
    }).isRequired
  }).isRequired
}

export default DogDetails
