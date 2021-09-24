// CRUD create, read, update and delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

//connection to db
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const task1 = 'Get a haircut'
const task2 = 'Take a dump'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to db')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Shyam',
    //     age: 30
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert user')
    //     } 

    //     console.log(result.ops)
    //     console.log(result.insertedCount)
    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Bob',
    //         age: 44
    //     }, {
    //         name: 'Gunthuner',
    //         age: 81
    //     }
    // ], (error,result) => {
    //     if (error) {
    //         return console.log('cannot insert many collections')
    //     }
    //     console.log(result.insertedCount)
    //     console.log(result.ops)

    // })

    // 



    db.collection('tasks').insertMany([
        {
            description: task1,
            completed: true
        },
        {
            description: task2,
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('cannot add many tasks')
        }

        console.log(result.ops)
        console.log(result.insertedCount)
    })

})