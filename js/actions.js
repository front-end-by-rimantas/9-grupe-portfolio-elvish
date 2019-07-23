"use strict";
// generuojamos iconos 

document.querySelector('#footer .social_icons').innerHTML = generateFooterIcons( footerIcons );

document.querySelector('#HERO .hero_social_icons').innerHTML = generateheroIcons( heroIcons );

// our services 

// achievments section
document.querySelector('#our_services .blocks-list').innerHTML = generateourServices( ourServices );