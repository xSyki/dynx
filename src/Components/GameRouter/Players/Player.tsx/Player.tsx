import { Dispatch, SetStateAction } from 'react'

import styled from 'styled-components/native'

import ThrashIcon from '../../../../../assets/icons/trash.svg'
import { t } from '../../../../i18n/config'
import { IPlayer } from '../../../../stores/gameStore'
import StyledButton from '../../../Atoms/StyledButton'
import StyledText from '../../../Atoms/StyledText'
import StyledTextInput from '../../../Atoms/StyledTextInput'

interface IPlayerProps {
  player: IPlayer
  index: number
  handleAddNewPlayer: () => void
  setTemporaryPlayers: Dispatch<SetStateAction<IPlayer[]>>
}

function Player(props: IPlayerProps) {
  const { player, index, handleAddNewPlayer, setTemporaryPlayers } = props

  const editPlayerName = (id: string, name: string) => {
    setTemporaryPlayers((players) => {
      return players.map((player) => {
        if (player.id === id) {
          player.name = name
        }
        return player
      })
    })
  }

  const handleDeletePlayer = (id: string) => {
    setTemporaryPlayers((players) => {
      return players.filter((player) => player.id !== id)
    })
  }

  return (
    <StyledPlayer>
      <StyledText>{index + 1}.</StyledText>
      <StyledTextInput
        onSubmitEditing={() => handleAddNewPlayer()}
        placeholder={t('name')}
        value={player.name}
        onChangeText={(name) => editPlayerName(player.id, name.toUpperCase())}
      />
      <StyledButton size="sm" onPress={() => handleDeletePlayer(player.id)}>
        <ThrashIcon height={20} width={20} fill="white" />
      </StyledButton>
    </StyledPlayer>
  )
}

export default Player

const StyledPlayer = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`
