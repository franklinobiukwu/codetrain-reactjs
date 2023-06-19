import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
	const HandleLiftYear = (val) => {
		console.log(val)
	}

	return (
		<>
		<ExpensesFilter LiftYear = {HandleLiftYear}/>
		<Card className = 'expenses'>		
			<ExpenseItem
				title = {props.first.title}
				amount = {props.first.amount}
				date = {props.first.date}
			/>
			<ExpenseItem
				title = {props.second.title}
				amount = {props.second.amount} 
				date = {props.second.date}
			/>
			<ExpenseItem
				title = {props.third.title}
				amount = {props.third.amount} 
				date = {props.third.date}
			/>
			<ExpenseItem
				title = {props.fourth.title}
				amount = {props.fourth.amount}
				date = {props.fourth.date}
			/>
		</Card>
		</>
	);
}

export default Expenses;
