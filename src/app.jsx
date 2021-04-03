import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import './module.scss'
import FooterPage from './components/Footer'
import Contact from './components/Contact'
import ContactmeLink from './components/ContactmeLink'
import Page from './FinalPage'

class App extends React.Component {

  render() { 
    return (
      <BrowserRouter>
        <main>

          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Page} />
          </Switch>

          <FooterPage />
        </main>
        <ContactmeLink />
      </BrowserRouter>
    );

  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)