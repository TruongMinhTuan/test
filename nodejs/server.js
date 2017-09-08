
const Postmen = require('postmen');
// TODO key of the Postmen instance
let api_key = 'api-key';
// TODO region of the Postmen instance
let region = 'sandbox';

let postmen = Postmen(api_key, region);

// get all labels by using callback
postmen.get('/labels', function (err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log(result);
	}
});