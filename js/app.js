var total = 0;
var item = 0;

function Carrinho(i){
	var valor = document.getElementsByClassName("txtbtn")[i].value;
	total += parseFloat(valor);
	window.localStorage.setItem("total", total);
	item ++;
	document.getElementById("total").innerHTML = "RS " + total;

	window.localStorage.setItem("Item", item);
	document.getElementById("item").innerHTML = item;
}