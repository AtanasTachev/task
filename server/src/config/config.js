module.exports = {
    development: {
        port: process.env.PORT || 3030,
        dbConnection: 'mongodb://localhost:27017/Task'
    },
    build: {
        port: process.env.PORT || 3030,
        dbConnection: 'mongodb+srv://atanas:3698741Md@cluster0.lgbxa.mongodb.net/Task?retryWrites=true&w=majority'
    }
}