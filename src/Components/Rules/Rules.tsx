import { SafeAreaView } from 'react-native'

import { t } from '../../i18n/config'
import StyledText from '../Atoms/StyledText'

function Rules() {
  return (
    <SafeAreaView>
      <StyledText>{t('rules')}</StyledText>
    </SafeAreaView>
  )
}

export default Rules
