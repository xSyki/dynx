import styled from 'styled-components/native'

import StyledText from '../Atoms/StyledText'

function UserWords() {
  return (
    <UserWordsWrapper>
      <StyledText>UserWords</StyledText>
    </UserWordsWrapper>
  )
}

export default UserWords

const UserWordsWrapper = styled.SafeAreaView`
  font-family: LuckiestGuy;
  flex: 1;
  background-color: skyblue;
`
