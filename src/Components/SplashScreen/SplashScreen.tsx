import styled from 'styled-components/native'

import { RouterEnum, useRouterStore } from '../../stores/routerStore'
import StyledButton from '../Atoms/StyledButton'

function SplashScreen() {
  const [, { navigate }] = useRouterStore()

  return (
    <Wrapper>
      <Logo>DYNX</Logo>
      <Buttons>
        <StyledButton onPress={() => navigate(RouterEnum.GAME)} title="Game" />
        <StyledButton
          onPress={() => navigate(RouterEnum.USER_WORDS)}
          title="Your words"
        />
        <StyledButton
          onPress={() => navigate(RouterEnum.RULES)}
          title="Rules"
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
