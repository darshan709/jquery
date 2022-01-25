// var loginModal = $('#loginModal');

 var obj = new Object();

 function Object()
 {
    this.log = log;
    this.reg=reg;
    this.col=col;
    this.col1=col1;
    this.col2=col2;
    this.reg1=reg1;
    this.log1 = log1;

    function log()
    {
        $('#loginModal').show();
    }

    function reg()
    {
        $('#registerModal').show();
    }
    

    function col()
    {
        $('#loginModal').hide();
    }

    function col1()
    {
        $('#registerModal').hide();
    }

    function col2()
    {
        $('#detailModal').hide();
    }

    function reg1()
    {
        $('#loginModal').hide();
        $('#registerModal').show();
    }

    function log1()
    {
        $('#loginModal').show();
        $('#registerModal').hide();

    }

 }

 window.onclick = function(event) {
    if (event.target == loginModal || event.target == registerModal) {
    $('#registerModal').hide();
    $('#email').val('');
    $('#password').val('');

    $('#loginModal').hide();
    $('#firstname').val('');
    $('#lastname').val('');
    $('#DOB').val('');
    $('#mobile').val('');
    $('#email_').val('');
    $('#password_').val('');
    $('#cpassword_').val('');
    $('#h1').prop('checked', false);
    $('#h2').prop('checked', false);
    $('#h3').prop('checked', false);
    $('#address').val('');
    $('#zipcode').val('');
    $('.man').val('');

    }
  }

  var vali = new validation();
  function validation()
  {
        this.submit=submit;
    
        function submit()
        {

            const user = $('#email').val();
            const pass = $('#password').val();
            const us = "darshanmhatre@gmail.com";
            const pa = "abcd";

            if( user == us && pass==pa)
            { 
                $('#pp').text('Welcome Darshan Mhatre');
                
                $('p1').text('Welcome Darsh');
                $('#email').val('');
                $('#password').val('');
               
                $('#loginModal').hide();


                // document.getElementById('pp').innerText="Darshan Mhatre";
                // document.getElementById('email').style.border="3px solid green" ;
                // document.getElementById('password').style.border="3px solid green";
                // document.getElementById('p1').innerText="Welcome Darsh";

            }
            else
            {
                $('#pp').text('Invalid User');
                $('email').css({"border":"3px solid red"});
                $('password').css({"border":"3px solid red"});
                $('p1').text('Please Enter Correct Password');
                alert('Enter UserName Password Incorrect');
            }
        }
   
     }
     
     //Register

var first_name = $("#firstname");
var last_name = $("#lastname");
var dob = $("#DOB");
var mobile = $("#mobile");
var email = $("#email_");
var password = $("#password_");
var cpassword = $("#cpassword_");
var hobbies = $("input[name='hobbies']");
var gender = $("input[name='gender']");
var city = $("#city");
var address = $("#address");
var zipcode = $("#zipcode");
var male = $("#male");
var female = $("#female");
var h1 = $("#h1");
var h2 = $("#h2");
var h3 = $("#h3");

var fs = $("#fs");
var ls = $("#ls");
var ds = $("#ds");
var ms = $("#ms");
var es = $("#es");
var ps = $("#ps");
var cs = $("#cs");
var hs = $("#hs");
var lo = $("#lo");
var as = $("#as");
var zs = $("#zs");
var gs = $("#gs");
var register_data={};

var index = new Index();

