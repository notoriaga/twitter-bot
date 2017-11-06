const twitter = require('../twitter');

/**
* @param {string} status
* @returns {any}
*/
module.exports = (status, context, callback) => {
  twitter
    .post('statuses/update', { status: status })
    .then(result => {
      return callback(null, result);
    })
    .catch(error => {
      return callback(error);
    });
};
