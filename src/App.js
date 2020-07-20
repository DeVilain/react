import React from 'react';
import DataBinding from './DataBinding/DataBinding';
import Layout from './Components/Layout';
import BaiTapChonXe from './EventBinding/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import EXRenderMap from './RenderWithMap/EXRenderMap';
import DemoProps from './Props/DemoProps';
import BT2ProductList from './Props/BT2ProductList/BT2ProductList';
import DemoPropsFunction from './Props/DemoPropsFunction/DemoPropsFunction';
import BTGioHang from './BTGioHang/BTGioHang';

function App() {
    return ( 
      <div className = "App" >
        {/*<Layout></Layout>
        <DataBinding></DataBinding>
        <BaiTapChonXe></BaiTapChonXe>
        <RenderWithMap></RenderWithMap>
        <EXRenderMap></EXRenderMap>
        <DemoProps></DemoProps>
        <BT2ProductList></BT2ProductList>
        <DemoPropsFunction></DemoPropsFunction>*/}
        <BTGioHang></BTGioHang>
      </div>
    );
}

export default App;