const lib = require('lib');

/**
* @param {array} twitterHandles
* @returns {string}
*/
module.exports = (twitterHandles = ['officialjaden', 'JustinTrudeau'], context, callback) => {
  lib.steve
    ['twitter-markov-chain'](twitterHandles)
    .then(tweet => {
      lib[`${context.service.identifier}`.tweet](tweet).then(result => {
        return callback(null, result);
      });
    })
    .catch(error => {
      return callback(error);
    });
};
