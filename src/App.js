import './App.css';
import Movies from './components/Movies';
import {Route,Switch,Redirect} from 'react-router-dom'
import Navbar from './components/Navbar';
import Customers from './components/Customers'
import Rentals from './components/Rentals'
import NotFound from './components/NotFound';
import MovieDetails from './components/MovieDetails'
import Login from './components/Login';
import Register from './components/Register';
import NewMovie from './components/NewMovie';

function App() {
  return (
    <main className="container">
      <Navbar />
      <Switch>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/moviesdetails/:id" component={MovieDetails}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/movies/new" component={NewMovie}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/" exact component={Movies}></Route>
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    </main>
  );
}

export default App;
