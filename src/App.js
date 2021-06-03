import { HashRouter, Switch, Route } from 'react-router-dom'
import { Auth, Profile, FindTicketForm, TicketList, BookTicket, PNRStatus } from './Pages'
import { Navbar, Footer } from './Components'

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Profile} />
        <Route exact path='/ticket_find' component={FindTicketForm}/>
        <Route exact path='/ticket_list/:id' component={TicketList}/>
        <Route exact path='/ticket_book' component={BookTicket}/>
        <Route exact path='/pnr_status' component={PNRStatus}/>
        <Route exact path='/auth' component={Auth} />
      </Switch>
      <Footer/>
    </HashRouter>
  )
}

export default App