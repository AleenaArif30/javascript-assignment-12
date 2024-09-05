var main = document.getElementById("main-content")
console.log(main.childNodes[0])
console.log(main.childNodes[1])
console.log(main.childNodes[2])
console.log(main.childNodes[3])
console.log(main.childNodes[4])


var render = document.getElementsByClassName("render")
document.write(render[0].innerHTML + "<br>")
document.write(render[1].innerHTML + "<br>")
document.write(render[2].innerHTML + "<br>")
document.write(render[3].innerHTML + "<br>")
document.write(render[4].innerHTML + "<br>")

document.getElementById("first-name").value = "alex"
document.getElementById("last-name").value = "bank"
document.getElementById("email").value = " alexbank@example.com"


console.log(document.getElementById("form-content").nodeType)
document.write("nodetype of form-content  is  : " + document.getElementById("form-content").nodeType + "<br>")
console.log(document.getElementById("lastName").nodeType)
document.write("nodetype of last-name  is  : " + document.getElementById("lastName").nodeType + "<br>")
var childnode = document.getElementById("lastName").firstChild
console.log(childnode.nodeType)
document.write("nodetype of child of last name is " + childnode.nodeType)
document.getElementById("lastName").innerHTML = "last name : smith"

console.log(document.getElementById("main-content").firstChild)
console.log(document.getElementById("main-content").lastChild)
console.log(document.getElementById("lastName").nextSibling)
console.log(document.getElementById("lastName").previousSibling)
console.log(document.getElementById("email").nodeType)
console.log(document.getElementById("email").parentNode)



