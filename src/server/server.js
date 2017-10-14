const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
let port = 4000;

// Construct a scheam, useing GraphQL schema language
let schema = buildSchema(`
  type Query {
    hello: String,
  }
`);

// The root provides a resolver function for each API endpoint
let root = {
  hello: () => {
    return 'Hello world!';
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(port);
console.log('Running a GraphQL API server at localhost:4000/graphql');
