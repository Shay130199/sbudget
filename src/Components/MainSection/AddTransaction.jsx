import React, {useState} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <>  
            <h3>Add more Expenses or Income</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                    placeholder="Enter Text..."/>
                </div>
                <div class="form-control">
                    <label htmlFor="amount"
                        >Amount <br/>
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Enter Amount..."/>
                </div>
            <button class="btn">Add Transaction</button>
        </form>
        </>
    )
}
export default AddTransaction;