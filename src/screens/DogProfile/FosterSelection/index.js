import React, { Component } from 'react'
import {
  View,
  FlatList,
  Text
} from 'react-native'

import SettingOption from '../../../components/SettingOption'

import styles from './style'

class FosterSelection extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      options: [{
        id: 1,
        name: 'Food supplies',
        active: false
      }, {
        id: 2,
        name: 'Toys',
        active: false
      }, {
        id: 3,
        name: 'Adoption advertisement',
        active: false,
      }, {
        id: 4,
        name: 'Health expenses',
        active: false
      }]
    }
  }

  render() {
    const { dog } = this.props.screenProps
    const { options } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
         What would you like to help {dog.name} with?
        </Text>
        <FlatList
          style={styles.listContainer}
          keyExtractor={item => item.id}
          data={this.state.options}
          renderItem={({ item, index }) =>
            <SettingOption
              active={item.active}
              name={item.name}
              onToggle={() => {

                const options = this.state.options.map((targetItem, targetIndex) => {
                  if (index === targetIndex) {
                    return {
                      ...targetItem,
                      active: !targetItem.active
                    }
                  }

                  return targetItem
                })
                console.log(options)
                this.setState({
                  options,
                })
              }}
            />
          }
        />
      </View>
    )
  }
}

export default FosterSelection;
