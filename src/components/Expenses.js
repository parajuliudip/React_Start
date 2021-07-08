import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
      <ExpenseItem date={props.items[0].date} title={props.items[0].title} amount={props.items[0].amount}></ExpenseItem>
      <ExpenseItem date={props.items[1].date} title={props.items[1].title} amount={props.items[1].amount}></ExpenseItem>
      <ExpenseItem date={props.items[2].date} title={props.items[2].title} amount={props.items[2].amount}></ExpenseItem>
    </div>
  );
}

export default Expenses;
