document.querySelectorAll(".rating-box").forEach(box => {

    const stars = box.querySelectorAll(".star");
    const text = box.querySelector(".rating-text");

    stars.forEach((star, index) => {

        star.addEventListener("click", () => {

            stars.forEach(s => {
                s.classList.remove("active");
            });

            for(let i = 0; i <= index; i++){
                stars[i].classList.add("active");
            }

            text.textContent =
            `Calificación: ${index + 1}/5 ⭐`;

        });

    });

});