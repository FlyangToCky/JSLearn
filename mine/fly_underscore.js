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
    var previousUnderscore  = root._;

    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FunProto = Function.prototype;

    //Ϊ�˿��ٷ���ԭ��
    var
        push    = ArrayProto.push,
        slice   = ArrayProto.slice,
        toString= ObjProto.toString,
        hasOwnProterty = ObjProto.hasOwnProperty;

    //ES5 ԭ������
    var
        nativeIsArray = Array.isArray,
        nativeKeys = Object.keys,
        nativeBind = Object.bind,
        nativeCreate = Object.create;

    //�����õĹ��캯��������prototype ����
    var Ctor = function(){};


}).call(this);
