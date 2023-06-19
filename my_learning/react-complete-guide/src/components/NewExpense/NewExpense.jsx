import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

	const saveExpenseFormHandler = (expenseData) => {
		const newData = {
			...expenseData,
			id: Math.random().toString()
		};

		props.onNewFormData(newData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseForm={saveExpenseFormHandler}/>
		</div>
	);
};

export default NewExpense;
