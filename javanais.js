var javanais = (function () {

    return {
        frTojav: frTojav,
        javToFr: javToFr
    };


    function frTojav(string) {
        return string.replace(/^[aeiouy\u00C0-\u017F]|[bcdfghjklmnpqrstvwxz\u00C0-\u017F][aeiouy\u00C0-\u017F]/gi,
            function (match) {
                return match.length > 1 ? match.split('').join('av') : 'av' + match
            });

    }

    function javToFr(string) {
        return string.replace(/^av[aeiou\u00C0-\u017F]|[bcdfghjklmnpqrstvwxz\u00C0-\u017F]av[aeiouy\u00C0-\u017F]/gi,
            function (match) {
                return match.replace('av', '');
            });
    }
})();