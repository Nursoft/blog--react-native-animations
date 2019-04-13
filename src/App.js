import React, { Component } from 'react'
import { NativeRouter, Route, Link, Switch, Redirect, matchPath } from 'react-router-native';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import posed, { Transition } from 'react-native-pose';

import DogListScreen from './screens/DogList'
import DogProfileScreen from './screens/DogProfile'

const AnimatedLayer = posed.View({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    }
  }

  render () {
    const routes = [{
      path: '/dogs',
      component: DogListScreen,
      exact: true
    }, {
      path: '/dogs/:dogId',
      component: DogProfileScreen,
      exact: false
    }]

    return (
      <NativeRouter>
        <View style={{
            backgroundColor: 'white',
            height: '100%',
            width: '100%'
          }}
        >
          <View style={{ position: 'absolute', zIndex: 3000000, height: 300, paddingTop: 35}}>
            <Link to='/dogs'><Text>Doggy</Text></Link>
            <Link to='/dogs/1'><Text>Doggo</Text></Link>
          </View>
          <Route
            path='*'
            render={(props) => {
              const { pathname } = props.location
              const chosenRoute = routes.find(route => matchPath(pathname, route) !== null)
                || routes[0]

              let matchData
              if (chosenRoute) {
                matchData = matchPath(pathname, chosenRoute)
              }
              return (
                <Transition animateOnMount>
                  <AnimatedLayer key={chosenRoute.path}>
                    <chosenRoute.component
                      {...props}
                      match={matchData}
                    />
                  </AnimatedLayer>
                </Transition>
              )
            }}
          />
          {/*}
          <Switch>
            <Route
              path='*'
              render={(props) => {
                const { pathname } = props.location
                const chosenRoute = routes.find(route => matchPath(pathname, route) !== null)
                  || routes[0]

                let matchData
                if (chosenRoute) {
                  matchData = matchPath(pathname, chosenRoute)
                }

                console.log('SHAA0', chosenRoute)
                return (

                  <Transition animateOnMount>
                    {/*}
                    <chosenRoute.component
                      key={chosenRoute.path}
                      {...props}
                      match={matchData}
                    />
                  }
                  </Transition>
                )
              }}
            />
          </Switch>
          */}
        </View>
      </NativeRouter>
    )
  }
}

export default App
