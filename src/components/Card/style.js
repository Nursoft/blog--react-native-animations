import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 75,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
  },

  imageContainer : {
    height: 75,
    width: 75,
  },

  dogImage: {
    height: 75,
    width: 75,
  },

  dogInfo: {
    paddingLeft: 10,
    paddingTop: 10,
    flex: 2,
  },

  dogName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ff4e60',
    marginBottom: 3,
  },

  dogAge: {
    fontSize: 14,
    color: '#353535',
    fontWeight: '500',
    marginBottom: 5
  },
  expenses: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    paddingRight: 20
  },

  dogExpenseLabel: {
    color: '#A1A1A1',
    fontSize: 12, 
    textAlign: 'center',
    width: 60,
  },
  dogExpenses: {
    color: '#353535',
    fontSize: 14,
  }

})