/**
 * Created by fangy on 2016/11/12.
 * For Learning UnderScore
 */
/*
* (function(){
 console.log(this === window);    // true
 }).call(this);
  �ȼ���
 (function(){
 console.log(this === window);    // true
 })();

 ����
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
    //����������
    var root = this;

}).call(this);
