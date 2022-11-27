import styled from 'styled-components/native'

import { sizeType } from './styledComponentsTypes'

interface IStyledButton {
  title?: string | null
  onPress: () => void
  size?: sizeType
  children?: React.ReactNode
  disabled?: boolean
}

function StyledButton(props: IStyledButton) {
  const { title, onPress, size, children, disabled } = props

  return (
    <StyledButtonWrapper
      onPress={onPress}
      disabled={disabled !== undefined ? disabled : false}
    >
      {title ? (
        <ButtonText
          disabled={disabled !== undefined ? disabled : false}
          size={size}
        >
          {title}
        </ButtonText>
      ) : null}
      {children}
    </StyledButtonWrapper>
  )
}

export default StyledButton

const StyledButtonWrapper = styled.TouchableOpacity`
  padding: 20px 40px;
`

const ButtonText = styled.Text<{
  size: sizeType | undefined
  disabled: boolean
}>`
  color: ${(props) =>
    props.disabled ? props.theme.text.darker : props.theme.text.default};
  font-size: 30px;
  ${(props) => props.size === 'sm' && 'font-size: 20px;'}
  ${(props) => props.size === 'bg' && 'font-size: 40px;'}
  font-family: LuckiestGuy;
  text-align: center;
`
