document.querySelectorAll(".stars").forEach(starsBox => {

    const stars = starsBox.querySelectorAll(".star");

    // Busca el texto que está justo después de este grupo de estrellas
    const text = starsBox.nextElementSibling;

    stars.forEach((star, index) => {

        star.addEventListener("click", () => {

            stars.forEach(s => s.classList.remove("active"));

            for(let i = 0; i <= index; i++){
                stars[i].classList.add("active");
            }

            text.textContent = `Calificación: ${index + 1}/5 ⭐`;

        });

    });

});