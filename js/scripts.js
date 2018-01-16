function reveal(cls, tokens) {
    var field = document.getElementsByClassName(cls)[0].innerHTML;
    for (var i=0; i<tokens.length; i++) {
        var token = tokens[i].split('=');
        var regex = new RegExp(' \\|' + token[0] + '\\| ', 'g');
        field = field.replace(regex, token[1]);
    }
    document.getElementsByClassName(cls)[0].innerHTML = field;
}

window.onload = function() {
    reveal('phone', ['p=+', 'm=-', 'c=36', 's=70']);
    reveal('mail', ['a=@', 'd=.', 'm=gmail']);
}
