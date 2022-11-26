import { useCallback } from 'react'
import { Text } from 'react-native'
import { useFonts } from 'expo-font'
import * as ExpoSplashScreen from 'expo-splash-screen'
import styled from 'styled-components/native'

import StyledButton from './src/Components/Atoms/StyledButton'
import GameRouter from './src/Components/GameRouter/GameRouter'
import Rules from './src/Components/Rules/Rules'
import SplashScreen from './src/Components/SplashScreen/SplashScreen'
import UserWords from './src/Components/UserWords/UserWords'
import { RouterEnum, useRouterStore } from './src/stores/routerStore'

ExpoSplashScreen.preventAutoHideAsync()

function App() {
  const [{ route }, { navigate }] = useRouterStore()

  const [fontsLoaded] = useFonts({
    LuckiestGuy: require('./assets/fonts/LuckiestGuy.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await ExpoSplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  const redirect = (route: RouterEnum) => {
    switch (route) {
      case RouterEnum.SPLASH_SCREEN:
        return <SplashScreen />
      case RouterEnum.GAME:
        return <GameRouter />
      case RouterEnum.USER_WORDS:
        return <UserWords />
      case RouterEnum.RULES:
        return <Rules />
      default:
        return (
          <AppWrapper>
            <Text>Error</Text>
          </AppWrapper>
        )
    }
  }

  return (
    <AppWrapper onLayout={onLayoutRootView}>
      <StyledButton
        title="Back"
        onPress={() => navigate(RouterEnum.SPLASH_SCREEN)}
      />
      {redirect(route)}
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.SafeAreaView`
  font-family: LuckiestGuy;
  flex: 1;
  background-color: skyblue;
`
