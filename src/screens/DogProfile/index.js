import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './style'

class DogProfile extends Component {
  static options() {
    return {
      topBar: {
        noBorder: true,
        drawBehind: true,
        visible: true,
        animate: true,
        transparent: true,
        translucent: true,
        background: {
          color: 'rgba(0, 0, 0, 0)',
        },
        backButton: {
          color: '#ff4e60'
        },
      },
    }
  }

  render() {
    const { dog } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.dogImage}
            source={{ uri: dog.imageUrl }}
          />
        </View>
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.label}>Adopt</Text>
          </TouchableOpacity>
        </View>
      </View>
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