function Index()
{  
    this.validateForm = validateForm;
    this.first=first;
    this.last=last;
    this.db=db;
    this.mobi=mobi;
    this.emai=emai;
    this.pass=pass;
    this.cpass=cpass;
    this.ci=ci;
    this.addr=addr;
    this.z=z;



    
    function validateForm(){
        if(first_name.val()==''){ fs.text('First name is required');}
        if(last_name.val()==''){ ls.text('Last name is required');}
        if(dob.val()==''){ ds.text('Date Of Birth is required');}
        if(mobile.val()==''){ ms.text('Mobile is required');}
        if(email.val()==''){ es.text('Email is required');} 
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())==false){
            es.text('Invalid Email');
            
        }
        

        if(password.val()==''){ ps.text('Password is required');}
        if(cpassword.val()==''){ cs.text('Confirm Password is required');}
        if(city.val()==''){ lo.text('City is required');}
        if(address.val()==''){ as.text('Address is required');}
        if(zipcode.val()==''){ zs.text('Zipcode is required');}

        if ($("input[type='checkbox'][name='hobbies']:checked").length==0){
            hs.text('Hobbies are required');
        }
        else {
            hs.text('');
        }

        $("input[type='checkbox'][name='hobbies']").change(function() {
            if ($("input[type='checkbox'][name='hobbies']:checked").length==0){
                hs.text('Hobbies are required');
            }
            else {
                hs.text('');
            }
        })
      
        // if(h1.checked==false || h2.checked==false || h3.checked==false){ hs.text('Hobbies are required');}
    
        if(first_name.val()!='' && last_name.val()!='' && dob.val()!='' && mobile.val()!='' && email.val()!='' && password.val()!='' && city.val()!='' && address.val()!='' && zipcode.val()!='' && mobile.val().length==10 && (password.val()==cpassword.val())){
            
            $('#show_1').text(first_name.val());
            $('#show_2').text(last_name.val());
            $('#show_3').text((male.val()=='on')?'Male':'Female');
            $('#show_4').text(dob.val());
            $('#show_5').text(mobile.val());
            $('#show_6').text(email.val());
            $('#show_7').text(password.val());
            $('#show_8').text(city.val());
            $('#show_9').text(address.val());
            $('#show_10').text(zipcode.val());
            var checkedValue='';
            var inputElements = $('input[name="hobbies"]');
            for(var i=0; inputElements[i]; ++i){
                  if(inputElements[i].checked){
                       checkedValue += inputElements[i].defaultValue+', ';
                  }
            }
            $('#show_11').text(checkedValue);
            // sessionStorage.setItem('register_data',JSON.stringify(data));
            $('#registerModal').hide();
            $('#firstname').val('');
            $('#lastname').val('');
            $('#DOB').val('');
            $('#mobile').val('');
            $('#email_').val('');
            $('#password_').val('');
            $('#cpassword_').val('');
            $('#h1').prop('checked', false);
            $('#h2').prop('checked', false);
            $('#h3').prop('checked', false);
            // $('#dm').reset();
            $('#address').val('');
            $('#zipcode').val('');

            


            alert('Form submitted successfully.');
            setTimeout(()=>{
                $('#detailModal').show();
            },1000);
            
            

        }
        else {
            return false;
        }
    }

    function first()
    {
        if(first_name.val()==''){ fs.text('First name is required');}else {
            first_name.val(first_name.val().replace(/[^a-z A-Z.]/g, '').replace(/(\..*?)\..*/g, '$1'));
            fs.text('');
            if (first_name.val().length<3||first_name.val().length>15){
                fs.text('Invalid First Name');
            }
        }
    }

    function last()
    {
        if(last_name.val()==''){ ls.text('Last name is required');} else {
            last_name.val(last_name.val().replace(/[^a-z A-Z.]/g, '').replace(/(\..*?)\..*/g, '$1'));
            ls.text('');
            if(last_name.val().length<3||last_name.val().length>15){
                ls.text('Invalid First Name');
            }
        }
    }

    function db()
    {
        if(dob.val()==''){ ds.text('Date Of Birth is required');} else {
            var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
            var eighteenYearsAgo = moment().subtract(18, "years");
            var birthday = moment(dob.val());
    
            if (!pattern.test(dob.val())) {
                ds.text("Invalid Date of Birth");
            }
            else if (eighteenYearsAgo.isAfter(birthday)) {
                ds.text("");   
            }
            else {
                ds.text('Your age is less than 18');
            }
        }
    }

    function mobi()
    {
        if(mobile.val()==''){ 
            ms.text('Mobile is required');
        } 
        else {
            mobile.val(mobile.val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'));
            ms.text('');
            if(mobile.val().length<10){
                ms.text('Invalid Mobile number');
            }
        }
    }

    function emai()
    {
        if(email.val()==''){ 
            es.text('Email is required');
        } 
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())==false){
            es.text('Invalid Email');
        }
        else 
        {
            es.text('');
        }
    }

    function pass()
    {

        if(password.val()==''){
             ps.text('Password is required');
            }
       else if (password.val()!=cpassword.val()) {
                cs.text('Confirm password doesnt match');
                ps.text('');
            } 
            else {
                ps.text('');
                cs.text('');
            }
    }
    

    function cpass()
    {
        if(cpassword.val()=='')
        { 
            cs.text('Confirm Password is required');
        } 
        else if(password.val()!=cpassword.val()) 
            {
                cs.text('Confirm password doesnt match');
            } 
            else {
                cs.text('');
                ps.text('');
            }
        }
    

    function ci()
    {
        if(city.val()==''){ lo.text('City is required');} else {lo.text('');}
    }

    function addr()
    {
        if(address.val()==''){ as.text('Address is required');} else {as.text('');}
    }

    function z()
    {
        if(zipcode.val()==''){ 
            zs.text('Zipcode is required');
        } 
        else {
            zipcode.val(zipcode.val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'));
            zs.text('');
        }
    }

}




