import { ImageSourcePropType } from 'react-native'

import styled from 'styled-components/native'

import { sizeType } from './styledComponentsTypes'

interface IStyledButton {
  title?: string | null
  onPress: () => void
  size?: sizeType
  children?: React.ReactNode
  disabled?: boolean
  image?: ImageSourcePropType
}

function StyledButton(props: IStyledButton) {
  const { title, onPress, size, children, disabled, image } = props

  return (
    <StyledButtonWrapper
      onPress={onPress}
      disabled={disabled !== undefined ? disabled : false}
    >
      {image ? <StyledImage source={image} /> : null}
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

const StyledImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`
