import { Navigation } from "react-native-navigation";
import registerScreens, { SCREEN_IDS } from './src/screens'

// Register all screens

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: SCREEN_IDS.DOG_LIST_SCREEN,
              name: SCREEN_IDS.DOG_LIST_SCREEN,
            }
          }
        ]
      }
    }
  });
})

console.disableYellowBox = true;