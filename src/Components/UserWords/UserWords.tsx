import styled from 'styled-components/native'

import { t } from '../../i18n/config'
import StyledText from '../Atoms/StyledText'

function UserWords() {
  return (
    <UserWordsWrapper>
      <StyledText>{t('your_words')}</StyledText>
    </UserWordsWrapper>
  )
}

export default UserWords

const UserWordsWrapper = styled.SafeAreaView`
  font-family: LuckiestGuy;
  flex: 1;
  background-color: ${(props) => props.theme.background.default};
`
