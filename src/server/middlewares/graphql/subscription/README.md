Subscription
A GraphQL subscription is a way to get a real-time feed of data from your server. Great use cases for this are for chat apps, game apps, or analytics dashboards. Essentially, with GraphQL subscriptions, a client no longer needs to manually run a fetch of the data, and rather, the server pushes data downstream to the client without refreshing the page. They require a web socket connection though however to maintain a persistent connection between a client and a server.
Example Subscription
/* Subscribe to User type */

subscription SubscribeToUser($user: [UserMutationEvent]!) {
  subscribeToUser(mutations: $user) {
    mutation
    value {
      id
      username
    }
  }
}
