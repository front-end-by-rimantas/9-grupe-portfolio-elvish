"use strict";

// our services 

function generate( target, data ){
    let HTML = '',
        html_template = document.querySelector(`${target}`).innerHTML,
        template = '';
    const keywords = Object.keys( data[0] );

    data.forEach( item => {
        template = html_template;
        
        keywords.forEach( keyword => {
            template = template.replace('{{'+keyword+'}}', item[keyword] );
        });
        
        HTML += template;
    });

    return document.querySelector(target).innerHTML = HTML;
}

generate('.block_list', ourServices);

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

function generateHeroIcons( data ) {

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


// education and experience

function generateEducation( data ) {
    var HTML = '';

    data.forEach( (education) => {
        HTML += `<div class="edu">
                        <div class="period">${education.period}</div>
                        <div class="about">
                            <h4>${education.position}</h4>
                            <span>${education.description}</span>
                        </div>
                </div>`;
    });
        return HTML;
}