// var check=document.getElementById("btn");
var row=1;
function my()
{
var uname=document.getElementById("name").value;
var uemail=document.getElementById("mail").value;
var uno=document.getElementById("number").value;
 var tb=document.getElementById("display");
 var newrow=display.insertRow(row);
 var cell0=newrow.insertCell(0);
 var cell1=newrow.insertCell(1);
 var cell2=newrow.insertCell(2);

cell0.innerHTML=uname;
cell1.innerHTML=uemail;
cell2.innerHTML=uno;

// row++;

};