// first_name.on('input', function () {
//     if(first_name.val()==''){ fs.text('First name is required');}else {
//         first_name.val(first_name.val().replace(/[^a-z A-Z.]/g, '').replace(/(\..*?)\..*/g, '$1'));
//         fs.text('');
//         if (first_name.val().length<3||first_name.val().length>15){
//             fs.text('Invalid First Name');
//         }
//     }
// });
// last_name.on('input', function () {
//     if(last_name.val()==''){ ls.text('Last name is required');} else {
//         last_name.val(last_name.val().replace(/[^a-z A-Z.]/g, '').replace(/(\..*?)\..*/g, '$1'));
//         ls.text('');
//         if(last_name.val().length<3||last_name.val().length>15){
//             ls.text('Invalid First Name');
//         }
//     }
// });
// dob.on('input', function () {
//     if(dob.val()==''){ ds.text('Date Of Birth is required');} else {
//         var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
//         var eighteenYearsAgo = moment().subtract(18, "years");
//         var birthday = moment(dob.val());

//         if (!pattern.test(dob.val())) {
//             ds.text("Invalid Date of Birth");
//         }
//         else if (eighteenYearsAgo.isAfter(birthday)) {
//             ds.text("");   
//         }
//         else {
//             ds.text('Your age is less than 18');
//         }
//     }
// });
// mobile.on('input', function () {
//     if(mobile.val()==''){ 
//         ms.text('Mobile is required');
//     } 
//     else {
//         mobile.val(mobile.val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'));
//         ms.text('');
//         if(mobile.val().length<10){
//             ms.text('Invalid Mobile number');
//         }
//     }
// });
// email.on('input', function () {
//     if(email.val()==''){ 
//         es.text('Email is required');
//     } 
//     else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())==false){
//         es.text('Invalid Email');
//     }
//     else 
//     {
//         es.text('');
//     }
// });
// password.on('input', function () {
//     if(password.val()==''){ ps.text('Password is required');} else {
//         if(password.val()!=cpassword.val()){
//             cs.text('Confirm password doesnt match');
//             ps.text('');
//         } 
//         else {
//             ps.text('');
//             cs.text('');
//         }
//     }
// });
// cpassword.on('input', function () {
//     if(cpassword.val()==''){ 
//         cs.text('Confirm Password is required');
//     } 
//     else {
//         if(password.val()!=cpassword.val()){
//             cs.text('Confirm password doesnt match');
//         } 
//         else {
//             cs.text('');
//             ps.text('');
//         }
//     }
// });
// city.on('input', function () {
//     if(city.val()==''){ lo.text('City is required');} else {lo.text('');}
// });
// address.on('input', function () {
//     if(address.val()==''){ as.text('Address is required');} else {as.text('');}
// });
// zipcode.on('input', function () {
//     if(zipcode.val()==''){ 
//         zs.text('Zipcode is required');
//     } 
//     else {
//         zipcode.val(zipcode.val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'));
//         zs.text('');
//     }
// });


