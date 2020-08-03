const dsXucXac = [
    { ma: 1, hinhAnh: './img/gameXucXac/1.png', soDiem: 1 },
    { ma: 2, hinhAnh: './img/gameXucXac/2.png', soDiem: 2 },
    { ma: 3, hinhAnh: './img/gameXucXac/3.png', soDiem: 3 },
    { ma: 4, hinhAnh: './img/gameXucXac/4.png', soDiem: 4 },
    { ma: 5, hinhAnh: './img/gameXucXac/5.png', soDiem: 5 },
    { ma: 6, hinhAnh: './img/gameXucXac/6.png', soDiem: 6 }
]

const stateDefault = {
    banChon: 'TÀI',
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        { ma: 1, hinhAnh: './img/gameXucXac/1.png', soDiem: 1 },
        { ma: 2, hinhAnh: './img/gameXucXac/2.png', soDiem: 1 },
        { ma: 3, hinhAnh: './img/gameXucXac/3.png', soDiem: 1 }
    ],

}

const BTGameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC_XUC_XAC': {
            state.banChon = action.banChon;
            return { ...state };
        }
        case 'RANDOM_XI_NGAU': {
            let mangXiNgau = [];
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                mangXiNgau.push(dsXucXac[soNgauNhien]);
            }
            return { ...state, mangXucXac: mangXiNgau };

        }
        case 'TINH_DIEM': {
            // tính tổng điểm các quân xúc xắc trong mảng xúc xắc
            let tongDiem = state.mangXucXac.reduce((tongDiem_XiNgau, xiNgau, index) => {
                return tongDiem_XiNgau += xiNgau.soDiem;
            }, 0);

            // trường hợp thắng. XỈU từ 4 -> 10, TÀI từ 11 -> 17
            if ((tongDiem > 10 && state.banChon === 'TÀI') || (tongDiem <= 10 && state.banChon === 'XỈU')) {
                state.soBanThang += 1;
            }
            state.soBanChoi += 1;
            return { ...state };
        }
        default: return { ...state };
    }
}

export default BTGameXucXacReducer;