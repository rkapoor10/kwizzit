import './App.css';
import {Navbar, Footer, Banner, RulesBanner} from "./components"
import { useTheme } from './context/ThemeContext';


function App() {
  const {theme} = useTheme()
  return (
    <div className={`App ${theme}-theme`}>
      <Navbar/>
      {/* <Banner/> */}
      <RulesBanner/>
      <Footer/>
    </div>
  );
}

export default App;
