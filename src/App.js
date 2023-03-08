import './App.css';
import Movies from './components/Movies';
import {Route,Switch,Redirect} from 'react-router-dom'
import Navbar from './components/Navbar';
import Customers from './components/Customers'
import Rentals from './components/Rentals'
import NotFound from './components/NotFound';

function App() {
  return (
    <main className="container">
      <Navbar />
      <Switch>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        
        <Route path="/movies" component={Movies}></Route>
        <Route path="/" exact component={Movies}></Route>
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    </main>
  );
}

export default App;
