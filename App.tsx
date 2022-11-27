import { useCallback } from 'react'
import { Text } from 'react-native'

import { useFonts } from 'expo-font'
import * as ExpoSplashScreen from 'expo-splash-screen'
import styled, { ThemeProvider } from 'styled-components/native'

import StyledButton from './src/Components/Atoms/StyledButton'
import GameRouter from './src/Components/GameRouter/GameRouter'
import Rules from './src/Components/Rules/Rules'
import Settings from './src/Components/Settings/Settings'
import SplashScreen from './src/Components/SplashScreen/SplashScreen'
import UserWords from './src/Components/UserWords/UserWords'
import i18n from './src/i18n/config'
import { RouterEnum, useRouterStore } from './src/stores/routerStore'
import { theme } from './src/styles/theme'

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

  const redirect = () => {
    switch (route) {
      case RouterEnum.SPLASH_SCREEN:
        return <SplashScreen />
      case RouterEnum.GAME:
        return <GameRouter />
      case RouterEnum.USER_WORDS:
        return <UserWords />
      case RouterEnum.RULES:
        return <Rules />
      case RouterEnum.SETTINGS:
        return <Settings />
      default:
        return (
          <AppWrapper>
            <Text>Error</Text>
          </AppWrapper>
        )
    }
  }

  const handleBack = () => {
    navigate(RouterEnum.SPLASH_SCREEN)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper onLayout={onLayoutRootView}>
        {route !== RouterEnum.GAME && route !== RouterEnum.SPLASH_SCREEN && (
          <StyledButton size="sm" onPress={handleBack} title={i18n.t('back')} />
        )}
        {redirect()}
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App

const AppWrapper = styled.SafeAreaView`
  font-family: LuckiestGuy;
  flex: 1;
  background-color: ${(props) => props.theme.background.default};
`
