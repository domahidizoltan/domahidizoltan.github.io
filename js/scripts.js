function reveal(cls, tokens) {
    var field = document.getElementsByClassName(cls)[0].innerHTML;
    for (var i=0; i<tokens.length; i++) {
        var token = tokens[i].split('=');
        var regex = new RegExp(' \\|' + token[0] + '\\| ', 'g');
        field = field.replace(regex, token[1]);
    }
    document.getElementsByClassName(cls)[0].innerHTML = field;
}

function animateCurtain() {
    var duration = 800;
    var sideCurtainSelector = '.sidebar .curtain';
    var contentCurtainSelector = '.content .curtain';

    $(sideCurtainSelector).animate({height: "0px"}, duration, function() {
        $(sideCurtainSelector).hide();
        setTimeout(function() {$(contentCurtainSelector).animate({width: "0px"}, duration, function() {
            $(contentCurtainSelector).hide();
        })}, duration/4);
    })

}


window.onload = function() {
    reveal('phone', ['p=+', 'm=-', 'c=36', 's=70']);
    reveal('mail', ['a=@', 'd=.', 'm=gmail']);

    setTimeout(animateCurtain, 500)
}
