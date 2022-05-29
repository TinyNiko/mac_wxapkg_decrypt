(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"; // frida 4995 -l _agent.js

// way 1
var account = ObjC.classes.AccountService['- GetEncryptKey'];
Interceptor.attach(account.implementation, {
  onLeave: function onLeave(ret) {
    var keyobj = new ObjC.Object(ret);
    var key = keyobj.bytes().readByteArray(keyobj.length());
    console.log(hexdump(key)); // the first 16 bytes is aes key
  }
});

// way 2
// var wadecrypt = ObjC.classes.WAPkgEncryptUtil['+ pkgDecrypt:'];
// // TODO fix path
// var path = "/path/to/wxapkg";
// var wxpath = ObjC.classes.NSString.stringWithUTF8String_(Memory.allocUtf8String(path));
// var decryptdata = ObjC.classes.WAPkgEncryptUtil.pkgDecrypt_(wxpath);
// var filedata = decryptdata.bytes().readByteArray(decryptdata.length());
// // TODO fix path
// var file = new File("/path/to/write/output/wxapkg", "wb");
// file.write(filedata);
// file.close();
// console.log("write file done");

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFjX3d4L21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Y0NBQTs7QUFDQSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTCxDQUFhLGNBQWIsQ0FBNEIsaUJBQTVCLENBQWQ7QUFDQSxXQUFXLENBQUMsTUFBWixDQUFtQixPQUFPLENBQUMsY0FBM0IsRUFBMkM7QUFDdkMsRUFBQSxPQUFPLEVBQUUsaUJBQVMsR0FBVCxFQUFpQjtBQUN0QixRQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFULENBQWdCLEdBQWhCLENBQWI7QUFDQSxRQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBUCxHQUFlLGFBQWYsQ0FBNkIsTUFBTSxDQUFDLE1BQVAsRUFBN0IsQ0FBVjtBQUNBLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFPLENBQUMsR0FBRCxDQUFuQixFQUhzQixDQUdJO0FBQzdCO0FBTHNDLENBQTNDO0FBUUEsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQUwsQ0FBYSxnQkFBYixDQUE4QixlQUE5QixDQUFoQjtBQUNBLElBQUksSUFBSSxHQUFHLGlPQUFYO0FBQ0EsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQUwsQ0FBYSxRQUFiLENBQXNCLHFCQUF0QixDQUE0QyxNQUFNLENBQUMsZUFBUCxDQUF1QixJQUF2QixDQUE1QyxDQUFiO0FBRUEsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQUwsQ0FBYSxnQkFBYixDQUE4QixXQUE5QixDQUEwQyxNQUExQyxDQUFsQjtBQUNBLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFaLEdBQW9CLGFBQXBCLENBQWtDLFdBQVcsQ0FBQyxNQUFaLEVBQWxDLENBQWY7QUFFQSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUosQ0FBUyxxTUFBVCxFQUErTSxJQUEvTSxDQUFYO0FBQ0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxRQUFYO0FBQ0EsSUFBSSxDQUFDLEtBQUw7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIifQ==