//      var first_name =$('#firstname');
//      var last_name = $('#lastname');
//      var dob =       $('#DOB');
//      var mobile =    $('#mobile');
//      var email =     $('#email');
//      var password =  $('#password');
//      var cpassword = $('#cpassword');
//      var hobbies = $('#hobbies');
//      var gender =  $('#gender');
//      var city =    $('#city');
//      var address = $('#address');
//      var zipcode = $('#zipcode');
//      var male =    $('#male');
//      var female =  $('#female');
//      var h1 =      $('#h1');
//      var h2 =      $('#h2');
//      var h3 =      $('#h3');

//     var fs = $('#fs');
//     var ls = $('#ls');
//     var ds = $('#ds');
//     var ms = $('#ms');
//     var es = $('#es');
//     var ps = $('#ps');
//     var cs = $('#cs');
//     var hs = $('#hs');
//     var lo = $('#lo');
//     var as = $('#as');
//     var zs = $('#zs');
//     var gs = $('#gs');

//    var regi = new  Regi();
    
//    function Regi()
//    {
//        this.validateForm=validateForm;
//        this.first = first;
//        this.last = last;
//        this.dob = dob;
//        this.dob=dob;
//        this.mobile=mobile;
//        this.email=email;
//        this.password=password;
//        this.cpassword=cpassword;
//        this.city=city;
//        this.address=address;
//        this.zip=zip;



//        function validateForm()
//        {
//         if(first_name.val()==''){ fs.text('First name is required');}
//         if(last_name.val()==''){ ls.text('Last name is required');}
//         if(dob.val()==''){ ds.text('Date Of Birth is required');}
//         if(mobile.val()==''){ ms.text('Mobile is required');}
//         if(email.val()==''){ es.text('Email is required');} //else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())==false){es.text('Invalid Email');
//         if(password.val()==''){ ps.text('Password is required');}
//         if(cpassword.val()==''){ cs.text('Confirm Password is required');}
//         if(city.val()==''){ lo.text('City is required');}
//         if(address.val()==''){ as.text('Address is required');}
//         if(zipcode.val()==''){ zs.text('Zipcode is required');}
//         //if(h1.checked==false || h2.checked==false || h3.checked==false){ hs.innerText='Hobbies are required';}

//         if(first_name.val()!='' && last_name.val()!='' && dob.val()!='' && mobile.val()!='' && email.val()!='' && password.value!='' && city.value!='' && address.val()!='' && zipcode.val()!='' && mobile.val().length==10 && (password.val()==cpassword.val()))
//         {
//             var data={};
//         data['first_name']=first_name.value;
//         data['last_name']=last_name.value;
//         data['gender']=(male.value=='on')?'Male':'Female';
//         data['dob']=dob.value;
//         data['mobile']=mobile.value;
//         data['email']=email.value;
//         data['password']=password.value;
//         data['city']=city.value;
//         data['address']=address.value;
//         data['zipcode']=zipcode.value;
//         var checkedValue='';
//         var inputElements = document.getElementsByClassName('hobbies');
//         for(var i=0; inputElements[i]; ++i){
//               if(inputElements[i].checked){
//                    checkedValue += inputElements[i].value+', ';
//               }
//         }
//         data['hobbies']=checkedValue;        ;
//         sessionStorage.setItem('register_data',JSON.stringify(data));
//         alert('Form submitted successfully.');
        
//         }
//         else {
//             return false;
//         }
//      }

//      function first ()
//      {
//         if(first_name.value==''){ fs.text('First name is required');}else {
//             first_name.value = first_name.value.replace(/[^a-z A-Z.]/g, '').replace(/(\..*?)\..*/g, '$1');
//             fs.text('');
//             if (first_name.value.length<3||first_name.value.length>15){
//                 fs.text('Invalid First Name');
//             }
//         }
//     }

//      function last ()
//       {
//         if(last_name.value==''){ ls.innerText='Last name is required';} else {
//             last_name.value = last_name.value.replace(/[^a-z A-Z.]/g, '').replace(/(\..*?)\..*/g, '$1');
//             ls.text('');
//             if(last_name.value.length<3||last_name.value.length>15){
//                 ls.text('Invalid First Name');
//             }
//         }
//     }

