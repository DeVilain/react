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
import BTCar from './BTCar/BTCar';
import BaiTapGioHangRedux from './ReduxDemo/BaiTapGioHang/BaiTapGioHangRedux';
import BTGameBauCua from './ReduxDemo/BTGameBauCua/BTGameBauCua';
import BTXucXac from './ReduxDemo/BTGameXucXac/BTXucXac';
import Validation_Form from './Validation_Form/Validation_Form';
import ReactLifeCycle from './ReactLifeCycle/ReactLifeCycle';

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
        <DemoPropsFunction></DemoPropsFunction>
        
          <BTGioHang></BTGioHang>   
          <BTCar></BTCar>
          <BaiTapGioHangRedux></BaiTapGioHangRedux>
          <BTGameBauCua></BTGameBauCua>
          <BTXucXac></BTXucXac>

        
        <ReactLifeCycle></ReactLifeCycle>*/}
        <Validation_Form></Validation_Form>
      </div>
    );
}

export default App;