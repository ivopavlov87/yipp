const path = require("path");

module.exports = {
  confirmOwner: function(currentUser, foundUser) {
    if (currentUser.id !== foundUser[0].id) {
      return false;
    }
    return true;
  }
};