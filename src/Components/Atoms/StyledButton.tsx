import styled from 'styled-components/native'

interface IStyledButton {
  title: string
  onPress: () => void
}

function StyledButton(props: IStyledButton) {
  const { title, onPress } = props

  return (
    <StyledButtonWrapper onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </StyledButtonWrapper>
  )
}

export default StyledButton

const StyledButtonWrapper = styled.TouchableOpacity`
  padding: 20px 40px;
`

const ButtonText = styled.Text`
  color: #fff;
  font-size: 40px;
  font-family: LuckiestGuy;
`
