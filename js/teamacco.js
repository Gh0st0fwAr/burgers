
function accordeonTeam() {
    const workers = document.querySelectorAll(".team-acco__item");
    const teamAcco = document.querySelector(".team-acco");


    teamAcco.addEventListener("click", function(event) {
        event.preventDefault();
        const target = event.target;
        console.log("Click");

        if(target.classList.contains("team-acco__trigger")) {
            const worker = target.parentNode;
            const content = target.nextElementSibling;
            const contentHeight = content.firstElementChild.clientHeight;

            for (const iterator of workers) {
                if (iterator !== worker) {
                    iterator.classList.remove("team-acco__item--active");
                    iterator.lastElementChild.style.height = 0;
                }
            };

            // for (const iterator of workers) {
            //     if (iterator != item) {
            //         iterator.classList.remove("menu-acco__item--active");
            //         menuAcco.style.transform = 'translateX(0)';
            //         iterator.lastElementChild.style.width = 0;
            //     }
            // }

            if (worker.classList.contains("team-acco__item--active")) {
                worker.classList.remove("team-acco__item--active");
                content.style.height = 0;

            } else {
                worker.classList.add("team-acco__item--active");
                content.style.height = contentHeight + "px";
            }

        }

    })
}

accordeonTeam();