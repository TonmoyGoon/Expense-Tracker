import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const[enteredTitle,setEnteredTitle]= useState("")  // Always initializes with string ("") whether number/date
    const[enteredAmount,setEnteredAmount]= useState("")
    const[enteredDate,setEnteredDate]= useState("")

    // const [userInput,setUserInput] = useState({
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:""
    // })

    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle:e.target.value
        // })
        
        // Use the below code instead

        // setUserInput((prevState) =>{   // It takes time to update the state.so this gives the latest version.because here it depends on previous state.
        //     return {...prevState,enteredTitle:e.target.value}  
        // })
    }

    const amountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:e.target.value
        // })
    }

    const dateChangeHandler = (e) =>{
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:e.target.value
        // })
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min=".01" step=".01" onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2024-06-15" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;