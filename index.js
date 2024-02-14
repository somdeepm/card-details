document.querySelector("button").addEventListener("click",handleCLick);
function handleCLick(){
    var c=document.querySelector("#cnum").value;
    if(c.length!=16||invalidChar(c)){
        document.querySelector(".validator.numer").textContent="Invalid card number";
        document.querySelector("#cnum").classList.add("errbord");
        document.querySelector(".cardnum").textContent="0000 0000 0000 0000";
    }
    else{
        document.querySelector(".validator.numer").textContent="";
        document.querySelector("#cnum").classList.remove("errbord");
        var x="";
        for(j=0;j<c.length;j++){
           if(j%4==0&&j>0)x+=" ";
           x+=c[j];
        }
        document.querySelector(".cardnum").textContent=x;
    }
    c=document.querySelector("#cn").value;
    if(c.length<8||c.length>20){
        if(c.length<8)
        document.querySelector(".validator.nameer").textContent="Cardholder name too short";
        if(c.length>20)
        document.querySelector(".validator.nameer").textContent="Cardholder name too long";
        document.querySelector("#cn").classList.add("errbord");
        document.querySelector(".cardname").textContent="YOUR NAME";
    }
    else{
        document.querySelector(".validator").textContent="";
        document.querySelector("#cn").classList.remove("errbord");
        document.querySelector(".cardname").textContent=c.toUpperCase();
    }
    if(checkExpiry()==false){
        document.querySelector(".validator.exper").textContent="Invalid Month/Year  ";
        document.querySelector(".mm").classList.add("errbord");
        document.querySelector(".yy").classList.add("errbord");
    }
    else{
        document.querySelector(".validator.exper").textContent="";
        document.querySelector(".mm").classList.remove("errbord");
        document.querySelector(".yy").classList.remove("errbord");
        document.querySelector(".expiry").textContent=document.querySelector(".mm").value+"/"+document.querySelector(".yy").value;
    }
    c=document.querySelector(".cvc").value;
    if(c.length==0||Number(c)<100||Number(c)>1000){
        document.querySelector(".validator.cvver").textContent="Invalid CVC";
        document.querySelector(".cvc").classList.add("errbord");
        document.querySelector(".cvv").textContent="000";
    }
    else{
        document.querySelector(".cvv").textContent=document.querySelector(".cvc").value;
        document.querySelector(".validator.cvver").textContent="";
        document.querySelector(".cvc").classList.remove("errbord");
    }
}
function invalidChar(c){
    for(i=0;i<c.length;i++){
        console.log(i);
        if(c[i]<'0'||c[i]>'9')return true;
    }
    return false;
}
function checkExpiry(){
    var c=Number(document.querySelector(".mm").value)
    var d=Number(document.querySelector(".yy").value)
    if(c<0||c>12||d>30||d<23)return false;
    return true;
}