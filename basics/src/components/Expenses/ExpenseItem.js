import { useState } from "react"
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)    //useState - A react hook(starts with use).
    // Must be called inside function (parent position)
    // returns an array with 2 elements in it.    1) Current value   2) functions for updating the value
    // useState executes the main function again when setTitle function is called
    // executes separately for each component

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;