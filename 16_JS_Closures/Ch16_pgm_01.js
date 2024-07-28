// Level 1

// Create a closure which has one inner function

// Level 2

// Create a closure which has three inner functions

// Level 3

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner 
// variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance inner functions. Incomes is a set of incomes and its description and 
// expenses is also a set of expenses and its description.
// Level 1: Single Inner Function
function outerFunction() {
    let outerVariable = 'I am an outer variable';
  
    function innerFunction() {
      return outerVariable;
    }
  
    return innerFunction;
  }
  
  function executeLevel1() {
    const myClosure = outerFunction();
    document.getElementById('level1-output').textContent = myClosure();
  }
  
  // Level 2: Three Inner Functions
  function createClosure() {
    let count = 0;
  
    function increment() {
      count++;
      updateLevel2Output();
    }
  
    function decrement() {
      count--;
      updateLevel2Output();
    }
  
    function reset() {
      count = 0;
      updateLevel2Output();
    }
  
    function updateLevel2Output() {
      document.getElementById('level2-output').textContent = `Count: ${count}`;
    }
  
    return {
      increment,
      decrement,
      reset
    };
  }
  
  const counter = createClosure();
  
  function executeLevel2() {
    counter.increment();
  }
  
  function executeLevel2Decrement() {
    counter.decrement();
  }
  
  function executeLevel2Reset() {
    counter.reset();
  }
  
  // Level 3: personAccount
  function personAccount() {
    let firstname = 'John';
    let lastname = 'Doe';
    let incomes = [];
    let expenses = [];
  
    function totalIncome() {
      return incomes.reduce((acc, income) => acc + income.amount, 0);
    }
  
    function totalExpense() {
      return expenses.reduce((acc, expense) => acc + expense.amount, 0);
    }
  
    function accountInfo() {
      return `Name: ${firstname} ${lastname}, Total Income: $${totalIncome()}, Total Expense: $${totalExpense()}`;
    }
  
    function addIncome(amount, description) {
      incomes.push({ amount, description });
    }
  
    function addExpense(amount, description) {
      expenses.push({ amount, description });
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      totalIncome,
      totalExpense,
      accountInfo,
      addIncome,
      addExpense,
      accountBalance
    };
  }
  
  const myAccount = personAccount();
  
  function addIncome() {
    const amount = parseFloat(prompt('Enter income amount:'));
    const description = prompt('Enter income description:');
    myAccount.addIncome(amount, description);
    showAccountInfo();
  }
  
  function addExpense() {
    const amount = parseFloat(prompt('Enter expense amount:'));
    const description = prompt('Enter expense description:');
    myAccount.addExpense(amount, description);
    showAccountInfo();
  }
  
  function showAccountInfo() {
    document.getElementById('level3-output').textContent = `${myAccount.accountInfo()} \nAccount Balance: $${myAccount.accountBalance()}`;
  }
  