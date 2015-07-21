;(function() {
  $.fn.asyncEach = function(callback) {
    var index = 0;
    var items = this;
    var num = items.length;
    function run() {
       if (index < num) {
         setTimeout(function() {
           callback.apply(items[index++], [index, items]);
           run();
         }, 1);
       }
    }
    run();
  };
}());

