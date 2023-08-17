import Form from "./Pages/Form/Form";
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Formtwo from "./Pages/Formtwo";
function App() {

  return (
    <div className={styles.webPageContainer}>
      <Router>
    <Routes>
      <Route path="/" exact element={<Form/>}/>
      <Route path="/page2" exact element={<Formtwo/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
