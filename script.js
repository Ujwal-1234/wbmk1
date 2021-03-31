document.getElementById('idcon').innerHTML="<center>Hello!</center> <br><center>it is a template! demo</center><br><center>your content will be here</center><br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>";
function loginclick(){
    document.getElementById('idbform').style.display='block';
    document.getElementById('Sidformout').style.display='none';
    document.getElementById('idformout').style.display='block';
}
function rmloginclick(){
    document.getElementById('Sidformout').style.display='none';
    document.getElementById('idbform').style.display='none';
    document.getElementById('idformout').style.display='none';
}
function rmback(){
    document.getElementById('idbform').style.display='block';
    document.getElementById('idformout').style.display='none';
    document.getElementById('Sidformout').style.display='block';
}
function tmenu(){
    if (document.getElementById('idtopic').style.display != 'block'){
        document.getElementById('idtopic').style.display='block';
    }else{
        document.getElementById('idtopic').style.display='none';
    }
}
function tmenu2(){
    if (document.getElementById('idtopic2').style.display != 'block'){
        document.getElementById('idtopic2').style.display='block';
    }else{
        document.getElementById('idtopic2').style.display='none';
    }
}
