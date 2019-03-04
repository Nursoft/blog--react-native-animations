import { Navigation } from 'react-native-navigation';

import DogListScreen from './DogList'
import DogProfileScreen from './DogProfile'


export const SCREEN_IDS = {
  DOG_LIST_SCREEN: 'dogapp.DogListScreen',
  DOG_PROFILE_SCREEN : 'dogapp.DogProfileScreen'
}

export default function registerScreens(store, Provider) {
  Navigation.registerComponent(SCREEN_IDS.DOG_LIST_SCREEN, () => DogListScreen);
  Navigation.registerComponent(SCREEN_IDS.DOG_PROFILE_SCREEN, () => DogProfileScreen);
}

