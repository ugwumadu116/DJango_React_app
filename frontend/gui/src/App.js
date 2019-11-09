import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes'
import './App.css';
/** 
 * import it form https://ant.design/docs/react/introduce
 * to help me style my components easily
 */
import 'antd/dist/antd.css';
import CustomLayoutComponent from "./components/containers/Layout";

function App() {
  return (
    <div >
      <Router>
      <CustomLayoutComponent>
        <BaseRouter />
      </CustomLayoutComponent>
      </Router>
    </div>
  );
}

export default App;
