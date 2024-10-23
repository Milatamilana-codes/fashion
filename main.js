function toggleMenu(){
    const icon = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.nav-links');
    icon.classList.toggle("open");
    menu.classList.toggle("open");
}


const scrollRevealOption ={
    origin:"bottom",
    distance:"50px",
    duration:1000,
};

scrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin:"right",
});
scrollReveal().reavel(".header_content h1" ,{
    ...scrollRevealOption,
    delay: "500",
});

scrollReveal().reveal(".header_content p",{
    ...scrollRevealOption,
    origin:"1000",
});
scrollReveal().reavel(".header_btns" ,{
    ...scrollRevealOption,
    delay: "1500",
});


const banner =document.querySelector(" .banner_container");

const bannerContaint = Array.from(banner.children);

bannerContent.forEach(item => {
    const duplicateNode =item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden" ,true);
    banner.appendChild(duplicateNode);
});

// NEW ARRIVAL
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild( items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend( items[items.length - 1])
})