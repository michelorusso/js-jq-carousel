// Cliccando la freccia destra faremo comparire la "prossima immagine"
var arrowRight = $('.arrow.right')

arrowRight.click(function () {
    var displayShow = $('.slider .show');
    // Cliccando la freccia destra rimuovo la classe 'show' dall'immagine
    displayShow.removeClass('show');

    // se l'immagine ha la classe 'last'...
    if(displayShow.hasClass('last')) {

        // ...aggiungiamo la classe show all'immagine con la classe 'first'
        // in questo modo ritorna alla prima immagine
        $('.slider .first').addClass('show');
    } else {

        // altrimenti aggiunge la classe 'show' all'immagine posta dopo nel div images
        var nextImg = displayShow.next();
        nextImg.addClass('show');

    }

});

// Cliccando la freccia sinistra faremo comparire "l'immagine precedente"
var arrowRight = $('.arrow.left')

arrowRight.click(function () {
    var displayShow = $('.slider .show');
    // Cliccando la freccia sinistra rimuovo la classe 'show' dall'immagine
    displayShow.removeClass('show');

    // se l'immagine ha la classe 'first'...
    if(displayShow.hasClass('first')) {

        // ...aggiungiamo la classe show all'immagine con la classe 'last'
        // in questo modo ritorna all'ultima immainge
        $('.slider .last').addClass('show');
    } else {

        // altrimenti aggiunge la classe 'show' all'immagine posta prima nel div images
        var prevImg = displayShow.prev();
        prevImg.addClass('show');

    }

});