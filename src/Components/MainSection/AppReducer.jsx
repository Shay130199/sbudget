const fn = (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !==
                    action.playload)
            }
        default:
            return state;
    }
}

export default fn;