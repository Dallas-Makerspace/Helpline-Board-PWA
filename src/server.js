// Based on http://graphql.org/code/#javascript

var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    { graphqlExpress, graphiqlExpress } = require('graphql-server-express'),
    { makeExecutableSchema } = require('graphql-tools'),
    helloSchema = require('./schema/hello');

var schema = makeExecutableSchema(helloSchema),
    app    = express();
    
// API Routes
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/', graphiqlExpress({endpointURL: '/graphql'}));

// UI Routes
app.use(express.static(path.resolve(__dirname, 'dist')));

// Start the Listener
app.listen(process.env.PORT, () => { 
    let message  = 'Launched ';
        message += process.env.IP  + ':' + process.env.PORT;
        message += '/graphiql';
        
    console.log(message);
});

module.exports = app;