import React from 'react';
import DataBinding from './DataBinding/DataBinding';
import Layout from './Components/Layout';
import BaiTapChonXe from './EventBinding/BaiTapChonXe';

function App() {
    return ( 
      <div className = "App" >
        {/*<Layout></Layout>
        <DataBinding></DataBinding>*/}
        <BaiTapChonXe></BaiTapChonXe>
      </div>
    );
}

export default App;