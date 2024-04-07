// Dynamic Table of Contents
const links = [{
        label: 'Convert CSS to SCSS',
        url: 'week03'
    },
    {
        label: 'CSS Zen Garden Style Guide',
        url: '../zen-style/'
    },
    {
        label: 'Wes Bos CSS Grid Gallery',
        url: 'week05/20_gallery/image-gallery-WORKING.html'
    },
    {
        label: 'Wes Bos CSS Grid Recreating Codepen',
        url: 'week05/22_recreating-codepen/codepen-WORKING.html'
    },
    {
        label: 'Wes Bos CSS Grid Responsive Website',
        url: 'week05/24_responsive/responsive-WORKING.html'
    },
    {
        label: "It's a Trap! (CSS Animation)",
        url: 'https://codepen.io/hol16046/pen/zYbeNqG'
    },
    {
        label: 'CSS Battle 4_22 Cloud',
        url: 'images/battle-4_22_cloud.png'
    },
    {
        label: 'CSS Battle 9_46 Cloud',
        url: 'images/battle-9_46_mountains.png'
    },
    {
        label: 'CSS Battle 16_95 Cloud',
        url: 'images/battle-16_95_pokeball.png'
    },
    {
        label: 'Playing Card (SVG)',
        url: 'https://codepen.io/hol16046/pen/mdgBjqr'
    },
    {
        label: 'CSS Zen Garden',
        url: '../zen-garden/index.html'
    }
];

links.forEach(tableOfContents);

function tableOfContents(link) {
    document.getElementById('toc').innerHTML += "<li>" + "<a href='" + link.url + "'>" + link.label + "</li>";
}

// Get current year for copyright information.
let d = new Date()
var year = d.getFullYear();
document.getElementById("copyrightdate").textContent = year;

// Get last modified date of current document.

var lastmod = document.lastModified;
document.getElementById("modifieddate").textContent = lastmod;

// // Page Visit Count (LocalStorage)
// if (localStorage) {
//     let visits = localStorage.getItem('visits');
//     if (visits == null) {
//         visits = 1;
//     }
//     if (visits == 1) {
//         document.getElementById('visitCount').innerHTML = "This is your first visit to this page.";
//     } else {
//         document.getElementById('visitCount').innerHTML = `You have visited this page ${visits} times.`;
//     }
//     localStorage.setItem('visits', Number(visits) + 1);
// }