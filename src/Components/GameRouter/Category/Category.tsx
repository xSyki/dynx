import styled from 'styled-components/native'

import images from '../../../../assets/images/images'
import categories from '../../../../assets/words/categories.json'
import wordsList from '../../../../assets/words/words.json'
import i18n, { LanguageEnum } from '../../../i18n/config'
import {
  GameStatusEnum,
  ICategory,
  useGameStore,
} from '../../../stores/gameStore'
import { getRoundLength } from '../../../utils/getRounds'
import StyledButton from '../../Atoms/StyledButton'
import StyledText from '../../Atoms/StyledText'

function Category() {
  const [{ players, gameMode }, { setGameStatus, setCategory }] = useGameStore()

  const handleChoseCategory = (category: ICategory) => {
    setCategory(category)
    setGameStatus(GameStatusEnum.SETTINGS)
  }

  const filteredCategories = categories.filter(
    (category) =>
      wordsList.filter((word) => word.categories.includes(category.id)).length >
      getRoundLength(players.length, gameMode)
  )

  return (
    <StyledCategory>
      <StyledText size="bg">Categories</StyledText>
      <StyledButtons>
        {(filteredCategories as ICategory[]).map((category) => (
          <StyledButton
            onPress={() => handleChoseCategory(category)}
            key={category.id}
            title={category.name[i18n.language as LanguageEnum]}
            image={images.find((image) => image.name === category.image)?.image}
          />
        ))}
      </StyledButtons>
    </StyledCategory>
  )
}

export default Category

const StyledCategory = styled.SafeAreaView`
  height: 100%;
`

const StyledButtons = styled.ScrollView`
  /* flex: 1; */
  /* gap: 20px; */
  /* height: 100%; */
`
