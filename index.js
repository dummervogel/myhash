function compute() {
    var e1=document.getElementById("in");
    var res = sha512(e1.value);
    var bstr = res.substr(0,6).toLowerCase();
    var estr = res.substr(res.length-6,6).toUpperCase();


    var e2 = document.getElementById("result");
    e2.innerText = estr + bstr;
}