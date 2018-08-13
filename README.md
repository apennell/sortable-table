# Sortable Table

By [Annie Pennell](https://www.linkedin.com/in/anniepennell/)

[anniepennell.com](http://anniepennell.com/)

This table UI renders a table of static data and allows for sorting by column.


## Instructions

1. Clone locally using `git clone https://github.com/apennell/sortable-table.git`.
2. `cd` into `sortable-table` directory.
3. Run `npm install` or `yarn` to install the project's dependencies.
4. Run `npm start` to run the app in the development mode.
5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
6. To build the app for production and bundle to optimize for best performance, run `npm run build`.


## Technologies 

This app's core technologies are ReactJS, Javascript/ES6, HTML, CSS, and JSON. The basic setup was made using [Create React App](https://github.com/facebookincubator/create-react-app).


## Project Requirements

* Code a table with sortable columns in React. Do not use a third-party table library.
  The `TableContainer` component builds a table using HTML's `table` element and has basic styling.

* The table should display the names, addresses, cities, regions, countries, and DOBs of the people in the stubbed data file.
  The `TableContainer` imports the data and maps through the people in the JSON, adding a row to the table for each person.

* Each column should be sortable.
  Clicking a table header column sorts and updates the table's ordering based on that column. If it's a different column than previously selected, it sorts in ascending order. Clicking the same column's header a second time reverses the order.
