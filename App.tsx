import { useCallback } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useFonts } from 'expo-font'
import * as ExpoSplashScreen from 'expo-splash-screen'
import styled from 'styled-components/native'

import GameRouter from './src/Components/GameRouter/GameRouter'
import SplashScreen from './src/Components/SplashScreen/SplashScreen'
import { RouterEnum, useRouterStore } from './src/stores/routerStore'

const AppWrapper = styled.SafeAreaView`
  font-family: LuckiestGuy;
  flex: 1;
`

ExpoSplashScreen.preventAutoHideAsync()

function App() {
  const [{ route }] = useRouterStore()

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
      default:
        return (
          <SafeAreaView>
            <Text>Error</Text>
          </SafeAreaView>
        )
    }
  }

  return <AppWrapper onLayout={onLayoutRootView}>{redirect(route)}</AppWrapper>
}

export default App
