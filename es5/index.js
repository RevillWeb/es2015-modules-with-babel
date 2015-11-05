'use strict';

System.register(['library.js'], function (_export) {
  var calcCircumference;
  return {
    setters: [function (_libraryJs) {
      calcCircumference = _libraryJs.calcCircumference;
    }],
    execute: function () {
      alert(calcCircumference(200));
    }
  };
});