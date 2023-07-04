function vfun(){
  var uname1=document.forms["myform2"]["uname1"].value;
  var email1=document.forms["myform2"]["email1"].value;
  var upswd1=document.forms["myform2"]["upswd1"].value;
  var upswd2=document.forms["myform2"]["upswd2"].value;

if(uname1==null || uname1=="" ){
        document.getElementById("errorBox").innerHTML =
         "enter the user name";
       return false;
}
if(uname1!=null || uname1!=""){

  let capsuname = uname1.toUpperCase();

  if(uname1 !=capsuname){
    document.getElementById("errorBox").innerHTML =
         "enter the user name to Upper Case";
       return false;
  }
}

if(email1==null || email1==""){
        document.getElementById("errorBox").innerHTML =
         "enter the email";
       return false;
}

if(upswd1==null || upswd1=="" ){
        document.getElementById("errorBox").innerHTML =
         "enter the password";
       return false;
}
if(upswd1!=null || upswd1!=""){

  if(upswd1.length>7 == false){
    document.getElementById("errorBox").innerHTML =
         "Minimum Password 8 Character ";
       return false;
  }
}

if(upswd2==null || upswd2==""){
        document.getElementById("errorBox").innerHTML =
         "enter the password";
       return false;}

if(upswd1 != upswd2){
        document.getElementById("errorBox").innerHTML =
         "password dont match";
       return false;}



if (uname1 != '' && upswd1 != '' && upswd2 != '' && email1 != '' && upswd1 == upswd2)


alert("Register successfull");
               

}

  