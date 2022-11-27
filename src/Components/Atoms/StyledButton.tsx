import styled from 'styled-components/native'

import { sizeType } from './styledComponentsTypes'

interface IStyledButton {
  title: string
  onPress: () => void
  size?: sizeType
}

function StyledButton(props: IStyledButton) {
  const { title, onPress, size } = props

  return (
    <StyledButtonWrapper onPress={onPress}>
      <ButtonText size={size}>{title}</ButtonText>
    </StyledButtonWrapper>
  )
}

export default StyledButton

const StyledButtonWrapper = styled.TouchableOpacity`
  padding: 20px 40px;
`

const ButtonText = styled.Text<{ size: sizeType | undefined }>`
  color: #fff;
  font-size: 30px;
  ${(props) => props.size === 'sm' && 'font-size: 20px;'}
  ${(props) => props.size === 'bg' && 'font-size: 40px;'}
  font-family: LuckiestGuy;
  text-align: center;
`
