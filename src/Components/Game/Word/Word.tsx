import { SafeAreaView } from 'react-native'

import { useTranslation } from 'react-i18next'

import { LanguageEnum, t } from '../../../i18n/config'
import { useGameStore } from '../../../stores/gameStore'
import { GameStageEnum, useRoundStore } from '../../../stores/roundStore'
import StyledButton from '../../Atoms/StyledButton'
import StyledText from '../../Atoms/StyledText'
import Timer from '../Timer/Timer'

function Word() {
  const { i18n } = useTranslation()

  const [{ settings }] = useGameStore()
  const [{ rounds, roundNumber }, { setGameStage }] = useRoundStore()

  const round = rounds[roundNumber]

  return (
    <SafeAreaView>
      <StyledText>{round.word.word[i18n.language as LanguageEnum]}</StyledText>
      {settings.timer ? (
        <Timer />
      ) : (
        <StyledButton
          title={t('results')}
          onPress={() => setGameStage(GameStageEnum.RESULT)}
        />
      )}
    </SafeAreaView>
  )
}

export default Word
