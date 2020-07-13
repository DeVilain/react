import React from 'react';
import DataBinding from './DataBinding/DataBinding';
import Layout from './Components/Layout';

function App() {
    return ( 
      <div className = "App" >
        <Layout></Layout>
        <DataBinding></DataBinding>
      </div>
    );
}

export default App;