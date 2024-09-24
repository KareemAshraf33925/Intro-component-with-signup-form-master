var forsubmit=document.getElementById("forsubmit");
var firstname=document.getElementById("firstname");
var er1=document.querySelector(".er-1");
var firstn=document.getElementById("firstn");
var lastname=document.getElementById("lastname");
var er2=document.querySelector(".er-2");
var lastn=document.getElementById("lastn");
var email=document.getElementById("email");
var er3=document.querySelector(".er-3");
var emai=document.getElementById("emai");
var passward=document.getElementById("passward");
var er4=document.querySelector(".er-4");
var passw=document.getElementById("passw");

// submit
    forsubmit.addEventListener("submit",(e)=>{
        validfirstname();
        validlastname();
        validemail();
        validpassward();
        e.preventDefault();
    })

//  validfirstname
    function validfirstname(){
        if(firstname.value == ""){
            firstn.textContent ="First Name cannot be empty";
            er1.classList.add("active");
        }else{
            firstn.textContent="";
            er1.classList.remove("active");
            firstname.value="";
        }
     }
    //  validlastname
     function validlastname(){
        if(lastname.value == ""){
            lastn.textContent ="Last Name cannot be empty";
            er2.classList.add("active");
        }else{
            lastn.textContent="";
            er2.classList.remove("active");
            lastname.value="";
        }
     }
    //  validemail
     function validemail(){
        if(email.value.indexOf("@gamil") != -1){
            emai.textContent="";
            email.setAttribute("placeholder","Email Address")
            er3.classList.remove("active");
            email.value="";
        }else{
            emai.textContent ="Look like this is not an email";
            email.setAttribute("placeholder","email@example/com")
            er3.classList.add("active");
        }
     }
    // validpassward 
     function validpassward(){
        if(passward.value == ""){
            passw.textContent ="Password cannot be empty";
            er4.classList.add("active");
        }else{
            passw.textContent="";
            er4.classList.remove("active");
            passward.value=""
        }
     }


 
