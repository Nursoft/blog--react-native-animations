import React, { Component } from 'react';
import { SharedElement } from 'react-native-motion';
import PropTypes from 'prop-types'
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
    const { dog, onAdopt } = this.props
    return (
      <View style={styles.container}>
        <SharedElement
          id='source'
          startOnDestinationDidMount
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.dogImage}
              source={{ uri: dog.imageUrl }}
            />
          </View>
        </SharedElement>
        <View style={styles.textContent}>
          <Text style={styles.dogName}>
            {dog.name}
          </Text>
          <Text style={styles.description}>{dog.description}</Text>
        </View>
        
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.label}>Foster</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={onAdopt}
          >
            <Text style={styles.label}>Adopt</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

DogDetails.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    monthlyExpenses: PropTypes.number,
    imageUrl: PropTypes.string
  }).isRequired,
  onAdopt: PropTypes.func.isRequired
}

export default DogDetails
