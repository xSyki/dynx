import { getCategories } from '../api/categories'
import { getWords } from '../api/words'
import useApiCall from '../hooks/useApiCall'
import { useCategoriesStore } from '../stores/categoriesStore'
import { RouteEnum, useRouteStore } from '../stores/routeStore'
import { useWordsStore } from '../stores/wordsStore'
import Categories from './Categories/Categories'
import Layout from './Layout/Layout'
import Words from './Words/Words'
import '../styles/table.scss'

function App() {
  const [{ route }] = useRouteStore()

  const [, { setCategories }] = useCategoriesStore()
  const [, { setWords }] = useWordsStore()

  useApiCall(getCategories, setCategories)
  useApiCall(getWords, setWords)

  return (
    <Layout>
      {route === RouteEnum.WORDS && <Words />}
      {route === RouteEnum.CATEGORIES && <Categories />}
    </Layout>
  )
}

export default App
