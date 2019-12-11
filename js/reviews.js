
function popupReview() {
    const reviewList = document.querySelector(".reviews__list");

    reviewList.addEventListener ("click", function(event) {
        event.preventDefault();

        if (event.target.classList.contains ("reviews__btn")) {
            const title = event.target.parentNode.querySelector(".reviews__title").textContent;
            const text = event.target.parentNode.querySelector(".reviews__text").textContent;

            renderPopup(title, text);

        }
    })

    function renderPopup(title, text){
        const popup = document.querySelector(".popup");

        popup.classList.add("popup--active");
        popup.classList.add("popup--animation");

        popup.querySelector(".popup__title").textContent = title;
        popup.querySelector(".popup__text").textContent = text;

        popup.querySelector(".popup__close").addEventListener ("click", e=> {
            e.preventDefault();
            popup.classList.remove("popup--active");

        })
    }

}

popupReview();

