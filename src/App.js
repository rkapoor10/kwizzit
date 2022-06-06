import './App.css';
import {Navbar} from "./components"
import { useTheme } from './context/ThemeContext';

function App() {
  const {theme} = useTheme()
  return (
    <div className={`App ${theme}-theme`}>
      <Navbar/>
      <h1>This is kwizzIt</h1>
    </div>
  );
}

export default App;
