// ==UserScript==
// @name        Bookify pro-git - git-scm.com
// @namespace   Violentmonkey Scripts
// @match       https://git-scm.com/book/en/v2/*
// @grant       none
// @version     1.0
// @author      -
// @description 19/1/2023, 16:06:19
// ==/UserScript==

window.addEventListener('load', function () {

  document.getElementsByTagName("header")[0].remove()
  document.getElementsByTagName("aside")[0].remove()
  document.getElementsByTagName("footer")[0].remove()
  document.getElementsByClassName("inner")[0].remove()

  let contents = document.getElementById('content')
  contents.setAttribute("id","mycontent")
})

