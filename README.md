laravel-backbone-requirejs
==========================

Laravel 4.2.8, Backbone (non AMD), Underscore (non AMD), RequireJS, Twitter Bootstrap-sass, using Bower, Grunt - Starter Kit

# Overview

# Initialization 

	$ cd laravel-backbone-requirejs-bower-grunt

Setelah selesai di clone, maka kita lakukan perintah-perintah berikut ini.

	$ composer update

Perintah di atas berfungsi untuk mendownload depedencies laravel

	$ bower install

Perintah di atas adalah untuk mendownload komponen yang diperlukan dalam
membuat aplikasi ini.

	$ npm install

Perintah di atas adalah untuk menginstall komponen grunt yang diperlukan
untuk development

	$ grunt init1 

Perintah di atas berfungsi untuk menyalin file berikut ini 
	
	jquery.min.js
	underscore-min.js
	backbone.js
	require.js
	text.js

ke lokasi seperti yang terlihat di 

	./
	├── bower_components/
	├── node_modules/
	├── public-dev
	│	└── js/
	│		├── app/
	│		│	├── collections/
	│		│	├── models/
	│		│	├── routers/
	│		│	├── templates/
	│		│	├── views/
	│		│   └── frontend_app.js
	│		├── vendor/
	│		│	├── backbone.js
	│		│	├── jquery.min.js
	│		│	├── text.js
	│		│   └── underscore-min.js
	│		├── frontend_main.js
	│		└── require.js
	├── vendor/
	├── .bowerrc
	├── bower.json
	├── Gruntfile.js
	└── package.json


### Grunt Wath

	$ grunt watch