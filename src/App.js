import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import Page from './components/page';


const App = () => {
  return (
    <Router>
      <Page />
    </Router>
  );
};

export default App;