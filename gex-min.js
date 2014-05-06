/* Copyright (c) 2011-2013 Richard Rodger, MIT License, https://github.com/rjrodger/patrun */
(function(){"use strict";function e(e){function r(e){return u.isNull(e)||u.isNaN(e)||u.isUndefined(e)}function i(e){var r=""+e;return(u.isNull(e)||u.isNaN(e)||u.isUndefined(e))&&(r=""),r}function s(e){e=""+e;for(var r=!1,n=u.keys(c),t=0;t<n.length&&!r;t++)r=!!c[n[t]].exec(e);return r}var o=this;o.noConflict=function(){return n.gex=t,o},o.on=function(e){if(u.isString(e)||u.isNumber(e)||u.isBoolean(e)||u.isDate(e)||u.isRegExp(e))return s(e)?e:null;if(u.isArray(e)||u.isArguments(e)){for(var n=[],t=0;t<e.length;t++)!r(e[t])&&s(e[t])&&n.push(e[t]);return n}if(r(e))return null;if(u.isObject(e)){var n={};for(var i in e)e.hasOwnProperty(i)&&s(i)&&(n[i]=e[i]);return n}return null},o.esc=function(e){var r=i(e);return r=r.replace(/\*/g,"**"),r=r.replace(/\?/g,"*?")},o.re=function(e){if(""==e||e){var e=o.escregexp(e);return e=e.replace(/\\\*/g,"[\\s\\S]*"),e=e.replace(/\\\?/g,"[\\s\\S]"),e=e.replace(/\[\\s\\S\]\*\[\\s\\S\]\*/g,"\\*"),e=e.replace(/\[\\s\\S\]\*\[\\s\\S\]/g,"\\?"),e="^"+e+"$",new RegExp(e)}var r=u.keys(c);return 1==r.length?c[r[0]]:u.clone(c)},o.escregexp=function(e){return e?(""+e).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):""},o.toString=function(){return""+u.keys(c)};var f=null==e||u.isNaN(e)?[]:u.isArray(e)?e:[e],c={};u.each(f,function(e){var r=o.re(e);c[e]=r})}function r(r){var n=new e(r);return n}var n=this,t=n.gex,i="undefined"!=typeof require,u=n._;if("undefined"==typeof u){if(!i)throw new Error("gex requires underscore, see http://underscorejs.org");u=require("underscore")}r.Gex=e,"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=r),exports.gex=r):n.gex=r}).call(this);
//# sourceMappingURL=gex-min.map