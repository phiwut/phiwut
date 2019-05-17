window.onload = function() {

    document.getElementById("age").innerHTML = moment().diff(
        "1999-02-04",
        "years",
        false
    );

    document.getElementById("age").title = "That's exactly " 
    + moment().diff(
        "1999-02-04", 
        "years", 
        true
    ) + " years";

};