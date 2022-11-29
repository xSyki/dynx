import { RouteEnum, useRouteStore } from '../../stores/routeStore'

interface ILayoutProps {
  children: React.ReactNode
}

function Layout(props: ILayoutProps) {
  const { children } = props

  const [, { setRoute }] = useRouteStore()

  return (
    <>
      <header>
        <nav>
          <button onClick={() => setRoute(RouteEnum.WORDS)}></button>
          <button onClick={() => setRoute(RouteEnum.CATEGORIES)}></button>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
