import React from 'react';
import GlobalStyle from './style/GlobalStyle'
import Layout from "./components/Layout/index"
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <div>
      <Layout/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
