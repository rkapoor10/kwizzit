import './App.css';
import {Navbar, Footer, Banner, RulesBanner} from "./components"
import { useTheme } from './context/ThemeContext';
import { CategoryPage, QuestionPage, Scorecard } from './pages';



function App() {
  const {theme} = useTheme()
  return (
    <div className={`App ${theme}-theme`}>
      <Navbar/>
      {/* <Banner/> */}
      {/* <RulesBanner/> */}
      {/* <CategoryPage/> */}
      {/* <QuestionPage/> */}
      <Scorecard/>
      <Footer/>
    </div>
  );
}

export default App;
