function getFirstSelector(selector) {
return document.querySelector(selector)
}

function nestedTarget() {
return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
const lis = document.getElementById("app").querySelectorAll(".ranked-list")
const firstLis = lis[0]
const secondLis = lis[1]
  for(let i = 0, l = lis.length; i < l; i++)
  {
  lis[i].innerHTML = (parseInt(firstLis[i]) + n).toString()
  }
  for(let i = 0, l = lis.length; i < l; i++)
  {
    lis[i].innerHTML = (parseInt(secondLis[i]) + n).toString()
  }
  return lis
  }


function deepestChild() {
const array = document.getElementById('grand-node').querySelectorAll('div')
var i = array.length - 1
return array[i]
}
