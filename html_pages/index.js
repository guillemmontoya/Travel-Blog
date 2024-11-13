$(document).ready(function() {
    // Toggle dropdown menu on click
    $('.menu-button').click(function() {
        $('.dropdown-menu').slideToggle(300);
    });

    // Close dropdown when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.menu-button, .dropdown-menu').length) {
            $('.dropdown-menu').slideUp(300);
        }
    });
});