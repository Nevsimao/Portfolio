import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeComp from './components/HomeComp'

import { GlobalStyles } from './styles/GlobalStyles'

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' render={() => <HomeComp />} />
      </Switch>
    </Router>
  )
}
