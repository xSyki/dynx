import styled from 'styled-components/native'

interface IStyledText {
  children: React.ReactNode
}

function StyledText(props: IStyledText) {
  const { children } = props

  return <StyledTextWrapper>{children}</StyledTextWrapper>
}

export default StyledText

const StyledTextWrapper = styled.Text`
  font-family: LuckiestGuy;
  color: white;
  font-size: 20px;
`
