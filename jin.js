document.addEventListener('DOMContentLoaded', function() {
    const songLyrics = [
        '<span style="color: white;">"Recojo pedazos de luz de luna, uno, dos, tres, los junto."</span>',
        '<span style="color: white;">"Me acercaré a ti cuando la brillante luz de la luna toque tu ventana, llenará tu corazón por completo."</span>',
        '<span style="color: white;">"Oh luz de luna, espero que entiendas mi corazón. Cuando te veo, una sonrisa se dibuja en mi rostro."</span>',
        '<span style="color: white;">"Brillas más que las estrellas, quiero acercarme en el sueño que has dibujado."</span>',
        '<span style="color: white;">"Quiero vivir eternamente en mi estrella, mi universo..."</span>',
        '<span style="color: white;">"...eres todo para mí. Las noches sin ti no existen, te convertirás en mi cobija."</span>',
        '<span style="color: white;">"Quiero pasar todas mis noches contigo, hasta la luna."</span>'
    ];

    let currentLyricIndex = 0;

    function showNextLyric() {
        Swal.fire({
            title: '<span style="font-size: 2em; color: white;">MOON</span>',
            html: songLyrics[currentLyricIndex],
            background: 'linear-gradient(to right, #FF69B4, #8A2BE2)',
            iconHtml: '<i class="fas fa-moon" style="color: #8A2BE2;"></i>',
            confirmButtonColor: '#FF69B4',
            confirmButtonText: 'Borahae',
            customClass: {
                popup: 'animated bounceIn',
                content: 'text-white', // Letra blanca para resaltar
                confirmButton: 'borahae-button' // Estilo personalizado para el botón "Borahae"
            },
            footer: '<a href="https://example.com" style="color: white;">Escucha la canción</a>',
            showClass: {
                popup: 'animated bounceIn',
                backdrop: 'swal-backdrop-show'
            },
            hideClass: {
                popup: 'animated fadeOut',
                backdrop: 'swal-backdrop-hide'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                currentLyricIndex++;
                if (currentLyricIndex < songLyrics.length) {
                    showNextLyric();
                } else {
                    Swal.fire({
                        title: '<span style="color: white;">¡Canción concluida!</span>',

                        iconHtml: '<i class="fas fa-heart" style="color: white;"></i>',
                        confirmButtonColor: '#FF69B4',
                        background: '#FF69B4',
                        customClass: {
                            content: 'text-white', // Letra blanca para resaltar
                            confirmButton: 'ok-button' // Estilo personalizado para el botón "OK"
                        }
                    });
                }
            }
        });
    }

    document.getElementById('btn').addEventListener('click', showNextLyric);
});