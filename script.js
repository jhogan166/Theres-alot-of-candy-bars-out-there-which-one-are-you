let counter = 0;
$(".result").click(function() {
    counter = counter + 1;
    let candy = $(".candy").val();
    let candynumber = $(".Candynumber").val();
    if (candynumber <= 0) {
        $("p").text("Enter a value greater than 0.");
    } else {
        if (candy === "Peanut Butter" && candynumber <= 2) {
            $("p").text("Enjoy your Snickers!");
        } else if (candy === "Peanut Butter" && candynumber > 2) {
            $("p").text("You like Twix, interesting choice.");

        } else if (candy === "Chocolate" && candynumber <= 2) {
            $("p").text("Milky Way is a nice choice!");

        } else if (candy === "Chocolate" && candynumber > 2) {
            $("p").text("Break Me Off A Piece of That Kit Kat Bar!");

        } else {
            $("p").text("Sorry, Your candy is not here!");
        }
    }
    $(".counter").text("You have taken this quiz: " + counter + " time(s)");
});