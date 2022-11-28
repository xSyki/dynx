import { SafeAreaView } from 'react-native'

import { changeLanguage } from 'i18next'
import { useTranslation } from 'react-i18next'
import RNPickerSelect from 'react-native-picker-select'

import { LanguageEnum } from '../../../i18n/config'

function ChangeLanguage() {
  const { i18n } = useTranslation()

  return (
    <SafeAreaView>
      <RNPickerSelect
        items={Object.values(LanguageEnum).map((language) => {
          return {
            label: language.toUpperCase(),
            value: language,
          }
        })}
        onValueChange={(language: LanguageEnum) =>
          changeLanguage(language || i18n.language)
        }
        value={i18n.language}
      />
    </SafeAreaView>
  )
}

export default ChangeLanguage
