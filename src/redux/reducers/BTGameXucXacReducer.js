const dsXucXac = [
    { ma: 1, hinhAnh: './img/gameXucXac/1.png', soDiem: 1 },
    { ma: 2, hinhAnh: './img/gameXucXac/2.png', soDiem: 1 },
    { ma: 3, hinhAnh: './img/gameXucXac/3.png', soDiem: 1 },
    { ma: 4, hinhAnh: './img/gameXucXac/1.png', soDiem: 4 },
    { ma: 5, hinhAnh: './img/gameXucXac/2.png', soDiem: 5 },
    { ma: 6, hinhAnh: './img/gameXucXac/3.png', soDiem: 6 }
]

const stateDefault = {
    banChon: 'TÀI',
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        { ma: 1, hinhAnh: './img/gameXucXac/1.png', soDiem: 1 },
        { ma: 2, hinhAnh: './img/gameXucXac/2.png', soDiem: 1 },
        { ma: 3, hinhAnh: './img/gameXucXac/3.png', soDiem: 1 }
    ]
}

const BTGameXucXacReducer = (state = stateDefault, action)=>{
    switch(action.type){
        default: return {...state};
    }
}

export default BTGameXucXacReducer;