var appu=0;
function clicks()
{
    var cli= document.getElementById("text");
    if (appu==0)
    {
       cli.style.fontSize = "30px";
        appu=1;
    }else {
        cli.style.fontSize = "15px";
        appu=0;
    }

}
