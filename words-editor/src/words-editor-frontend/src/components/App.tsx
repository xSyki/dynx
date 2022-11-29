import { RouteEnum, useRouteStore } from '../stores/routeStore'
import Categories from './Categories/Categories'
import Layout from './Layout/Layout'
import Words from './Words/Words'

function App() {
  const [{ route }] = useRouteStore()

  return (
    <Layout>
      {route === RouteEnum.WORDS && <Words />}
      {route === RouteEnum.CATEGORIES && <Categories />}
    </Layout>
  )
}

export default App
