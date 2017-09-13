const load = (function() {
  // Function which returns a function: https://davidwalsh.name/javascript-functions
  function _load(tag) {
    return function(url) {
      // This promise will be used by Promise.all to determine success or failure
      return new Promise(function(resolve, reject) {
        var element = document.createElement(tag);
        var parent = 'body';
        var attr = 'src';

        // Important success and error for the promise
        element.onload = function() {
          resolve(url);
        };
        element.onerror = function() {
          reject(url);
        };

        // Need to set different attributes depending on tag type
        switch (tag) {
          case 'script':
            element.async = true;
            break;
          case 'link':
            element.type = 'text/css';
            element.rel = 'stylesheet';
            attr = 'href';
            parent = 'head';
        }

        // Inject into document to kick off loading
        element[attr] = url;
        document[parent].appendChild(element);
      });
    };
  }

  return {
    css: _load('link'),
    js: _load('script'),
    img: _load('img')
  };
})();

Promise.all([
  load.js('/node_modules/codemirror/lib/codemirror.js'),
  load.css('/node_modules/codemirror/lib/codemirror.css'),
  load.css('/node_modules/codemirror/theme/monokai.css')
])
  .then(() => load.js('/node_modules/codemirror/mode/javascript/javascript.js'))
  .then(() => init())
  .catch(console.error);

function init() {
  const style = document.createElement('style');

  style.innerHTML = `
body {
  margin: 0;
}
.CodeMirror {
  min-height: 100vh;
  font-size: 16px;
}
  `;

  document.head.appendChild(style);

  Promise.all([load.js('./index.js'), fetch('./index.js')])
    .then(([emptyRes, response]) => response.text())
    .then(text => {
      return window.CodeMirror(document.body, {
        value: text,
        mode: 'javascript',
        theme: 'monokai'
      });
    })
    .catch(console.error);
}