//     function dob  () {
//         if(dob.value==''){ ds.innerText='Date Of Birth is required';} else {
//             var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
//             var eighteenYearsAgo = moment().subtract(18, "years");
//             var birthday = moment(dob.value);
    
//             if (!pattern.test(dob.value)) {
//                 ds.innerText = "Invalid Date of Birth";
//             }
//             else if (eighteenYearsAgo.isAfter(birthday)) {
//                 ds.text(" ");   
//             }
//             else {
//                 ds.text('Your age is less than 18');
//             }
//         }           
                        
//     }  


//     function mobile () { 
//         if(mobile.value==''){ 
//             ms.text('Mobile is required');
//         } 
//         else {
//             mobile.value = mobile.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
//             ms.text('');
//             if(mobile.value.length<10){
//                 ms.text('Invalid Mobile number');
//             }
//         }
//     }

//     function email () {
//         if(email.value==''){ 
//             es.text('Email is required');
//         } 
//         else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)==false){
//             es.text('Invalid Email');
//         }
//         else 
//         {
//             es.text('');
//         }
//     }

//     function password () {
//         if(password.value==''){ ps.text('Password is required');} else {
//             if(password.value!=cpassword.value){
//                 cs.text('Confirm password doesnt match');
//                 ps.text=('');
//             } 
//             else {
//                 ps.text('');   
//                 cs.text('');
//             }
//         }
//     }

//     function cpassword () {
//         if(cpassword.value==''){ 
//             cs.text('Confirm Password is required');
//         } 
//         else {
//             if(password.value!=cpassword.value){
//                 cs.text('Confirm password doesnt match');
//             } 
//             else {
//                 cs.text('');
//                 ps.text('');
//             }
//         }
//     }
//     function city () {
//         if(city.value==''){ lo.innerText='City is required';} else {lo.text('');}
//     }
//     function address () {
//         if(address.value==''){ as.text('Address is required');} else {as.text('');}
//     }

//     function zip () {
//         if(zipcode.value==''){ 
//             zs.text('Zipcode is required');
//         } 
//         else {
//             zipcode.val() = zipcode.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
//             zs.text('');
//         }
//     }

//    }

   




// function validateForm(){
//     if(first_name.value==''){ fs.innerText='First name is required';}
//     if(last_name.value==''){ ls.innerText='Last name is required';}
//     if(dob.value==''){ ds.innerText='Date Of Birth is required';}
//     if(mobile.value==''){ ms.innerText='Mobile is required';}
//     if(email.value==''){ es.innerText='Email is required';} else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)==false){
//         es.innerText='Invalid Email';
        
//     }
//     if(password.value==''){ ps.innerText='Password is required';}
//     if(cpassword.value==''){ cs.innerText='Confirm Password is required';}
//     if(city.value==''){ lo.innerText='City is required';}
//     if(address.value==''){ as.innerText='Address is required';}
//     if(zipcode.value==''){ zs.innerText='Zipcode is required';}

// }
// var first_name = document.getElementById("firstname");
// var last_name = document.getElementById("lastname");
// var dob = document.getElementById("DOB");
// var mobile = document.getElementById("mobile");
// var email = document.getElementById("email");
// var password = document.getElementById("password");
// var cpassword = document.getElementById("cpassword");
// var hobbies = document.getElementsByName("hobbies");
// var gender = document.getElementsByName("gender");
// var city = document.getElementById("city");
// var address = document.getElementById("address");
// var zipcode = document.getElementById("zipcode");
// var male = document.getElementById("male");
// var female = document.getElementById("female");
// var h1 = document.getElementById("h1");
// var h2 = document.getElementById("h2");
// var h2 = document.getElementById("h2");

// var fs = document.getElementById("fs");
// var ls = document.getElementById("ls");
// var ds = document.getElementById("ds");
// var ms = document.getElementById("ms");
// var es = document.getElementById("es");
// var ps = document.getElementById("ps");
// var cs = document.getElementById("cs");
// var hs = document.getElementById("hs");
// var lo = document.getElementById("lo");
// var as = document.getElementById("as");
// var zs = document.getElementById("zs");
// var gs = document.getElementById("gs");

