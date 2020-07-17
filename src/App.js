import React from 'react';
import DataBinding from './DataBinding/DataBinding';
import Layout from './Components/Layout';
import BaiTapChonXe from './EventBinding/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import EXRenderMap from './RenderWithMap/EXRenderMap';
import DemoProps from './Props/DemoProps';
import BT2ProductList from './Props/BT2ProductList/BT2ProductList';

function App() {
    return ( 
      <div className = "App" >
        {/*<Layout></Layout>
        <DataBinding></DataBinding>
        <BaiTapChonXe></BaiTapChonXe>
        <RenderWithMap></RenderWithMap>
        <EXRenderMap></EXRenderMap>
        <DemoProps></DemoProps>*/}
        <BT2ProductList></BT2ProductList>
      </div>
    );
}

export default App;