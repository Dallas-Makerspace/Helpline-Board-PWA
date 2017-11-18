module.exports = {
    typeDefs: [`
        type Query {
          hello: String
        }
        
        schema {
          query: Query
        }`],
        
    resolvers: {
      Query: {
        hello(root) {
          return 'world';
        }
      }
    }
};