import ExpensesItem from "./ExpensesItem";
import Card from "./Card";
import './Expenses.scss';

function Expenses(props) {
    const { expenseData } = props;
    return (
        <Card className="expense-conatiner">
            {expenseData.map((data) => {
                const amount = data.amount;
                const title = data.title;
                const date = data.date;
                const id = data.id
                return (
                    <ExpensesItem
                        key={id}
                        amount={amount}
                        title={title}
                        date={date}
                    />
                )
            })}
        </Card>
    )
}
export default Expenses;
