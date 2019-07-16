"use strict";

// our services 

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