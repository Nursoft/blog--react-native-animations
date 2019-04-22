import React, { Component } from 'react'
import LottieView from 'lottie-react-native';
import dogAnimation from '../../../assets/dog.json'
import checkImage from '../../../assets/check.png'

import {
  View,
  Image,
  Animated,
  Easing,
  Text
} from 'react-native'

import styles from './style'

class AdoptionCompleted extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
  }

  render () {
    const { dog } = this.props.screenProps
    return (
      <View style={styles.container}>
        <View style={styles.dogAnimationContainer}>
          <LottieView
            style={styles.dogAnimation}
            source={dogAnimation}
            loop
            autoPlay
          />
        </View>

        <View style={styles.wrapper}>
          <Image source={checkImage} style={styles.check} />
          <View style={styles.messageBox}>
            <View style={styles.boxContent}>
              <Text style={styles.content}>
                An agent will call you soon to your phone to see if you are up to the challenge of taking care of {dog.name}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default AdoptionCompleted
