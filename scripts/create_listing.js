var submitButton = document.getElementById("submit_listing")
submitButton.addEventListener('click', checkListingForm);

var description_length = document.getElementById("length_description")
var description_input_box = document.getElementById("description");


description_input_box.addEventListener('input', function () {
    description_length.textContent = description_input_box.value.length
});





function isInt(str) {
    var val = parseInt(str);
    return (val > 0);
}

var checkMoneyExpression = function (str) {
    // test if str matches the money pattern		
    var pattern = new RegExp("^[0-9]+(\.[0-9]{1,2})?$");
    var match_test = pattern.test(str);
    return match_test;
}

// Four tests:


function checkListingForm() {
    const title = document.getElementById("title");
    if (title.value.length < 10) {
        alert("Title must have at least 10 characters");
        title.focus()
        return false;
    }

    const game = document.getElementById("game");

    if (game.value.length < 1) {
        alert("Game Title must have at least 1 characters");
        game.focus()
        return false;
    }

    const price = document.getElementById("price");

    if ((checkMoneyExpression(price.value)) == false) {
        alert("Price must be valid currency format Ex. 10.50");
        price.focus()
        return false
    }

    const description = document.getElementById("description");
    if (description.value.length > 1000) {
        alert("Description must be less than 1000 characters");
        description.focus()
        return false;
    }

    return true;

}