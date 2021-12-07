$("form").append(`<input type="submit" name="submit" id="submit" value="Submit!" disabled>`);

$('form').submit((e) => {
    e.preventDefault()
    if (validateInputs() ) {
        $("body").append(`<p>Welcome ${username.val()}! The country code you selected is ${countryList.val()}</p>`)
    }
});

let countryList = $("#select");
let username = $("#username");
let password = $("#password");
let validatePassword = $("#validatePassword");
let checkbox = $("#checkbox");
countries.forEach(e => {
    $(countryList).append(`<option value="${e.code}">${e.name}</option>
    `);
});

function validateInputs(e) {
    console.log('here1');
    if(username.val().length <= 0) {
        return false;
    }

    console.log("here2");
    if(password.val().length < 10) {
        return false;
    }

    console.log('here3')
    if(validatePassword.val() !== password.val()) {
        return false;
    }

    console.log('here4')
    if(checkbox.is(':checked') === false) {
        return false;
    }

    console.log('here5')
    if(countryList.val().length === 0) {
        return false;
    }

    $("#submit").attr('disabled', false)
    return true;
}

username.keyup(validateInputs);
password.keyup(validateInputs);
validatePassword.keyup(validateInputs);
checkbox.change(validateInputs);
countryList.change(validateInputs);



