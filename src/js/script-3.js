'use strict';

var allowedreferrer = "http://www.yoursite.com/referringpagename.htm";
if (document.referrer.indexOf(allowedreferrer) == -1) {

  alert("You can only access this page from " + allowedreferrer);
  window.location = allowedreferrer;

}
