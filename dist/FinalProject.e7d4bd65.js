parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var e=!1,t=document.getElementById("mess");function a(t){e?(document.getElementById(1).style.display="none",e=!1):(e=!0,document.getElementById(1).style.display="block")}t.addEventListener("click",a);var n=[],o=0;function c(){for(i=1;i<=localStorage.getItem("id");i++)s(localStorage.getItem(i))}function s(e){var t={text:e,id:Date.now()};n.push(t),document.querySelector(".messages").insertAdjacentHTML("beforeend",'<p class="message-item" data-key="'.concat(t.id,'">\n            <span>').concat(t.text,"</span>\n        </p>"))}function l(e){var t={text:e,id:Date.now()};o++,localStorage.setItem("id",o),localStorage.setItem(o,t.text),n.push(t),document.querySelector(".messages").insertAdjacentHTML("beforeend",'<p class="message-item" data-key="'.concat(t.id,'">\n            <span>').concat(t.text,"</span>\n        </p>"))}localStorage.length>0&&(o=localStorage.getItem("id"),c());var d=document.querySelector(".message-form");d.addEventListener("submit",function(e){e.preventDefault();var t=document.querySelector(".typedMessage"),a=t.value.trim();""!==a&&(l(a),t.value="",t.focus())});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/FinalProject.e7d4bd65.js.map