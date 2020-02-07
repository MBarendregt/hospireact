// var form = document.getElementById("form-id");

// document.getElementById("your-id").addEventListener("click", function (e) {
//     console.log(e);
//     e.preventDefault();
// });


// function r(e) {
//     var t = n(3);
//     " " === e.key && (e.preventDefault(), e.stopPropagation(), t(e.target).click())
// }
// let submit = document.getElementById("form-id");

// submit.addEventListener("submit", function (e) {
//     let form = e.target; // get form instance
//     e.preventDefault();
//     console.log(form);
//     // form.submit();

// })

// function SubForm() {
//     $.ajax({
//         url: '/Person/Edit/@Model.Id/',
//         type: 'post',
//         data: $('#myForm').serialize(),
//         success: function () {
//             alert("worked");
//         }
//     });
// }



// function submitForm() {
//     $('form[name="myForm]').submit();
//     $('input[type="text"], textarea').val('');
// }

// document.getElementById("testForm").addEventListener("submit", function () { this.className = "submitted"; })

function validateEmail(email) {
    // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var re = /\S+@\S+\.\S+/
    console.log("email is" + re.test(email))
    return re.test(email);
}

function validateEmailRealTime() {
    // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email = document.getElementById('hospitaemail').value
    var re = /\S+@\S+\.\S+/
    allelements = document.getElementsByTagName('input')
    if (!re.test(email)) {
        allelements[3].classList.add("invalid_property")
        document.getElementById('emailregex').style.display = "block";
    } else {
        allelements[3].classList.remove("invalid_property")
        document.getElementById('emailregex').style.display = "none";
    }
}

function validatePhonenumberRealTime() {
    var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.\/0-9]*$/;
    phonenumber = document.getElementById('hospitaphone').value
    allelements = document.getElementsByTagName('input')
    console.log(re.test(phonenumber))
    if (!re.test(phonenumber)) {
        allelements[4].classList.add("invalid_property")
        document.getElementById('phoneregex').style.display = "block";
    } else {
        allelements[4].classList.remove("invalid_property")
        document.getElementById('phoneregex').style.display = "none";
    }
}

function validatePhonenumber(phonenumber) {
    var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    console.log("tel is" + re.test(phonenumber))
    return re.test(phonenumber)
}

document.getElementById("your-id").addEventListener("click", function SubForm(e) {
    var firstname = document.forms["myForm"]["firstname"].value;
    var lastname = document.forms["myForm"]["lastname"].value;
    var emailadr = document.forms["myForm"]["email"].value;
    var telphonenumber = document.forms["myForm"]["tel"].value;

    allelements = document.getElementsByTagName('input')
    e.preventDefault();
    var count_errors = 0;
    if (firstname == "" || lastname == "" || !validatePhonenumber(telphonenumber) || telphonenumber == "") {
        count_errors += 1;
        console.log("errorss " + count_errors)
    }
    if (!validateEmail(emailadr) || emailadr == "") {
        count_errors += 1;
    }

    console.log("count_errors when it actually matters: " + count_errors)
    if (count_errors === 0) {
        console.log("im goint to shend shit")


        var url = $(this).closest('form').attr('action'),
            data = $(this).closest('form').serialize();

        console.log(typeof data)
        $.ajax({
            url: url,
            crossDomain: true,
            contentType: 'application/json',
            type: 'POST',
            data: data,
            success: function (d) {
                console.log(d)
                document.getElementById("demo").innerHTML = d;

                // clear input fields 
                $('input[type="text"], textarea').val('');
                $('input[type="email"], textarea').val('');
                $('input[type="tel"], textarea').val('');
                console.log("printsuccess")   //whatever you wanna do after the form is successfully submitted
            }
        });

    }
    console.log("getting here")
    return false
}

)



function checkApi() {
    console.log("imhere")
    if (document.getElementById("email").value)
        var email_property = document.getElementById("email").value
    // totallySecureWayToCheckIfUserExists(email_property);
    console.log(email_property)

}

function totallySecureWayToCheckIfUserExists(email_property) {
    $.ajax({
        url: url,
        crossDomain: true,
        contentType: 'application/json',
        type: 'POST',
        data: email_property,
        success: function (d) {
            console.log(d)
            document.getElementById("demo").innerHTML = d;
            console.log("printsuccess")   //whatever you wanna do after the form is successfully submitted
        }
    });
}
// var frm = $('#myForm');
// frm.submit(function () {
//     $.ajax({
//         type: frm.attr('method'),
//         url: frm.attr('action'),
//         data: frm.serialize()
//         // success: function (data) {
//         //     $("#SOME-DIV").html(data);
//         // },
//         // error: function(data) {
//         //     $("#MESSAGE-DIV").html("Something went wrong!");
//         // }
//     });
//     return false;
// });