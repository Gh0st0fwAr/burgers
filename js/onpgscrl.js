const sections = $('.section');
const display = $('.maincontent');
const fixScrl = $('.fixscroll__item')
let inscroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const performTransition = sectionEq => {
    if (inscroll === false) {
        inscroll = true;
        const position = sectionEq * -100 + '%';

        sections
            .eq(sectionEq)
            .addClass("active")
            .siblings()
            .removeClass("active");

        fixScrl
            .eq(sectionEq)
            .addClass("fixscroll__item--active")
            .siblings()
            .removeClass("fixscroll__item--active");


        display.css({
            transform: "translateY(" + position + ")"
        });

        setTimeout(() => {
            inscroll = false;
        }, 500 + 300);
    }
}

const scrollViewport = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === 'next' && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (direction === 'prev' && prevSection.length) {
        performTransition(prevSection.index());
    }
}



$(document).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollViewport("next");
    }

    if (deltaY < 0) {
        scrollViewport("prev");
    }

})

$(document).on("keydown", e => {
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName === "input" || tagName === "textarea";

    if (userTypingInInputs === false) {
        switch (e.keyCode) {
            case 38:
                scrollViewport("prev");
                break;
            case 40:
                scrollViewport("next");
                break;
        }
    }


})

$("[data-scroll-to]").on("click", e => {
    e.preventDefault();

    const target = parseInt($(e.currentTarget).attr("data-scroll-to"));
    performTransition(target);
})

if (isMobile) {
    window.addEventListener("touchmove", e => {
        e.preventDefault();
    }, {
        passive: false
    });


    $("body").swipe({
        swipe: function (event, direction) {
            let scrollDirection;

            if (direction === "up") scrollDirection = "next";
            if (direction === "down") scrollDirection = "prev";

            scrollViewport(scrollDirection);
        }
    });
}