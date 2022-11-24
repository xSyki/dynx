import styled from 'styled-components/native'

import { RouterEnum, useRouterStore } from '../../stores/routerStore'

function SplashScreen() {
  const [, { navigate }] = useRouterStore()

  return (
    <Wrapper>
      <Buttons>
        <Logo>DYNX</Logo>
        <StyledButton onPress={() => navigate(RouterEnum.GAME)}>
          <StyledText>Game</StyledText>
        </StyledButton>
        <StyledButton onPress={() => navigate(RouterEnum.GAME)}>
          <StyledText>Your words</StyledText>
        </StyledButton>
        <StyledButton onPress={() => navigate(RouterEnum.RULES)}>
          <StyledText>Rules</StyledText>
        </StyledButton>
      </Buttons>
    </Wrapper>
  )
}

export default SplashScreen

const Wrapper = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  gap: 50px;
`

const Buttons = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const StyledButton = styled.TouchableOpacity`
  font-family: LuckiestGuy;
`

const StyledText = styled.Text`
  font-family: LuckiestGuy;
  font-size: 32px;
  color: #fff;
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
