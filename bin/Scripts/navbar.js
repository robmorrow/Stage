$(function () {
    $('#menu-icon').click(function () {
        $(this).toggleClass('open');
    });
    $("#collapsible-navbar .menu-button").click(function () {
        if ($("#collapsible-navbar").hasClass("expanded"))
            $("#collapsible-navbar").removeClass("expanded")
        else
            $("#collapsible-navbar").addClass("expanded");
    });
});