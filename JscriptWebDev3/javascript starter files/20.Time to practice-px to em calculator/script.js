// em = required / parent 

var required;
var parent;

var btn = document.getElementById('btn');
btn.addEventListener("click", convert);

function convert() {
    required = document.getElementById('required').value;
    parent = document.getElementById('parent').value;
    document.getElementById('result').innerHTML = required/parent;
}

