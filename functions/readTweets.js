const twitter = require('../twitter');

/**
* @param {string} user
* @returns {any}
*/
module.exports = (user, context, callback) => {
  twitter
    .get('statuses/update', {
      screen_name: user,
      count: 200,
      include_rts: false
    })
    .then(results => {
      return callback(null, results);
    })
    .catch(error => {
      return callback(error);
    });
};
