# Homework/Test-Assignment

### How to use
- Clone the repo,
- npm install
- npm start

### Context
A server will be woken up on the port 3001 with a rest API for the transactions entity, and a react App will be ready to be used on port 3000

### Assignments
[ ] Render every transaction from `GET localhost:3000/transactions` in the table from the App.js file
  - Create the appropiate reducers and actions to load and manipulate the data in general
  - Use the existing service
  - Render every transaction in a separate row table with all the corresponding details

[ ] Compute the column `balance` with the corresponding credit or debit, to have an up to date state of the money in the account

[ ] Based on the data from the `canceled` column, skip that row from the balance modification. (HTML code will be found inside `App.js` to create the checkbox that will contain this functionality)

[ ] Create a basic form component to add new transactions (note: the new transactions should be visible immediately after inside the table rows)
  - hit the POST endpont with the service to create a new transaction
  - create the form in another file to use redux to notify the table about the creation of the new transaction.

### Bonus points
[ ] Render the dates in a human readable way
[ ] Render the numbers with usual money format
[ ] Implement a table-column sort with 3 states `AZ-ZA-Default` for `date`, `credit` and `debit` when clicking the column header
[ ] use eslint
[ ] test with jest/RTL
[ ] use nock

