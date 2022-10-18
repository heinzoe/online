const date = document.querySelector('.year')
date.innerHTML = new Date().getFullYear()


const navBtn = document.querySelector('.nav-bar')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navBtn.addEventListener('click', function (){
    linksContainerHeight = linksContainer.getBoundingClientRect().height;
    linksHeight = links.getBoundingClientRect().height;

    if (linksContainerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }else {
        linksContainer.style.height = 0
    }
})


const navBar = document.querySelector('nav')
const topLink = document.querySelector('.top-link')
const content = document.querySelector('.content')


window.addEventListener('scroll', function (){
    const scrollHeight = window.pageYOffset
    const navHeight = navBar.getBoundingClientRect().height;

    if (scrollHeight > navHeight){
        navBar.classList.add('fixed-nav')
    }else {
        navBar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 450){
        topLink.classList.add('show-links')
    }else {
        topLink.classList.remove('show-links')
    }

    if (scrollHeight > 300){
        content.classList.add('hide-content')
    }else{
        content.classList.remove('hide-content')
    }
})


const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault()

        const placeId = e.currentTarget.getAttribute('href').slice(1)
        const collectPlaceId = document.getElementById(placeId)

        const navHeight = navBar.getBoundingClientRect().height;
        const linkContainerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = document.querySelector('fixed-nav')
        let position = collectPlaceId.offsetTop

        if (!fixedNav){
            position = position-navHeight
        }
        
        if (navHeight > 90){
            position = position + linkContainerHeight
        }

        window.scrollTo({
            top:position,
            left:0
        });
        linksContainer.style.height = 0
    })
})


// var counter = 1

// setInterval(function(){
//     document.getElementById('radio' + counter).checked = true;
//     counter++;

//     if (counter > 4){
//         counter = 1;
//     }
// });
