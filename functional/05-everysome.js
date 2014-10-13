function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
     return submittedUsers.every(function (elem) {
	      return goodUsers.some(function (good) {
				return elem.id == good.id;
		  });
	 });
  };
}

module.exports = checkUsersValid