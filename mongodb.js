// CRUD create, read, update and delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// This above can be Simplied into below! Destructuring
const { MongoClient, ObjectID } = require('mongodb')

//connection to db
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const task1 = 'Get a haircut'
const task2 = 'Take a dump'


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to db')
    }

    const db = client.db(databaseName)

    db.collection('users').updateOne({
        _id: new ObjectID("614db571d03033336074f015")
    },
        {
            // $set: {
            //     lastname: 'taj mahal badabad'
            // }
             $currentDate: { 
                lastModified: true }

        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })



    // db.collection('users').findOne({ _id: new ObjectID("614da5094ecda0262ca2cb6f") }, (error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch')
    //     } 

    //     console.log(user)
    // })
    //

    // db.collection('users').find( { lastname: 'badlandabad' } ).toArray((error,users) => {

    //     console.log(users)
    // })

    // db.collection('users').find( { lastname: 'badlandabad' } ).count((error,count) => {

    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("614da15b2b28960d6433ee1b") }, (error, task) => {
    //     if (error) {
    //         console.log('no task id found')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find( { completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         console.log('no uncompoleted tasks')
    //     }

    //     console.log(tasks)
    // })






    // db.collection('users').insertOne({
    //     firstname: 'Taj mahal ',
    //     password: 'p13ass5methjemony',
    //     email: 'vik113rm1@fmai.com',
    //     lastname: 'badlandabad',
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

})

//

