$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myList li").each(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        $("#myList").toggle(value !== "");
    });
});