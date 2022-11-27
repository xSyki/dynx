import styled from 'styled-components/native'

import i18n from '../../i18n/config'
import { RouterEnum, useRouterStore } from '../../stores/routerStore'
import StyledButton from '../Atoms/StyledButton'

function SplashScreen() {
  const [, { navigate }] = useRouterStore()

  return (
    <Wrapper>
      <Logo>JINX</Logo>
      <Buttons>
        <StyledButton
          size="bg"
          onPress={() => navigate(RouterEnum.GAME)}
          title={i18n.t('game')}
        />
        <StyledButton
          size="bg"
          onPress={() => navigate(RouterEnum.USER_WORDS)}
          title={i18n.t('your_words')}
        />
        <StyledButton
          size="bg"
          onPress={() => navigate(RouterEnum.RULES)}
          title={i18n.t('rules')}
        />
        <StyledButton
          size="bg"
          onPress={() => navigate(RouterEnum.SETTINGS)}
          title={i18n.t('settings')}
        />
      </Buttons>
    </Wrapper>
  )
}

export default SplashScreen

const Wrapper = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
`

const Buttons = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`

const Logo = styled.Text`
  font-family: LuckiestGuy;
  font-size: 100px;
  color: #fff;
  text-shadow: 0 1px 0 #ccc;
  text-shadow: 0 2px 0 #ccc;
  text-shadow: 0 3px 0 #ccc;
  text-shadow: 0 4px 0 #ccc;
  text-shadow: 0 5px 0 #ccc;
  text-shadow: 0 6px 0 transparent;
  text-shadow: 0 7px 0 transparent;
  text-shadow: 0 8px 0 transparent;
  text-shadow: 0 9px 0 transparent;
  text-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
  padding: 20px;
`
