import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#f1f1f1',
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
    color: '#ff4e60',
  },

  description: {
    fontSize: 16,
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
    backgroundColor: '#ff4e60',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
  },
  label: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16
  }
})