// function validateForm()
// {
//     if(first_name.val()==''){ fs.text('First name is required');}
//     if(last_name.val()==''){ ls.text('Last name is required');}
//     if(dob.val()==''){ ds.text('Date Of Birth is required');}
//     if(mobile.val()==''){ ms.text('Mobile is required');}
//     if(email.val()==''){ es.text('Email is required');} else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())==false){
//         es.text('Invalid Email');
        
//     }
// }

// function validateForm()
// {
//     if(first_name.val()==''){ fs.text('First name is required');}
//     if(last_name.val()==''){ ls.text('Last name is required');}
//     if(dob.value==''){ ds.text('Date Of Birth is required');}
//     if(mobile.val()==''){ ms.text('Mobile is required');}
//     if(email.val()==''){ es.innerText='Email is required';} else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)==false){
//         es.innerText='Invalid Email';
        
//     }
//     if(password.val()==''){ ps.text('Password is required');}
//     if(cpassword.val()==''){ cs.text('Confirm Password is required');}
//     if(city.val()==''){ lo.text('City is required');}
//     if(address.val()==''){ as.text('Address is required');}
//     if(zipcode.val()==''){ zs.text('Zipcode is required');}

//     //if(h1.checked==false || h2.checked==false || h3.checked==false){ hs.innerText='Hobbies are required';}

//     if(first_name.val()!='' && last_name.val()!='' && dob.val()!='' && mobile.val()!='' && email.val()!='' && password.value!='' && city.value!='' && address.val()!='' && zipcode.val()!='' && mobile.val().length==10 && (password.val()==cpassword.val())){
//         var data={};
//         data['first_name']=first_name.val();
//         data['last_name']=last_name.val();
//         data['gender']=(male.val()=='on')?'Male':'Female';
//         data['dob']=dob.val();
//         data['mobile']=mobile.val();
//         data['email']=email.val();
//         data['password']=password.val();
//         data['city']=city.val();
//         data['address']=address.val();
//         data['zipcode']=zipcode.val();
//         var checkedValue='';
//         var inputElements =$('.hobbies');
//         for(var i=0; inputElements[i]; ++i){
//               if(inputElements[i].checked){
//                    checkedValue += inputElements[i].val(', ');
//               }
//         }
//         data['hobbies']=checkedValue;        ;
//         sessionStorage.setItem('register_data',JSON.stringify(data));
//         alert('Form submitted successfully.');
//     }
//     else {
//         return false;
//     }
// }

// first_name.addEventListener('input', function () {
//     if(first_name.val()==''){ fs.text='First name is required';}else {
//         first_name.val() = first_name.val().replace(/[^a-z A-Z.]/g, '').replace(/(\..*?)\..*/g, '$1');
//         fs.innerText='';
//         if (first_name.val().length<3||first_name.val().length>15){
//             fs.text('Invalid First Name');
//         }
//     }
// });

// last_name.addEventListener('input', function () {
//     if(last_name.value==''){ ls.text('Last name is required');} else {
//         last_name.val() = last_name.value.replace(/[^a-z A-Z.]/g, '').replace(/(\..*?)\..*/g, '$1');
//         ls.text('');
//         if(last_name.val().length<3||last_name.val().length>15){
//             ls.text('Invalid First Name');
//         }
//     }
// });
// dob.addEventListener('input', function () {
//     if(dob.val()==''){ ds.text('Date Of Birth is required');} else {
//         var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
//         var eighteenYearsAgo = moment().subtract(18, "years");
//         var birthday = moment(dob.val());

//         if (!pattern.test(dob.val())) {
//             ds.text("Invalid Date of Birth");
//         }
//         else if (eighteenYearsAgo.isAfter(birthday)) {
//             ds.text( "");   
//         }
//         else {
//             ds.text('Your age is less than 18');
//         }
//     }
// });

