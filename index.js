$(function() {
    $("#showPassword").click(onTogglePassword)
})

function compute() {
    var e1=document.getElementById("in");
    var res = sha512(e1.value);
    var bstr = res.substr(0,6).toLowerCase();
    var estr = res.substr(res.length-6,6).toUpperCase();


    var e2 = document.getElementById("result");
    e2.innerText = estr + bstr;
}

function onTogglePassword() {
    var currentType = $("#in").attr('type');
    if(currentType == 'password') {
        $("#in").attr('type', 'text');
    }
    else {
        $("#in").attr('type', 'password');
    }
}