import './App.css';

import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [{
    id: 'e1',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 0, 12)
  }]

  console.log(expenses[0].date)

  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
    </div>
  );
}

export default App;
