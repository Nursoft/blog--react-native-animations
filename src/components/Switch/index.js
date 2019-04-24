import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-native-pose'
import { TouchableOpacity, Text } from 'react-native'

import styles from './style'

const Circle = posed.View({
  on: {
    x: 25,

  },
  off: {
    x: 0,
  },
  
  passive: {
    backgroundColor: ['x', {
      inputRange: [0, 25],
      outputRange: ['#e1e1e1', '#F9A03F']
    }]
  }
})

const Switch = ({ active, onToggle }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onToggle}
    >
      <Circle
        pose={active ? 'on' : 'off'}
        style={styles.circle}
      />
    </TouchableOpacity>
  )
}

Switch.propTypes = {
  active: PropTypes.bool.isRequired,
  onToggle: PropTypes.func
}

export default Switch
