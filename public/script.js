function loadEruda() {
  eruda.init({
    tool: ['console', 'elements', 'network', 'resources']
  });

  eruda.add(erudaDom);

  (function () {
    console.log.apply(console,["%c %c %c Hello, this is Eruda :) %c %c ","background: #707d8b; padding:5px 0;","background: #707d8b; padding:5px 0;","color: #fff; background: #76a2ee; padding: 5px 0;","background: #707d8b; padding:5px 0;","background: #707d8b; padding:5px 0;"]);
  })();
}

loadEruda();