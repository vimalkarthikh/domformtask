function lab(id,txt){
    var la=document.createElement("label");
    la.setAttribute("for",id);la.innerHTML=txt;
    return la;
}
function ip(typeval,id,pval){
    var ib=document.createElement("input");
    ib.setAttribute("type",typeval);ib.setAttribute("id",id);
    ib.setAttribute("placeholder",pval);
    return ib;
}
function bl(){var nl=document.createElement("br");return nl;}
var fl=lab("fname","FIRST NAME");
var fn=ip("text","fname","First Name");
var n=bl();
var ll=lab("lname","LAST NAME");
var ln=ip("text","lname","Last Name");
var n1=bl();
var al=lab("adds","ADDRESS");
var an=ip("text","adds","Address");
var n2=bl();
var sl=lab("state","STATE");
var sn=ip("text","state","State");
var n3=bl();
var cl=lab("cnt","COUNTRY");
var cn=ip("text","cnt","Country");
var n4=bl();
var pl=lab("pin","PINCODE");
var pn=ip("Number","pin","Pincode");
var n5=bl();var n6=bl();var n7=bl();var n8=bl();var n9=bl();var n10=bl();var n11=bl();var n12=bl();

var m=document.createElement("label");m.innerHTML="Male";
var f=document.createElement("label");f.innerHTML="Female";
var gr=document.createElement("input");gr.setAttribute("type","radio");
gr.setAttribute("name","gender");gr.setAttribute("value","Male");gr.setAttribute("placeholder","Male");
var cof=("food","Choose Your Cusine (min. 2 is must)")
var c1=ip("checkbox","ind","");var c1l=lab("ind","Indian");

var c2=ip("checkbox","cn","");var c2l=lab("cn","Chinese");
var c3=ip("checkbox","it","");var c3l=lab("it","Italian");
var c4=ip("checkbox","jp","");var c4l=lab("jp","Japanese");
var c5=ip("checkbox","cn","");var c5l=lab("cn","Continental");

var sub=document.createElement("button");sub.setAttribute("id","submit");sub.innerHTML="Submit"

var fr=document.createElement("input");fr.setAttribute("type","radio");
fr.setAttribute("name","gender");fr.setAttribute("value","Female");
document.body.append(fl,fn,n,ll,ln,n1,al,an,n2,sl,sn,n3,cl,cn,n4,pl,pn,n5,gr,m,fr,f,n6,cof,n7,c1,c1l,n8,c2,c2l,n9,c3,c3l,n10,c4,c4l,n11,c5,c5l,n12,sub);


var tab=document.createElement("table");tab.setAttribute("id","display");
var tr=document.createElement("tr");
var th=document.createElement("th");th.innerHTML=`<th>Name</th> <th>LastName</th> <th>Address</th> <th>State</th> <th>Country</th> <th>Pincode</th> <th>Gender</th> <th>Food Choise</th>`;
document.body.append(tab,tr,th);

var r=1; 
var entry=document.getElementById("submit");
entry.addEventListener("click",dsp());

function dsp(){
    var fna=document.getElementById("fname").value;var lna=document.getElementById("lname").value;
    var ads=document.getElementById("adds").value;var sta=document.getElementById("state").value;
    var cn=document.getElementById("cnt").value;var pn=document.getElementById("pin").value;

    if(fna||lna||ads||sta||cn||pn ==""){
        alert("Please Fill all the deatils");
    }
    var disp=document.getElementById("display");
    var nrow=disp.insertRow(r);
    var c1=nrow.insertCell(0);var c2=nrow.insertCell(1);var c3=nrow.insertCell(2);
    var c4=nrow.insertCell(3);var c5=nrow.insertCell(4);var c6=nrow.insertCell(5);

    c1.innerHTML=fna;c2.innerHTML=lna;c3.innerHTML=ads;c4.innerHTML=sta;c5.innerHTML=cn;c6.innerHTML=pn;
    r++;

}

