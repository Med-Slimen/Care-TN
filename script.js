function capatcha() {
  ch = "";
  for (i = 0; i <= 5; i++) {
    x = Math.random() * (123 - 97) + 97;
    r=Math.floor(Math.random() * (2 - 0) + 0);
    chx=String.fromCharCode(x);
    if(r==1){
        chx=chx.toUpperCase();
    }
    ch = ch + chx
  }
  document.getElementById("cap").innerHTML=ch;
}
function verif(){
    cap=document.getElementById("cap").innerHTML;
    rb=document.getElementById("rb").value;
    if(cap==rb){
        return true;
    }
    else{
        alert("capatcha incorrect");
        return false;
    }
}
