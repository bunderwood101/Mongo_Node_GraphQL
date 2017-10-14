Mutation
A GraphQL mutation is a way to change data on your server. It's important to note that mutations consist of a change followed by a fetch of the piece of data that was just changed, all in one operation. Mutations are your means of modifying data in your API. Each core data type X, gets a createX, updateX, and deleteX mutation. Input arguments are automatically created to fit your schema and can be inspected from GraphiQL’s Doc Explorer.
Example Mutation
/* Create user mutation */

mutation CreateUser($user: CreateUserInput!) {
  createUser(input: $user) {
    changedUser {
      id
      username
    }
  }
}

/* Variables */

{
  "user": {
    "username": "elon@tesla.com",
    "password": "SuperSecretPassword"
  }
}
