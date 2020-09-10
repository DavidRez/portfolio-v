//data for gallery
const loc = 'http://david-ramirez.com';

//setting up current portfolio category
var currentCategory = window.location.pathname.substr(1);

if (currentCategory[currentCategory.length-1] === '/') {
  currentCategory = currentCategory.substr(0, currentCategory.length-1);
}

if (currentCategory === '') {
  currentCategory = 'all';
}

//data for each piece in gallery
module.exports = {
  gallery : [
    {title:'GITHUB REPO FETCHER', datatype:'web', type:'Full Stack Web App', mainImage:`${loc}/img/web/githubrepo.jpg`, url:'github-repo-fetcher'},
    {title:'RAINFOREST', datatype:'web',type:'Full Stack Web App', mainImage:`${loc}/img/web/rainforest.jpg`, url:'rainforest'},
    {title:'TRAILBLAZER', datatype:'web',type:'Back-end Web App', mainImage:`${loc}/img/web/trailblazer.jpg`, url:'trailblazer'},
    {title:'CORA', datatype:'web',type:'Website Redesign', mainImage:`${loc}/img/web/cora_after.jpg`, url:'cora'},
    {title:'ALEKS DESIGN', datatype:'web',type:'Website Coding',mainImage:`${loc}/img/web/aleks.jpg`, url:'aleks-design'},
    {title:'1838 OGDEN', datatype:'web',type:'Website Coding', mainImage:`${loc}/img/web/ogden.jpg`, url:'ogden'},
    {title:'ROOMSERVICE SF', datatype:'web',type:'Web Design', mainImage:`${loc}/img/web/roomservice.jpg`, url:'roomservice'},
    {title:'COLE HARDWARE', datatype:'web',type:'Website Graphics', mainImage:`${loc}/img/web/coleweb.jpg`, url:'cole-hardware'},
    {title:'PORTFOLIO IV', datatype:'web',type:'Website Design/Coding', mainImage:`${loc}/img/web/portfolio4.jpg`, url:'portfolio-iv'},
    {title:'PORTFOLIO III', datatype:'web',type:'Website Design/Coding', mainImage:`${loc}/img/web/portfolio3.jpg`, url:'portfolio-iii'},
    {title:'PORTFOLIO II', datatype:'web',type:'Website Design/Coding', mainImage:`${loc}/img/web/portfolio2.jpg`, url:'portfolio-ii'},
    {title:'PORTFOLIO I', datatype:'web',type:'Website Design/Coding', mainImage:`${loc}/img/web/portfolio1.jpg`, url:'portfolio-i'},
    {title:'IQ', datatype:'photo',type:'Sourcing/Editing/Typography', mainImage:`${loc}/img/photo/iq_thumb.jpg`, url:'iq'},
    {title:'PIERCINGS', datatype:'photo',type:'Sourcing/Editing/Typography', mainImage:`${loc}/img/photo/piercings_thumb.gif`, url:'piercings'},
    {title:'COFFEE SCRUB', datatype:'photo',type:'Sourcing/Editing/Typography', mainImage:`${loc}/img/photo/coffee_thumb.jpg`, url:'coffee-scrub'},
    {title:'REAL ESTATE', datatype:'photo',type:'Photography/Editing', mainImage:`${loc}/img/photo/re_1.jpg`, url:'realestate'},
    {title:'WHITNEY HOUSTON ARTICLE', datatype:'photo',type:'Sourcing/Editing', mainImage:`${loc}/img/photo/whitney.jpg`, url:'whitney'},
    {title:'TANGLE TOYS', datatype: 'photo',type:'Product Photography', mainImage:`${loc}/img/photo/tangle1.jpg`, url:'tangle'},
    {title:'PLEASANTVILLE', datatype:'photo',type:'Photography', mainImage:`${loc}/img/photo/houses_after.jpg`, url:'pleasantville'},
    {title:'SELF PORTRAIT', datatype:'photo',type:'Photography', mainImage:`${loc}/img/photo/shoes.jpg`, url:'self-portrait'},
    {title:'PORTRAIT', datatype:'photo',type:'Photography', mainImage:`${loc}/img/photo/avery.jpg`, url:'portrait'},
    {title:'PORTRAIT', datatype:'photo',type:'Photography', mainImage:`${loc}/img/photo/snake.jpg`, url:'portrait'},
    {title:'PORTRAIT', datatype:'photo',type:'Photography', mainImage:`${loc}/img/photo/bald.jpg`, url:'portrait'},
    {title:'REUNION', datatype:'illustration',type:'Illustration', mainImage:`${loc}/img/illustration/reunion.jpg`, url:'bigfoot'},
    {title:'BIGFOOT MEETS POOH', datatype:'illustration',type:'Illustration', mainImage:`${loc}/img/illustration/bigfoot.jpg`, url:'bigfoot'},
    {title:'I LOVE CAKE', datatype:'illustration',type:'Illustration', mainImage:`${loc}/img/illustration/cake.jpg`, url:'cake'},
    {title:'SAFE SEX CAMPAIGN', datatype:'other',type:'Illustration/Logo', mainImage:`${loc}/img/illustration/jimmy.jpg`, url:'safe-sex-campaign'},
    {title:'SAFE SEX CAMPAIGN', datatype:'other',type:'Magazine Ad', mainImage:`${loc}/img/other/mag1.jpg`, url:'safe-sex-campaign'},
    {title:'LGBTQIQ GROUP MEETING', datatype:'other',type:'Flyer', mainImage:`${loc}/img/other/lgbt.jpg`, url:'lgbtqiq'},
    {title:'BE MERRY', datatype:'other',type:'Invitation Card', mainImage:`${loc}/img/other/bemerry_thumb.jpg`, url:'be-merry'},
    {title:'RICKSHAW BAGWORKS', datatype:'other',type:'Banner', mainImage:`${loc}/img/other/rickshaw_thumb.jpg`, url:'rickshaw'},
    {title:'MUSEUM OF TOLERANCE', datatype:'other',type:'Business System', mainImage:`${loc}/img/other/biz.jpg`, url:'mot'},
    {title:'MUSEUM OF TOLERANCE', datatype:'other',type:'Poster', mainImage:`${loc}/img/other/poster.jpg`, url:'mot'},
    {title:'ACADEMY OF DRIVING', datatype:'other',type:'Logo', mainImage:`${loc}/img/other/aod_thumb.jpg`, url:'aod'}
],

//data for each project
projects : {
    'github-repo-fetcher': {title:'GITHUB REPO FETCHER', type:'Web App', images:[`${loc}/img/web/githubrepo.jpg`], demo:`https://dr-github-repo-fetcher.herokuapp.com`, tech:'React - Node.js - Express - MongoDB', description:'This is an application that pulls and displays the top 25 repos of any GitHub user entered in the search box. I built a clean interface with React that dynamically renders data from the GitHub API, and developed a RESTful API server that efficiently updates the MongoDB database by preventing duplicate records and filtering and returning the most popular forks.', link: 'https://github.com/DavidRez/GitHub-Repo-Fetcher'},
    'rainforest': {title:'RAINFOREST', type:'Web App', images:[`${loc}/img/web/rainforest.jpg`],  demo:`https://dr-rainforest-customer-reviews.herokuapp.com/`, tech:'React - Sass - Node.js - Express - Knex - PostGreSQL - Grunt', description:'This is an e-commerce product page I developed with three other engineers. I focused on the customer review component and conditionally rendered it and sorted the top 10 customer reviews based on ratings. We decided to switch to ElephantSQL since it is on the cloud and all we needed to access each other\'s database was a key. I implemented end-to-end and units tests using Jest/Enzyme, Mocha, and Chai. I then deployed a proxy server that combined all components on AWS Elastic Beanstalk using Docker.', link: 'https://github.com/DavidRez/Rainforest-Customer-Reviews'},
    'trailblazer': {title:'TRAILBLAZER', type:'Web App', images:[`${loc}/img/web/trailblazer.jpg`], tech:'React - Node.js - Express - Knex - MariaDB - Cassandra', description:'This was an existing e-commerce product page that I optimized to handle 10 million records on a SQL and NoSQL database. I deployed the service to AWS EC2 for scalability and stress tested it to handle 5000 API requests per second.', link: 'https://github.com/HRR34-SDC9/ProductComparisons'},
    'cora': {title:'CORA', type:'Website Redesign', images:[`${loc}/img/web/cora_after.jpg`,`${loc}/img/web/cora_before.jpg`], tech:'Adobe Photoshop', description:'CORA is an agency dedicated to helping those affected by intimate partner abuse. Their website had no heirarchy, no clear sections, and no distinct color scheme. It was a challenge because all information was important and crucial for victims. But by re-organizing the links and info and creating colorful, distinct sections, users were no longer overwhelmed with information. The first image is the redesigned look.'},
    'aleks-design': {title:'ALEKS DESIGN', type:'Website Coding', images:[`${loc}/img/web/aleks.jpg`], tech:'HTML - CSS', description:'This site was for a visual designer who knew HTML and CSS, but hated coding. So I happily helped them out.' },
    'ogden': {title:'1838 OGDEN', type:'Website Coding', images:[`${loc}/img/web/ogden.jpg`], tech:'HTML - CSS', description:'This site was for a local real estate company and new development. The columns were pretty unique and modern, so I wanted to bring that element and texture to the site.' },
    'roomservice': {title:'ROOMSERVICE SF', type:'Web Design', images:[`${loc}/img/web/roomservice.jpg`], tech:'Adobe Illustrator', description:'This site design was for a local interior designer and stager. His style was modern and elegant so I tried to reflect that with the simplicity and classic color scheme.'},
    'cole-hardware': {title:'COLE HARDWARE', type:'Website Graphics', images:[`${loc}/img/web/coleweb.jpg`], tech:'Adobe Photoshop', description:'This was a website redesign. The site was re-organized and simplied; the idea was to give users 7-8 sections max. And the idea for the design was to give it a realistic, hands-on look and bring elements from their postcards, newsletters, and stores.'},
    'portfolio-iv': {title:'PORTFOLIO IV', type:'Website Design/Coding', images:[`${loc}/img/web/portfolio4.jpg`], tech:'HTML - CSS - Javascript', description:'This was my previous portfolio. My intention was for it to look like a book. I also wanted to bring realistic textures, such as the book cover of the first image and the wood background.'},
    'portfolio-iii': {title:'PORTFOLIO III', type:'Website Design/Coding', images:[`${loc}/img/web/portfolio3.jpg`], tech:'Adobe Flash', description:'This was my third portfolio. The background image would be broken up into puzzle pieces that would light up and open up to the full image.'},
    'portfolio-ii': {title:'PORTFOLIO II', type:'Website Design/Coding', images:[`${loc}/img/web/portfolio2.jpg`], tech:'Adobe Flash', description:'This was my second portfolio. I wanted to tell a story with animation and interactivty. Each building would light up and display different information, while the sky and other elements moved in the background.'},
    'portfolio-i': {title:'PORTFOLIO I', type:'Website Design/Coding', images:[`${loc}/img/web/portfolio1.jpg`], tech:'Adobe Flash', description:'This was my first portfolio and a school project. The first slide is a shot of the animated intro; the various routes moved across the map to the beat of a song. The user could click on different stops on the map and move the train to each section.'},
    'whitney': {title:'WHITNEY HOUSTON ARTICLE', type:'Sourcing/Editing', images:[`${loc}/img/photo/whitney.jpg`], tech:'Adobe Photoshop & Illustrator', description:'For this graphic I sourced and edited the image. The idea was to keep it in line with company colors and look, and instead of having a plain background, I decided to play with the lines of the shadows and darker tones, and added a slight texture to the background.'},
    'iq': {title:'IQ', type:'Sourcing/Editing/Typography', images:[`${loc}/img/photo/iq_pinterest.jpg`], tech:'Adobe Photoshop & Illustrator', description:'This was a Pinterest image for an article. Rather than go with an obvious image of a person with their head in books or something \'smart\', I decided to pick a minimal and more abstract image.'},
    'piercings': {title:'PIERCINGS SERIES', type:'Sourcing/Editing/Typography', images:[`${loc}/img/photo/piercings_pinterest_1.jpg`,`${loc}/img/photo/piercings_pinterest_2.jpg`,`${loc}/img/photo/piercings_pinterest_3.jpg`], tech:'Adobe Photoshop & Illustrator', description:'These Pinterest images were for a series of articles covering different types of piercings. I chose images that showed real people in natural settings, and tied in colors from the images for the color blocks and typography.'},
    'coffee-scrub': {title:'COFFEE SCRUB', type:'Sourcing/Editing/Typography', images:[`${loc}/img/photo/coffee_pinterest.jpg`], tech:'Adobe Photoshop & Illustrator', description:'For this Pinterest image, I wanted to keep it minimal and have the typography stand out the most.'},
    'realestate': {title:'REAL ESTATE', type:'Photography/Editing', images:[`${loc}/img/photo/re_1.jpg`,`${loc}/img/photo/re_2.jpg`,`${loc}/img/photo/re_3.jpg`,`${loc}/img/photo/re_4.jpg`], tech:'DSLR - Adobe Photoshop', description:`I've shot numerous properties, indoor and outdoor. This particular rental unit is based in Noe Valley, San Francisco.`},
    'tangle': {title:'TANGLE TOYS', type:'Product Photography',  images:[`${loc}/img/photo/tangle1.jpg`,`${loc}/img/photo/tangle2.jpg`,`${loc}/img/photo/tangle3.jpg`], tech:'DSLR - Adobe Photoshop', description:'These images were part of a product photoshoot for a local toy company. I used a DSLR, shot them against a white background, and edited them in Photoshop.'},
    'pleasantville': {title:'PLEASANTVILLE', type:'Photography', images:[`${loc}/img/photo/houses_before.jpg`,`${loc}/img/photo/houses_after.jpg`], tech:'DSLR - Adobe Photoshop', description:'For this image, I edited a simple image of homes to look like the cookie cutter homes of the suburbs of the past.'},
    'self-portrait': {title:'SELF-PORTRAIT', type:'Photography', images:[`${loc}/img/photo/shoes.jpg`], tech:'SLR', description:'Only a shot of my shoes, but I really wanted to highlight the shapes and shadows I found in a playground.'},
    'portrait': {title:'PORTRAIT', type:'Photography', images:[`${loc}/img/photo/avery.jpg`,`${loc}/img/photo/snake.jpg`,`${loc}/img/photo/bald.jpg`], tech:'SLR', description:'This series of portaits were of a former roommate, who eventually got nicknamed Avery.'},
    'bigfoot': {title:'BIGFOOT SERIES', type:'Illustration', images:[`${loc}/img/illustration/reunion.jpg`,`${loc}/img/illustration/bigfoot.jpg`], tech:'Hand-drawn - Adobe Illustrator', description:'These series of illustrations focused on Bigfoot meeting other mythical monsters and known characters. The style was inspired by mid-century illustrations.'},
    'cake': {title:'I LOVE CAKE', type:'Illustration', images:[`${loc}/img/illustration/cake.jpg`], tech:'Adobe Illustrator', description:'As someone with a sweet tooth and love for cake, I wanted to illustrate cake, literally. I wanted a simple, but colorful style for the illustration.'},
    'safe-sex-campaign': {title:'SAFE SEX CAMPAIGN', type:'Illustration/Logo', images:[`${loc}/img/illustration/jimmy.jpg`,`${loc}/img/other/mag1.jpg`,`${loc}/img/other/mag2.jpg`,`${loc}/img/other/mag3.jpg`], tech:'Adobe Illustrator', description:'The idea behind this was to make a serious and important subject fun. The logo was inspired by colorful, Japanese cartoons. The magazine ads were intended to be as colorful and as engaging as the logo, yet simple and to-the-point.'},
    'lgbtqiq': {title:'LGBTQIQ GROUP MEETING', type:'Flyer', images:[`${loc}/img/other/lgbt.jpg`], tech:'Adobe Illustrator', description:'This flyer was for a local LGBTQIQ group. My intention was to provide information and instructions in a fun, colorful way.'},
    'be-merry': {title:'BE MERRY', type:'Invitation Card', images:[`${loc}/img/other/bemerry.jpg`], tech:'Adobe Illustrator', description:'My inspiration for this were mid-century illustrations. I wanted to keep it simple and add a bit of humor in the words.'},
    'mot': {title:'MUSEUM OF TOLERANCE', type:'Business System', images:[`${loc}/img/other/biz.jpg`,`${loc}/img/other/poster.jpg`], tech:'Adobe Illustrator & InDesign', description:'The idea behind the business system was to illustrate race and equality. It was minimal and more literal. The logo could be read as ying and yang or two faces. And I wanted the rest of the business system to be as bold as the logo. The poster was meant to be more abstract; the wired fence to symbolize the restrictions on civil rights and a group of people standing together subtlely against the clouds.'},
    'aod': {title:'ACADEMY OF DRIVING', type:'Logo', images:[`${loc}/img/other/aod.jpg`], tech:'Adobe Illustrator', description: 'This logo was for a driving school based in the Sacramento area.'},
    'rickshaw': {title:'RICKSHAW BAGWORKS', type:'Banner', images:[`${loc}/img/other/rickshaw.jpg`], tech:'Adobe Photoshop & Illustrator', description: 'This banner was for a San Francisco based bag company. They made their bags in-house and as a result, liked to go for a handmade look for their promotional material.'}
}
};