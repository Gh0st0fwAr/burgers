
function accordeonMenu() {
    const menuItems = document.querySelectorAll(".menu-acco__item"); //li элементы
    const menuAcco = document.querySelector(".menu-acco"); //ul элемент


    menuAcco.addEventListener("click", event => {
        
        event.preventDefault();
        let target = event.target; // таргет - ссылка внутри дива
        let targetWrap = target.parentNode;
        let targetSecondWrap = targetWrap.parentNode;
        let content = targetSecondWrap.nextElementSibling; // получаем контент
        let targetThWrap = targetSecondWrap.parentNode;
        let item = targetThWrap; // обращение к li через контент

        

        const vertWidth = targetWrap.clientWidth; // ширина вертикали
        const windowWidth = document.documentElement.clientWidth; 
        const contentWidth = 520;
        const breakpointPhone = 480; // точка изменения поведения слайдера
        const closeMenuWidth = vertWidth * menuItems.length;
        const openMenuWidth = closeMenuWidth + contentWidth;

        
 

        if (target.classList.contains("menu-acco__link")) {
            moveMenu();
        }

        target = event.target;
        targetWrap = target.parentNode;
        content = targetWrap.nextElementSibling;
        item = targetWrap.parentNode;

        if (target.classList.contains("menu-acco__title")) {
            moveMenu()
        }

        function moveMenu() {

            for (const iterator of menuItems) {
                if (iterator != item) {
                    iterator.classList.remove("menu-acco__item--active");
                    menuAcco.style.transform = 'translateX(0)';
                    iterator.lastElementChild.style.width = 0;
                }
            }

            if (item.classList.contains("menu-acco__item--active")) {
                item.classList.remove("menu-acco__item--active");
                content.style.width = 0;
            } else {
                
                item.classList.add("menu-acco__item--active");
            
                if (windowWidth > breakpointPhone && windowWidth < openMenuWidth) {
                content.style.width = windowWidth - closeMenuWidth + "px";

                } else if (windowWidth <= breakpointPhone) {
                   

                    for (let i = 0; i < menuItems.length; i++) {
                        if (menuItems[i] === item) {
                            num = menuItems.length - (i + 1);
                        }
                    }
                
                    let shift = vertWidth * num;
                    menuAcco.style.transform = 'translateX(' + shift + 'px' + ')' ;
                    content.style.width = windowWidth - vertWidth + "px";
                    
                } else {
                    content.style.width = 520 + "px";
                }

            }
        }

    })
   
}



accordeonMenu();
