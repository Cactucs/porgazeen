(function () {
  'use strict';
	Mousetrap.bind('up up down down left right left right b a enter', function() {
		var querySelector = document.querySelector.bind(document);
		var body = querySelector('body');
		if (body.classList) {
			body.classList.add('konami');
		} else {
			body.className += ' ' + 'konami';
		}

	});
})();
