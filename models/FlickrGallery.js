var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Flickr Gallery Model
 * =============
 */

var FlickrGallery = new keystone.List('FlickrGallery', {
	autokey: { from: 'name', path: 'key', unique: true },
});

FlickrGallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	albumId: {type: String }
});

FlickrGallery.register();
