const stateDefault = {
    danhSachCuoc: [
        { ma: 'cua', hinhAnh: './img/gameBauCua/cua.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/gameBauCua/nai.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './img/gameBauCua/ga.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/gameBauCua/tom.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/gameBauCua/ca.png', diemCuoc: 0 },
        { ma: 'bau', hinhAnh: './img/gameBauCua/bau.png', diemCuoc: 0 }
    ],
    diemThuong: 500,
    xucXac: [
        { ma: 'cua', hinhAnh: './img/gameBauCua/cua.png' },
        { ma: 'nai', hinhAnh: './img/gameBauCua/nai.png' },
        { ma: 'ga', hinhAnh: './img/gameBauCua/ga.png' }
    ]
}

const BTGameBauCuaReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC':
            {
                let mangCuocUpdate = [...state.danhSachCuoc];
                // Tìm trong mảng cược có quân cược được click sẽ xử lý tăng giảm
                let index = mangCuocUpdate.findIndex(qc => qc.ma === action.ma);
                // check xem người dùng bấm tăng hay giảm
                if (index !== -1) {
                    if (action.tangGiam) { // tangGiam = true
                        if (state.diemThuong > 0) { // nếu điểm thưởng lớn hơn 0 cho phép đặt
                            mangCuocUpdate[index].diemCuoc += 100;
                            state.diemThuong -= 100;
                        }
                    } else { // tangGiam = false
                        if (mangCuocUpdate[index].diemCuoc > 0) { // nếu điểm đặt cược lớn hơn 0 mới cho giảm
                            mangCuocUpdate[index].diemCuoc -= 100;
                            state.diemThuong += 100;
                        }
                    }

                }
                return {...state, danhSachCuoc: mangCuocUpdate };
            }
        case 'PLAY_GAME':
            {
                //===== xử lý random mảng xúc xắc 
                // => lấy random 3 trong 6 danhSachCuoc 
                // => chạy vòng lặp random 3 lần tạo ra 3 con xúc xắc đưa vào mảng
                let mangXucXacRandom = [];
                for (var i = 0; i < 3; i++) {
                    // mỗi lần lặp sẽ tạo ra 1 số ngẫu nhiên từ 0->5
                    let soNgauNhien = Math.floor(Math.random() * 6); // hàm random() cho ra giá trị ngẫu nhiên từ 0->1, lấy hàm random()*6 sẽ ra 1 giá trị ngẫu nhiên từ 0-6
                    // tạo ra 1 viên xúc xắc từ số ngẫu nhiên
                    let xucXacNgauNhien = {
                            ma: state.danhSachCuoc[soNgauNhien].ma,
                            hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh
                        }
                        // bỏ xúc xắc ngẫu nhiên vào mảng
                    mangXucXacRandom.push(xucXacNgauNhien);
                }
                // cập nhật lại mảng các con xúc xắc = mảng xúc xắc ngẫu nhiên
                state.xucXac = mangXucXacRandom;


                //===== xử lý trúng thưởng =========//
                for (var xucXacNN of mangXucXacRandom) {
                    // lấy từng con xúc xắc ra so sánh với mảng cược
                    let indexMangCuoc = state.danhSachCuoc.findIndex(qc => qc.ma === xucXacNN.ma);
                    if (indexMangCuoc !== -1) {
                        state.diemThuong += state.danhSachCuoc[indexMangCuoc].diemCuoc;
                    }
                }

                //====== xử lý hoàn tiền ==========//
                for (var quanCuoc of state.danhSachCuoc) {
                    // kiểm tra quân cược có tồn tại trong mảng xúc xắc không? nếu có tồn tại thì hoàn tiền 
                    let indexXucXac = mangXucXacRandom.findIndex(xx => xx.ma === quanCuoc.ma);
                    if (indexXucXac !== -1) {
                        state.diemThuong += quanCuoc.diemCuoc;
                    }
                }


                //====== xử lý reset mảng danhSachCuoc =======//
                state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
                    return {...quanCuoc, diemCuoc: 0 }
                });
                return {...state };
            }
        default:
            return {...state }
    }

}



export default BTGameBauCuaReducer;