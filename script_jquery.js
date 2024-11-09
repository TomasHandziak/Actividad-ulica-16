$(document).ready(function() {
    // Ejercicio 3: Selección de un elemento mediante ID
    $('#elementoId').css('color', 'blue');

    // Ejercicio 4: Selección de elementos por tipo
    $('p').css('font-weight', 'bold');

    // Ejercicio 5: Selección de elementos con selectores CSS
    $('p:first').css('background-color', 'yellow');

    // Ejercicio 6: Selección de elementos con clases CSS
    $('.clase').css('font-size', '18px');

    // Ejercicio 7: Métodos text() y text(valor)
    $('#elementoId').text('Texto cambiado con jQuery');

    // Ejercicio 8: Métodos attr() y removeAttr()
    $('#campoTexto').attr('placeholder', 'Escribe tu nombre aquí');
    $('#campoTexto').removeAttr('placeholder');

    // Ejercicio 9: Métodos addClass() y removeClass()
    $('#elementoId').addClass('nuevoEstilo');
    $('.clase').removeClass('clase');

    // Ejercicio 10: Métodos html() y html(valor)
    $('#mensaje').html('<strong>Mensaje con HTML modificado</strong>');

    // Ejercicio 11: Administración de eventos
    $('#boton').on('click', function() {
        alert('Botón presionado');
    });

    // Ejercicio 12: Eventos mouseover y mouseout
    $('#mensaje').on('mouseover', function() {
        $(this).css('color', 'green');
    }).on('mouseout', function() {
        $(this).css('color', 'black');
    });

    // Ejercicio 13: Evento hover
    $('#elementoId').hover(
        function() { $(this).css('background-color', 'lightblue'); },
        function() { $(this).css('background-color', ''); }
    );

    // Ejercicio 14: Evento mousemove
    $(document).on('mousemove', function(event) {
        $('#mensaje').text('Posición X: ' + event.pageX + ', Y: ' + event.pageY);
    });

    // Ejercicio 15: Eventos mousedown y mouseup
    $('#boton').on('mousedown', function() {
        $(this).css('background-color', 'red');
    }).on('mouseup', function() {
        $(this).css('background-color', '');
    });

    // Ejercicio 16: Evento dblclick
    $('#elementoId').on('dblclick', function() {
        $(this).css('color', 'purple');
    });

    // Ejercicio 17: Evento focus
    $('#campoTexto').on('focus', function() {
        $(this).css('border', '2px solid green');
    });

    // Ejercicio 18: Evento blur
    $('#campoTexto').on('blur', function() {
        $(this).css('border', '');
    });

    // Ejercicio 20: Métodos show y hide
    $('#boton').on('click', function() {
        $('#elementoId').toggle();
    });

    // Ejercicio 21: Métodos fadeIn y fadeOut
    $('#boton').on('dblclick', function() {
        $('#mensaje').fadeToggle();
    });

    // Ejercicio 22: Método fadeTo
    $('#boton').on('mouseover', function() {
        $('#mensaje').fadeTo('slow', 0.5);
    }).on('mouseout', function() {
        $('#mensaje').fadeTo('slow', 1);
    });

    // Ejercicio 24: Iteración con each
    $('p').each(function(index) {
        $(this).text(`Párrafo ${index + 1}`);
    });

    // Ejercicio 25: AJAX con método load
    $('#mensaje').load('archivo_externo.html');
});
