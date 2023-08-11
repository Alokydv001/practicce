import logo from './logo.svg';
import './App.css';
import SearchFilter from './SearchFilter';
import SimpleCounter from './SimpleCounter';
import ItemList from './ItemList';
import Accordion from './Accordion';
import ImageSlider from './ImageSlider';
import Checklist from './CheckList';
import LoginForm from './LoginForm';
// import DataFromAPI from './DataFromApi';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
   <SearchFilter></SearchFilter>
   <SimpleCounter> </SimpleCounter>
   <ItemList></ItemList>
   <Accordion></Accordion>
   <ImageSlider></ImageSlider>
   <Checklist></Checklist>
   <LoginForm></LoginForm>
   {/* <DataFromAPI></DataFromAPI> */}
    </div>
  );
}
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
};




export default App;
