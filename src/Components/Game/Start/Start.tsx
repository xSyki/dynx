import { SafeAreaView } from 'react-native'

import { t } from '../../../i18n/config'
import { GameStageEnum, useRoundStore } from '../../../stores/roundStore'
import StyledButton from '../../Atoms/StyledButton'

function Start() {
  const [, { setGameStage }] = useRoundStore()

  return (
    <SafeAreaView>
      <StyledButton
        title={t('start')}
        onPress={() => setGameStage(GameStageEnum.PLAYERS)}
      />
    </SafeAreaView>
  )
}

export default Start
