import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#808080',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    marginBottom: 7,
    marginTop: 7
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: '#343434'
  }
})