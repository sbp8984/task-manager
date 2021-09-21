// CRUD create, read, update and delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

//connection
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
    if (error) {
        return console.log('unable to connect to db')
    } 

    console.log('connected to db')
    // const db = client.db(databaseName)

    // db.collection('users').insertOne({
        
    // })
})