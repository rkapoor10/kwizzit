import './App.css';
import {Navbar, Footer, Banner} from "./components"
import { useTheme } from './context/ThemeContext';


function App() {
  const {theme} = useTheme()
  return (
    <div className={`App ${theme}-theme`}>
      <Navbar/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
