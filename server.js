const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')


const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
    //would want to disable in production
}))


const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))