import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import BTGameBauCuaReducer from './BTGameBauCuaReducer';
import BTGameXucXacReducer from './BTGameXucXacReducer';
import BTQuanLyNguoiDungReducer from './BTQuanLyNguoiDungReducer';

const rootReducer = combineReducers({
    GioHangReducer: BaiTapGioHangReducer,

    BTGameBauCuaReducer,

    BTGameXucXacReducer,

    BTQuanLyNguoiDungReducer
});

export default rootReducer;