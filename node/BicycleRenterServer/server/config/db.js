let mongoose = require('mongoose')
const dbPath = 'mongodb+srv://2021appscicse542_db_user:eAUq7bbTakS1qNhM@biycle.4wbi1tj.mongodb.net/bicycleDb'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbPath, options).then(res => {
    console.log("Db Connected")
}).catch(err => {
    console.log("Db Connect Err", err)
})
