import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { SCREEN_IDS } from '../../screens'

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import Card from '../../components/Card'

import styles from './style'
import dogList from './dogs'

class DogListScreen extends Component {

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
      },
    };
  }

  constructor(props) {
    super(props)
  
    this.state = {}

    this.onDogCardPressed = this.onDogCardPressed.bind(this)
  }

  onDogCardPressed (dog) {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_IDS.DOG_PROFILE_SCREEN,
        passProps: {
          dog,
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.listTitle}>Choose a dog to foster!</Text>

        <FlatList
          style={styles.listContainer}
          keyExtractor={item => item.id}
          data={dogList}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => { this.onDogCardPressed(item) }}
            >
              <Card
                dog={item}
              />
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

export default DogListScreen
