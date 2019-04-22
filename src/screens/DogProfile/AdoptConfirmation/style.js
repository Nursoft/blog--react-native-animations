import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFFFFF',
    height: '100%',
    alignItems: 'center',
    paddingTop: 40
  },
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'gray',
    shadowColor: '#808080',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    zIndex: 5,
    //borderRadius: 20
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
    color: '#B07156',
  },

  button: {
    backgroundColor: '#F9A03F',
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: '#808080',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },

  cancelButton: {
    paddingTop: 10,
    paddingBottom: 0,
    height: 32,
    flex: 1,
    textAlign: 'center'
  },

  adoptCard: {
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'white',
    shadowColor: '#808080',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
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
  },

  cancelLabel: {
    color: '#F9A03F',
    fontWeight: '800',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  controls: {
    marginTop: 40,
    flexDirection: 'row',
  },
  content: {
    color: '#333333',
  },
  secondaryContentWrapper: {
    marginTop: 15
  },
})