const routes = require("next-routes")();
// after get routes imediately fire routes coz () at the end

//first arg is pattern we are looking for.  second arg is which component wanna show
routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show")
  .add("/campaigns/:address/requests", "/campaigns/requests/index")
  .add("/campaigns/:address/requests/new", "campaigns/requests/new");

module.exports = routes;
