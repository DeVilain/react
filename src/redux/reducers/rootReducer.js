import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import BTGameBauCuaReducer from './BTGameBauCuaReducer';
import BTGameXucXacReducer from './BTGameXucXacReducer';
const rootReducer = combineReducers({
    GioHangReducer: BaiTapGioHangReducer,

    BTGameBauCuaReducer,

    BTGameXucXacReducer
});

export default rootReducer;