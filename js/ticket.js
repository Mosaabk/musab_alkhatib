$(function() {
    $("#submit").click(validate);
});

function validate(evt) {
    var seatNo = $("#seats").val();
    var type = $("[name='taxi']:checked");
    var extras = $("[type='checkbox']:checked");
    var success = true;
    $("#warning p").remove();
    if (!seatNo || seatNo < 0 || seatNo > 200) {
        $("#warning").append($("<p>")
            .addClass("warning")
            .text("You can not book more than 200 seats."));
        success = false;
    }
    if (!type.length) {
        $("#warning").append($("<p>")
            .addClass("warning")
            .text("You must select taxi type."));
        success = false;

    }
    if (!extras.length) {
        $("#warning").append($("<p>")
            .addClass("warning")
            .text("You must check one extra."));
        success = false;
    }

    if (!success) {
        evt.preventDefault();
    }

}