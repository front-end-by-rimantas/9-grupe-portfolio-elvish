"use strict";
// generuojamos iconos 

document.querySelector('#footer .social_icons').innerHTML = generateFooterIcons( footerIcons );

document.querySelector('#HERO .hero_social_icons').innerHTML = generateHeroIcons( heroIcons );

// our services 

// Education and experience


document.getElementById('education_list').innerHTML = generateEducation( education );

// achievments section

document.querySelector('#our_services .row .block_list').innerHTML = generateOurServices( ourServices );

