var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'flickrgallery';

	// Call Flickr for pictures
	var albumNum = flickrgallery.albumID;

	var url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=af5064fd9ef12f450534d2afc15acc19&photoset_id=' + albumNum +
		'&user_id=133701905%40N07&format=json&nojsoncallback=1&auth_token=72157670056015706-a323bc0bb65d6cfc&api_sig=250afbd664fcf5dbd03dfac6c747dfe2'


	$.getJSON(url, function(data) {
		var album = data.photoset.title;
		var photos = data.photoset.photo;
		var number = photos.length;

		
		
		for (var i = 0; i < number; i++) {
			var farm = photos[i].farm;
			var serverID = photos[i].server;
			var id = photos[i].id;
			var secret = photos[i].secret;

			var photo_url = 'https://farm' + farm +
				'.staticflickr.com/' + serverID +
				'/' + id + '_' + secret + '.jpg';

			// $('body').html('<img src="' + photo_url + '">');
			console.log(photo_url);

		}
	});
	
	
	
	
	
	
	
	// Load the galleries by sortOrder
	// view.query('flickergalleries', keystone.list('FlickrGallery').model.find().sort('sortOrder'));

	// Render the view
	view.render('flickrgallery');

};
