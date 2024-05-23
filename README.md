# ML Engineer Salary Analysis Dashboard

## Overview

This project provides an analysis of ML Engineer salaries from 2020 to 2024. The data is stored in MongoDB and fetched using an API with the help of Express.js.

### Data Information

- The dataset provides information on ML Engineer salaries from 2020 to 2024.
- The data is stored in MongoDB and fetched using API with the help of Express.js.

### Description

Based on this data, the project creates a table (referred to as the "main table") with the following columns:
1. Year
2. Number of total jobs for that year
3. Average salary in USD

Users can sort the table by any column. Clicking a row in the main table displays a second table that shows aggregated job titles and the number of jobs for that year.

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