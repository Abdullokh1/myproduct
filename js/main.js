let eldark = document.getElementById('darkBtn');

let elmenu = document.getElementById('menuBtn');

let elSite = document.getElementById('siteNav');

let elclose = document.getElementById('closeBtn');

let elheadLogo = document.getElementById('headerLogo');

let elopenanswer = document.getElementById('faqBtn');

let elshow = document.getElementById('showAnswer');

let elopenanswertwo = document.getElementById('faqBtn-2');

let elshowtwo = document.getElementById('showAnswer-2');

let elopenanswerthree = document.getElementById('faqBtn-3');

let elshowthree = document.getElementById('showAnswer-3');

let elopenanswerfour = document.getElementById('faqBtn-4');

let elshowfour = document.getElementById('showAnswer-4');

elopenanswerfour.addEventListener('click', function(){
  elshowfour.classList.toggle('answer');
})

elopenanswerfour.addEventListener('click', function(){
  elopenanswerfour.classList.toggle('change-img');
})


elopenanswerthree.addEventListener('click', function(){
  elshowthree.classList.toggle('answer');
})

elopenanswerthree.addEventListener('click', function(){
  elopenanswerthree.classList.toggle('change-img');
})


elopenanswertwo.addEventListener('click', function(){
  elshowtwo.classList.toggle('answer');
})

elopenanswertwo.addEventListener('click', function(){
  elopenanswertwo.classList.toggle('change-img');
})


elopenanswer.addEventListener('click', function(){
  elshow.classList.toggle('answer');
})

elopenanswer.addEventListener('click', function(){
  elopenanswer.classList.toggle('change-img');
})

eldark.addEventListener('click', function(){
  document.body.classList.toggle('dark');
})

elmenu.addEventListener('click', function(e){
   elSite.classList.toggle('show');
   e.target.classList.toggle('show');
})