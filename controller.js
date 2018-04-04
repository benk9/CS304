var user;
var BuyProductsView;

$(function() { //run on document.ready
	if(localStorage.getItem("userType", user) !== undefined){
		if(localStorage.getItem("userType") == 1){
			$('#CustomerNav').show();
			$('#EmployeeNav').hide();
			$('#createUser').hide();
			$('#logon').hide();
			$('#logoutButton').show();
		}else if (localStorage.getItem("userType") == 2){
			$('#CustomerNav').hide();
			$('#EmployeeNav').show();
			$('#createUser').hide();
			$('#logon').hide();
			$('#logoutButton').show();
		}else{
			$('#CustomerNav').hide();
			$('#EmployeeNav').hide();
			$('#createUser').show();
			$('#logon').show();
			$('#logoutButton').hide();
		}
	}

	if(localStorage.getItem("BuyProductsView") == 1){
		$('#BuyProducts').show();
	}

	$("#userSelect").change(function() { //this occurs when select 1 changes
		console.log("detect");
		user =  document.getElementById("userSelect").value;
		$('#nameSelect')
		.find('option')
		.remove();
		if(user == 1){
			console.log("Customer");
			console.log(customerArray_js.length);
			var sel = document.getElementById('nameSelect');
			for(var i = 0; i < customerArray_js.length; i++) {
				var opt = document.createElement('option');
				opt.innerHTML = customerArray_js[i];
				opt.value = customerArray_js[i];
				sel.appendChild(opt);
			}
		}else if(user == 2){
			console.log("Employee");
			var sel = document.getElementById('nameSelect');
			for(var i = 0; i < employeeArray_js.length; i++) {
				var opt = document.createElement('option');
				opt.innerHTML = employeeArray_js[i];
				opt.value = employeeArray_js[i];
				sel.appendChild(opt);
			}
		}
	});

	fillProductTable();
});

function AddProducts() {
	$('#addProducts').toggle();
}
function CustomerPremium(){
	$('#CustomerPremium').toggle();
}
function OpenBuyProducts(){
	$('#BuyProducts').toggle();
	localStorage.setItem("BuyProductsView",1);
}
function OpenAccount(){
	$('#Account').toggle();
}
function OpenRestockProducts(){
	$('#restockProducts').toggle();
}
function OpenShippingInfo(){
	$('#shippingInfo').toggle();
}
function OpenUpdateShippingInfo(){
	$('#UpdateShippingInfo').toggle();
}
function createUser(){
	user = 1;
	localStorage.setItem("userType",user);
}
function OpenFilter(){
	$('#Filter').toggle();
}
function OpenViewCart(){
	$('#viewCart').toggle();
}
function closeBuyProduct(){
	$('#BuyProducts').toggle();
	localStorage.setItem("BuyProductsView",0);
}
function logout(){
	delete localStorage.clear();
	location.reload();
}
function setUser(){
	user =  document.getElementById("userSelect").value;
	if(user == 1){
		$('#CustomerNav').show();
		$('#EmployeeNav').hide();
	}else if(user == 2){
		$('#CustomerNav').hide();
		$('#EmployeeNav').show();
	}
	localStorage.setItem("userType", user);
}
function resetLS() {
	delete localStorage.clear();
}

	
function fillProductTable(){
	var table = document.getElementById("BuyProductsTable");
	var tbody = document.createElement("tbody");


	for (var i = 0 ; i < productArray_js.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		var txt = document.createTextNode('<input class="form-control" type="text" name="volume">');
		td.appendChild(txt);
		tr.appendChild(td);
		for (var j = 0; j < 12; j++) {
			var td = document.createElement('td');
			var txt = document.createTextNode(productArray_js[i][j]);
			td.appendChild(txt);
			tr.appendChild(td);
		}
	tbody.appendChild(tr);
	table.appendChild(tbody);
	}
}