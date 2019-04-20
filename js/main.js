$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss').on('click', function () {
        $('#sidebar').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        /*$('.overlay').addClass('active');*/
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

});


/*close menu on click*/
const $menu = $('#sidebar');
$(document).mouseup(function (e) {
    if (!$menu.is(e.target)
        && $menu.has(e.target).length === 0) {
        $menu.removeClass('active');
    }
});

$('.toggle').on('click', () => {
    $menu.toggleClass('active');
});

/*overlay: */
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}