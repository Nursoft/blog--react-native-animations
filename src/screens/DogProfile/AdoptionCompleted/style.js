import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },

  dogAnimationContainer: {
    width: '100%',
    height: 300
  },

  dogAnimation: {
    transform: [{
      scale: 1.25
    }]
  },

  check: {
    height: 60,
    width: 60,
    transform: [{
      translateX: 9,
    }]
  },

  title: {
    fontSize: 26,
    paddingBottom: 8,
    textAlign: 'center',
    fontWeight: '600',
    color: '#B07156',
    marginTop: 10,
    marginBottom: 10
  },

  content: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20
  },

  messageBox: {
    height: 200,
    marginLeft: 45,
    marginRight: 45
  },

  wrapper: {
    alignItems: 'center',
    transform: [{
      translateY: -25,
    }]
  },
})