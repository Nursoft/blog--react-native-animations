import React from 'react'
import PropTypes from 'prop-types'

import { 
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import styles from './style'

const Card = ({ dog }) => {
  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.dogImage}
          source={{ uri: dog.imageUrl}}
        />
      </View>

      <View style={styles.dogInfo}>
        <Text style={styles.dogName}>{dog.name}</Text>
        <Text style={styles.dogAge}>{dog.age}</Text>
      </View>

      <View style={styles.expenses}>
        <Text style={styles.dogExpenseLabel}>Monthly expenses</Text>
        <Text style={styles.dogExpenses}>${dog.monthlyExpenses.toLocaleString('en-US')}</Text>
      </View>
    </View>
  )
}

Card.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string,
    monthlyExpenses: PropTypes.number,
    imageUrl: PropTypes.string
  })
}

export default Card
