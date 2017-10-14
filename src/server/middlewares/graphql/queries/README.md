Query
A GraphQL query is a way to fetch data in a read-only manner from your GraphQL API.
On Scaphold, queries come in a couple different shapes and forms. Each core data type X gets its own queries getX and viewer.allXs. Since core data types can be involved in connections, you can also read related objects through any connection fields in your schema. All core data connections take the XWhereArgs and XOrderByArgs inputs that allow you to do complex filtering and compound ordering.
Example Query
/* Retrieve all users */

query AllUsers {
  viewer {
    allUsers {
      id
      username
      lastLogin
    }
  }
}
