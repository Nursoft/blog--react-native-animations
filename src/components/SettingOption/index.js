import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text
} from 'react-native'

import Switch from '../Switch'
import styles from './style'

const SettingOption = (props) => (
  <View style={styles.container}>
    <View style={styles.nameContainer}>
      <Text style={styles.name}>{props.name}</Text>
    </View>
    <Switch active={props.active} onToggle={props.onToggle} />
  </View>
)


SettingOption.propTypes = {
  onToggle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default SettingOption