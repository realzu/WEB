const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = 'clicked';
    /* toggle의 역할
        if (h1.classList.contains(clickedClass)){
            h1.classList.remove(clickedClass);
        } else {
            h1.classList.add(clickedClass);
        }
     */
    h1.classList.toggle('clicked'); //없으면 만들고 있으면 없앰
}

h1.addEventListener('click', handleTitleClick);
