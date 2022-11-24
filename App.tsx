import { useCallback } from 'react'
import { Button, Text } from 'react-native'
import { useFonts } from 'expo-font'
import * as ExpoSplashScreen from 'expo-splash-screen'
import styled from 'styled-components/native'

import GameRouter from './src/Components/GameRouter/GameRouter'
import Rules from './src/Components/Rules/Rules'
import SplashScreen from './src/Components/SplashScreen/SplashScreen'
import { RouterEnum, useRouterStore } from './src/stores/routerStore'

const AppWrapper = styled.SafeAreaView`
  font-family: LuckiestGuy;
  flex: 1;
  background-color: skyblue;
`

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
      <Button title="Back" onPress={() => navigate(RouterEnum.SPLASH_SCREEN)} />
      {redirect(route)}
    </AppWrapper>
  )
}

export default App
