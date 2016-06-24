var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'flickrgallery';

	// Load the galleries by sortOrder
	view.query('flickergalleries', keystone.list('FlickrGallery').model.find().sort('sortOrder'));

	// Render the view
	view.render('flickrgallery');

};
