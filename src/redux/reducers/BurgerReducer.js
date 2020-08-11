const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 },
    menu: { salad: 10, cheese: 10, beef: 10 },
    total: 30
}

export default (state = burgerState, action) => {
    switch (action.type) {
        case 'TANG_GIAM_SL': {
            let burgerUpdate = { ...state.burger };
            let menuUpdate = { ...state.menu };
            if (action.tangGiam) {
                burgerUpdate[action.food] += 1;
                state.total += action.price * state.menu[action.food];

            } else {
                if (burgerUpdate[action.food] > 0) {
                    burgerUpdate[action.food] -= 1;
                    state.total += action.price * state.menu[action.food];
                }
                else {
                    alert('Không thể giảm ' + action.food + ' hơn nữa!');
                }

            }
            state.burger = burgerUpdate;
            state.menu = menuUpdate;
            return { ...state };

        }
        default:
            return { ...state };
    }
}