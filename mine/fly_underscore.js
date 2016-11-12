/**
 * Created by fangy on 2016/11/12.
 * For Learning UnderScore
 */
/*
* (function(){
 console.log(this === window);    // true
 }).call(this);
  等价于
 (function(){
 console.log(this === window);    // true
 })();

 但：
 (function(){
 "use strict";
 console.log(this === window);    // true
 }).call(this);

 (function(){
 "use strict";
 console.log(this === window);    // false
 })();
*
* */
(function(){
    //建立根对象
    var root = this;

}).call(this);
