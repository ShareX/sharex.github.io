$(document).ready(function () {
    var hash = window.location.hash.substr(1);
    var href = $('#mynav li a').each(function () {
        var href = $(this).attr('href');
        if (hash == href.substr(0, href.length - 5)) {
            var toLoad = hash + '.html';
            $('#content').load(toLoad)
        }
    });

    $('#mynav li a').click(function () {
        var toLoad = $(this).attr('href');
        $('#content').hide('fast', loadContent);
        $('#load').remove();
        $('#wrapper').append('<span id="load">Loading...</span>');
        $('#load').fadeIn('normal');
        window.location.hash = $(this).attr('href').substr(0, $(this).attr('href').length - 5);
        function loadContent() {
            $('#content').load(toLoad, '', showNewContent())
        }
        function showNewContent() {
            $('#content').show('normal', hideLoader());
        }
        function hideLoader() {
            $('#load').fadeOut('normal');
        }
        return false;
    });
});