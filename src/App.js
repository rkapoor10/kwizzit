import './App.css';
import {Navbar, Footer, Banner, RulesBanner} from "./components"
import { useTheme } from './context/ThemeContext';
import { CategoryPage } from './pages/categoryPage/CategoryPage';


function App() {
  const {theme} = useTheme()
  return (
    <div className={`App ${theme}-theme`}>
      <Navbar/>
      {/* <Banner/> */}
      {/* <RulesBanner/> */}
      <CategoryPage/>
      <Footer/>
    </div>
  );
}

export default App;
