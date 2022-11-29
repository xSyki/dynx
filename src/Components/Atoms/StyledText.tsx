import styled from 'styled-components/native'

import { sizeType } from './styledComponentsTypes'

interface IStyledText {
  children: React.ReactNode
  size?: sizeType
}

function StyledText(props: IStyledText) {
  const { children, size } = props

  return <StyledTextWrapper size={size}>{children}</StyledTextWrapper>
}

export default StyledText

const StyledTextWrapper = styled.Text<{ size: sizeType | undefined }>`
  font-family: LuckiestGuy;
  color: white;
  font-size: 30px;
  ${(props) => props.size === 'sm' && 'font-size: 20px;'}
  ${(props) => props.size === 'bg' && 'font-size: 40px;'}
`
