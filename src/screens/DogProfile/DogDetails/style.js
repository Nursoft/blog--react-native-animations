import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffffff',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: 'gray',
    shadowColor: '#808080',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },

  dogImage: {
    width: '100%',
    height: '100%',
  },

  textContent: {
    paddingLeft: 25,
    paddingRight: 25
  },

  dogName: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 26,
    fontWeight: '600',
    color: '#B07156',
  },

  description: {
    fontSize: 16,
    color: '#333333'
  },

  actionsContainer: {
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: 20,
  }, 

  button: {
    backgroundColor: '#F9A03F',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 10,
    shadowColor: '#808080',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  label: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16
  }
})