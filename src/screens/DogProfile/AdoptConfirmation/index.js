import React, { Component } from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import { SharedElement } from 'react-native-motion';

import styles from './style'

class AdoptConfirmation extends Component {
  render () {
    const { dog } = this.props
    return (
      <View style={styles.container}>
        <SharedElement sourceeId='source'>
          <View style={styles.imageContainer}>
            <Image
              style={styles.dogImage}
              source={{ uri: dog.imageUrl }}
            />
          </View>
        </SharedElement>

        <View style={styles.adoptCard}>
          <Text style={styles.title}>Awesome!</Text>

          <Text style={styles.content}>Adopting a dog is a lot of responsability. We work hard to make sure allthe pets in our shelter find the best suitable home for them.</Text>
        
          <View style={styles.button}><Text style={styles.label}>Adopt</Text></View>
        </View>
      </View>
    )
  }
}

export default AdoptConfirmation
