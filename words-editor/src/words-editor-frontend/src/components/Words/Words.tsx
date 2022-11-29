import { getWords } from '../../api/words'
import useApiCall from '../../hooks/useApiCall'
import { useWordsStore } from '../../stores/wordsStore'

function Words() {
  const [{ words }, { setWords }] = useWordsStore()

  useApiCall(getWords, setWords)

  return <div>{JSON.stringify(words)}</div>
}

export default Words
