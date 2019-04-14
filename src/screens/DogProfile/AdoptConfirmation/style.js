import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#f1f1f1',
    height: '100%',
    alignItems: 'center',
    paddingTop: 40
  },
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'gray',
    shadowColor: '#808080',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    zIndex: 5,
    borderRadius: 20
  },

  dogImage: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 26,
    paddingBottom: 8,
    textAlign: 'center',
    fontWeight: '600',
    color: '#ff4e60',
  },

  button: {
    backgroundColor: '#ff4e60',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    width: 80,
    textAlign: 'center',
    marginTop: 50,
  },

  adoptCard: {
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'white',
    
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    transform: [{
      translateY: -20
    }],
    borderRadius: 10
  },

  label: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16,
    textAlign: 'center'
  }
})