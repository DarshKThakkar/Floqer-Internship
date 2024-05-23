# ML Engineer Salary Analysis Dashboard

## Overview

This project provides an analysis of ML Engineer salaries from 2020 to 2024. It provides a tabular representation of the data and some analytics related to that.

### Data Information

- The dataset provides information on ML Engineer salaries from 2020 to 2024.
- The data is stored in MongoDB and fetched using API with the help of Express.js.

### Description

Based on this data, the project creates a table (referred to as the "main table") with the following columns:
1. Year
2. Number of total jobs for that year
3. Average salary in USD

Users can sort the table by any column. Clicking a row in the main table displays a second table that shows aggregated job titles and the number of jobs for that year.

## Built With

- [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
- [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
- [![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
- [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
- [![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=recharts&logoColor=white)](https://recharts.org/)

  
## Usage

### Installation

1. Clone the repository:

```bash
$ git clone https://github.com/yourusername/ml-engineer-salary-analysis.git
$ cd ml-engineer-salary-analysis
```

2. Install dependencies:

```bash
$ npm install
```

3. Set up MongoDB and ensure it's running.

### Starting the Server

Start the server:

```bash
$ node server.js
```

### Starting the React App

Start the web app

```bash
$ npm start
```

### Accessing the Dashboard

1. Navigate to the URL where the server is running.
2. Explore the main table to view ML Engineer salary information from 2020 to 2024.
3. Click on a row in the main table to view aggregated job titles and the number of jobs for that year in the second table.
4. Analyze the data using the provided graphs on the analytics page.
