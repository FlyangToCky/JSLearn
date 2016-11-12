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
    var previousUnderscore  = root._;

    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FunProto = Function.prototype;

    //为了快速访问原型
    var
        push    = ArrayProto.push,
        slice   = ArrayProto.slice,
        toString= ObjProto.toString,
        hasOwnProterty = ObjProto.hasOwnProperty;

    //ES5 原生方法
    var
        nativeIsArray = Array.isArray,
        nativeKeys = Object.keys,
        nativeBind = Object.bind,
        nativeCreate = Object.create;

    //可重用的构造函数，用于prototype 设置
    var Ctor = function(){};


}).call(this);
