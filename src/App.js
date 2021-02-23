import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Main from './views/Main'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/noor">
          <Main admin />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