// mobile.addEventListener('input', function () {
//     if(mobile.val()==''){ 
//         ms.text('Mobile is required');
//     } 
//     else {
//         mobile.val() = mobile.val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
//         ms.text='';
//         if(mobile.value.length<10){
//             ms.text('Invalid Mobile number');
//         }
//     }
// });

// email.addEventListener('input', function () {
//     if(email.val()==''){ 
//         es.innerText='Email is required';
//     } 
//     else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)==false){
//         es.text('Invalid Email');
//     }
//     else 
//     {
//         es.text('');
//     }
// });

// password.addEventListener('input', function () {
//     if(password.val()==''){ ps.text('Password is required');} else {
//         if(password.value!=cpassword.value){
//             cs.text('Confirm password doesnt match');
//             ps.text('');
//         } 
//         else {
//             ps.text('');
//             cs.text('');
//         }
//     }
// });

// cpassword.addEventListener('input', function () {
//     if(cpassword.val()==''){ 
//         cs.text('Confirm Password is required');
//     } 
//     else {
//         if(password.val()!=cpassword.val()){
//             cs.text='Confirm password doesnt match';
//         } 
//         else {
//             cs.text('');
//             ps.text('');
//         }
//     }
// });

// city.addEventListener('input', function () {
//     if(city.val()==''){ lo.text('City is required');} else {lo.text('');}
// });
// address.addEventListener('input', function () {
//     if(address.val()==''){ as.innerText='Address is required';} else {as.text('');}
// });
// zipcode.addEventListener('input', function () {
//     if(zipcode.val()==''){ 
//         zs.text('Zipcode is required');
//     } 
//     else {
//         zipcode.value = zipcode.val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
//         zs.text('');
//     }
// });


        


// var vali = new validation();

// function validation(){
//     this.fun=fun;
//     this.lot_fun=lot_fun;


//     function fun(){
//         document.getElementById('lp').style.display='block';
//     }

//     function lot_fun(){
//         document.getElementById('sp').style.display='block';
//     }
// }

// var loginModal = document.getElementById("loginModal");
// var registerModal = document.getElementById("registerModal");

// var loginBtn = document.getElementById("loginBtn");
// var registerBtn = document.getElementById("registerBtn");
// var loginBtn_1 = document.getElementById("loginBtn1");
// var registerBtn_1 = document.getElementById("registerBtn1");

// var closeLogin = document.getElementsByClassName("closeLogin")[0];
// var closeRegister = document.getElementsByClassName("closeRegister")[0];


// loginBtn.onclick = function() {
//     loginModal.style.display = "block";
// }

// registerBtn.onclick = function() {
//     registerModal.style.display = "block";
// }

// loginBtn_1.onclick = function() {
//     registerModal.style.display = "none";
//     loginModal.style.display = "block";
// }

// registerBtn_1.onclick = function() {
//     loginModal.style.display = "none";
//     registerModal.style.display = "block";
// }

// closeLogin.onclick = function() {
//     loginModal.style.display = "none";
// }

// closeRegister.onclick = function() {
//     registerModal.style.display = "none";
// }

// //  When the user clicks anywhere outside of the modal, close it
 

// ///login Validation
// var vali = new formValidation();
// function formValidation() {
    
    
//     this.submit =submit;

//     function submit() {
    // var user = document.getElementById('email').value;
    // var pass = document.getElementById('password').value;
    // const us = "darshanmhatre@gmail.com";
    // const pa = "abcd";
    // if( user == us&&pass==pa){
    //   document.getElementById('pp').innerText="Darshan Mhatre";
    //   document.getElementById('email').style.border="3px solid green" ;
    //   document.getElementById('password').style.border="3px solid green";
    //   document.getElementById('p1').innerText="Welcome Darsh";
    //   document.getElementById('loginModal').style.display = 'none';
    //   document.getElementById('email').hidden ;
    //   document.getElementById('password').hidden;
      

//     }
//     else{
//       document.getElementById('pp').innerText="Invalid User";
//       document.getElementById('email').style.border="3px solid red";
//       document.getElementById('password').style.border="3px solid red";
//       document.getElementById('p1').innerText="Please Enter Correct Password";
//       alert('Enter UserName Password Incorrect');

//     }

    
    
//   }
// }
