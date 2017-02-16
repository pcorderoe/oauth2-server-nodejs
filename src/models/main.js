return module.exports = {
    getAccessToken: (bearerToken, callback) => {
        let obj = {
            accessToken: 'ajshdgasydg7657656757a6stdughasgd76765',
            expires: null,
            user: 'userkey'

        };
        console.log(bearerToken);
        console.log(obj);
        return callback(null, obj);
    },
    saveAccessToken: (accessToken, clientId, expires, user, callback) => {
        return callback();
    },
    getClient: function(clientId, clientSecret, callback) { //consulto a los clients definidos en mi db
        console.log(clientId);
        console.log(clientSecret + 'aaaaaaaaaa');
        return callback(null, clientId);
    },
    getUser: (username, password, callback) => { // verifico el usuario
        console.log(username);
        console.log(password);

        return callback(null, {
            name: 'patricio'
        });
    },
    grantTypeAllowed: (clientId, grantType, callback) => {
        console.log(clientId);
        console.log(grantType);
        return callback(null, true);
    }
};
