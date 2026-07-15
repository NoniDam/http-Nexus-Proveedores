document.querySelectorAll(".stars").forEach(starsBox => {

    const stars = starsBox.querySelectorAll(".star");
    const text = starsBox.parentElement.querySelector(".rating-text");

    stars.forEach((star, index) => {

        star.addEventListener("click", () => {

            // Limpiar estrellas
            stars.forEach(s => s.classList.remove("active"));

            // Pintar estrellas
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add("active");
            }

            const rating = index + 1;

            // Actualizar texto
            text.textContent = `Calificación: ${rating}/5 ⭐`;

        });

    });

});