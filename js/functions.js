"use strict";

// our services 
// generate Achievments
function generateourServices( data ) {
    let HTML = '',
        countValid = 0;

    for ( let i=0; i<data.length; i++ ) {
        if ( countValid >= 4 ) {
            break;
        }
        if ( !data[i].icon ||
             !data[i].title ||
             !data[i].text) {
            continue;
        }

        if ( data[i].value ) {
            HTML += `<div class="block-list">
                        <i class="fa fa-${data[i].icon}"></i>
                        <h3>${data[i].title}</h3>
                        <p>${data[i].text}</p>
                    </div>`;
        }
        if ( data[i].description ) {
            HTML += `<div class="block-list">
                        <i class="fa fa-${data[i].icon}"></i>
                        <h3>${data[i].title}</h3>
                        <p>${data[i].description}</p>
                    </div>`;
        }
        countValid++;
    }

    return HTML;
}

// footer 

function generateFooterIcons( data ) {

    let HTML = '';

    if ( !Array.isArray(data) ) {
        console.error('Wrong data type. Has to be an array.');
        return HTML;

    }
    if ( data.length === 0 ) {
        console.error('Wrong data size. Non-empty array needed.');
        return HTML;
    }

    for ( let i=0; i<data.length; i++ ) {
        if ( typeof( data[i].icon ) !== 'string' ||
             typeof( data[i].link ) !== 'string' ||
             data[i].icon === '' ||
             data[i].link.length === 0 ) {
            continue;
        }

        HTML += `<a href="${data[i].link}">
                    <i class="fa fa-${data[i].icon}"></i>
                </a>`;
    }

    return HTML;
}

function generateheroIcons( data ) {

    let HTML = '';

    if ( !Array.isArray(data) ) {
        console.error('Wrong data type. Has to be an array.');
        return HTML;

    }
    if ( data.length === 0 ) {
        console.error('Wrong data size. Non-empty array needed.');
        return HTML;
    }

    for ( let i=0; i<data.length; i++ ) {
        if ( typeof( data[i].icon ) !== 'string' ||
             typeof( data[i].link ) !== 'string' ||
             data[i].icon === '' ||
             data[i].link.length === 0 ) {
            continue;
        }

        HTML += `<a href="${data[i].link}">
                    <i class="fa fa-${data[i].icon}"></i>
                </a>`;
    }

    return HTML;
}