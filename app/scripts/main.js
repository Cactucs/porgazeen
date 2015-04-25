(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);
  var request = new XMLHttpRequest();
  request.open('GET', '/files/list.json', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      querySelector('ul.archive').innerHTML = '';
      data.forEach(function (item, i) {
        var img = document.createElement('img');
        img.setAttribute('src', item.preview);
        var a = document.createElement('a');
        a.setAttribute('href', item.pdf);
        a.appendChild(img);
        var li = document.createElement('li');
        if (li.classList) {
          li.classList.add('card');
        } else {
          li.className += ' ' + 'card';
        }
        li.appendChild(a);
        querySelector('ul.archive').appendChild(li);
      });
    } else {
      window.alert('Nastala chyba.');
      console.log(request);
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
})();
