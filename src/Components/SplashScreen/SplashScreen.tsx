import styled from 'styled-components/native'

import { RouterEnum, useRouterStore } from '../../stores/routerStore'

function SplashScreen() {
  const [, { navigate }] = useRouterStore()

  return (
    <Wrapper>
      <Buttons>
        <Text>TEST</Text>
        <StyledButton title="Game" onPress={() => navigate(RouterEnum.GAME)} />
        <StyledButton
          title="Your words"
          onPress={() => navigate(RouterEnum.GAME)}
        />
        <StyledButton
          title="Rules"
          onPress={() => navigate(RouterEnum.RULES)}
        />
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

const StyledButton = styled.Button`
  fontfamily: LuckiestGuy;
`
const Text = styled.Text`
  fontfamily: LuckiestGuy;
`
