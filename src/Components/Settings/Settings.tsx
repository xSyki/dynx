import { Text } from 'react-native'

import { t } from 'i18next'
import styled from 'styled-components/native'

import ChangeLanguage from './ChangeLanguage/ChangeLanguage'

function Settings() {
  return (
    <StyledSettings>
      <Text>{t('settings')}</Text>
      <ChangeLanguage />
    </StyledSettings>
  )
}

export default Settings

const StyledSettings = styled.SafeAreaView``
