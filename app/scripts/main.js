/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
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
