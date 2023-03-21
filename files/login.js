function visible()
{
    document.getElementById("eyeicon").setAttribute("src","./files/eyeopen.png")
    document.getElementById("passbox").removeAttribute("type")
}
function invisible()
{
    document.getElementById("eyeicon").setAttribute("src","./files/eyeclose.png")
    document.getElementById("passbox").setAttribute("type","password")
}
var emid="karthik@gmail.com"
var pass="karthik123"

function userclick()
{
    var emailuser=document.getElementById("emailbox").value
var passuser=document.getElementById("passbox").value

    if(emid==emailuser  && pass==passuser)
    {
        var fom=document.forms
        console.log(fom)
        fom[0].action="./files/website/webpage.html"
        document.getElementById("butt").setAttribute("type","submit")
        document.getElementById("emaildiv").style.border="3px solid black"
        document.getElementById("passdiv").style.border="3px solid black"
    }
    else if (emid!=emailuser  && pass!=passuser)
    {
        document.getElementById("emaildiv").style.border="3px solid red"
        document.getElementById("passdiv").style.border="3px solid red"
        document.getElementById("result").innerHTML="userid and password is wrong"

    }
    else if (emid!=emailuser  && pass==passuser)
    {
        document.getElementById("emaildiv").style.border="3px solid red"
        document.getElementById("passdiv").style.border="3px solid black"
        document.getElementById("result").innerHTML="userid is wrong"

    }
    else if (emid==emailuser  && pass!=passuser)
    {
        document.getElementById("emaildiv").style.border="3px solid black"
        document.getElementById("passdiv").style.border="3px solid red"
        document.getElementById("result").innerHTML="password is wrong"

    }
}