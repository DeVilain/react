import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import BTGameBauCuaReducer from './BTGameBauCuaReducer';

const rootReducer = combineReducers({
    GioHangReducer: BaiTapGioHangReducer,

    BTGameBauCuaReducer
});

export default rootReducer;