const pandas = require('./pandas.json');
const tanukis = require('./tanukis.json');
// Add new entities here and in the module export underneath

// important: A POST, PUT or PATCH request should include a
// Content-Type: application/json header to use the JSON in the request body.
// Otherwise it will return a 2XX status code, but without changes being made to the data.

module.exports = () => ({
  pandas: pandas,
  tanukis: tanukis
});
