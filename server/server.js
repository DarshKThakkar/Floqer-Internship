const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors')
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());

const mongoURI = "mongodb://localhost:27017/";

MongoClient.connect(mongoURI)
    .then(client => {
        
        console.log('Connected to MongoDB');

        const db = client.db('Floqer');

        const coll = db.collection('EngineeringSalaries');

        const pipeline = [
            {
              $group: {
                _id: "$work_year",
                jobs: { $sum: 1 },
                avg_salary: { $avg: "$salary_in_usd" }
              }
            },
            {
              $project: {
                _id: 0,
                year: "$_id",
                jobs: 1,
                avg_salary: { $round: ["$avg_salary", 2] }
              }
            },
            {
              $sort: { year: 1 }
            }
        ];

        app.get('/data', async (req, res) => {
            try
            {
                const data = await coll.find().toArray();
                res.json(data);
            }
            
            catch (error)
            {
                console.error('Error fetching data:', error);
                res.status(500).json({ error: 'Failed to fetch data' });
            }
        });

        app.get('/tableData', async (req, res) => {
            try
            {
                const data = await coll.aggregate(pipeline).toArray();
                res.json(data);
            }
            
            catch (error)
            {
                console.error('Error fetching data:', error);
                res.status(500).json({ error: 'Failed to fetch data' });
            }
        })

        app.get('/jobs/:year', async (req, res) => {
            try
            {
                const name = Number(req.params.year);
                // Assuming there's a reference to products in your records schema
                // const records = await coll.find({ work_year: name }).toArray();

                const records = await coll.aggregate([
                    {
                        $match: {
                            work_year: name
                        }
                    },
                    {
                        $group: {
                            _id: "$job_title",
                            count: { $sum: 1 }
                        }
                    }
                ]).toArray();

                res.json(records);

            }
            catch (err)
            {
                console.error(err);
                res.status(500).json({ message: 'Server error' });
            }
        })

        app.get('/barChartData', async (req, res) => {
            try
            {
                const data = await coll.aggregate([
                    {
                      $group: {
                        _id: {
                          work_year: "$work_year",
                          experience_level: "$experience_level"
                        },
                        avg_salary: { $avg: "$salary_in_usd" }
                      }
                    },
                    {
                      $project: {
                        _id: 0,
                        work_year: "$_id.work_year",
                        experience_level: "$_id.experience_level",
                        avg_salary: 1
                      }
                    },
                    {
                      $sort: {
                        work_year: 1,
                        experience_level: 1
                      }
                    }
                  ]).toArray();

                res.json(data);
            }
            catch (err)
            {
                console.error(err);
            }
        })

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB');
        throw err;
    });