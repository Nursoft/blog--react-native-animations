import React, { Component } from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import { Transition } from 'react-navigation-fluid-transitions'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import styles from './style'

class AdoptConfirmation extends Component {
  render () {
    const { dog } = this.props.screenProps
    return (
      <View style={styles.container}>
        <Transition shared='dog-photo' appear='horizontal'>
          <View style={styles.imageContainer}>
            <Image
              resizeMode='cover'
              style={styles.dogImage}
              source={{ uri: get(dog, 'imageUrl') }}
            />
          </View>
        </Transition>

        <View style={styles.adoptCard}>
          <Text style={styles.title}>Awesome!</Text>

          <Text style={styles.content}>Adopting a dog is a lot of responsability. We work hard to make sure all the animals in our shelter find the best suitable home for them.</Text>
          
          <View style={styles.secondaryContentWrapper}>
            <Text style={styles.content}>If you aren't sure you can give <Text style={{ fontWeight: 'bold' }}>{dog.name}</Text> a good home for the rest of its life, then please hit cancel</Text>
          </View>
          <View
            style={styles.controls}
            
          >
            <View style={styles.button}><Text style={styles.label}>Adopt</Text></View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('DogDetails')
              }}
            >
              <Text style={styles.label}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

AdoptConfirmation.propTypes = {
  screenProps: PropTypes.shape({
    dog: PropTypes.shape({
      imageUrl: PropTypes.string
    })
  }),
  
}

export default AdoptConfirmation
