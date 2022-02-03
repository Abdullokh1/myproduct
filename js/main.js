let eldark = document.getElementById('darkBtn');

let elmenu = document.getElementById('menuBtn');

let elSite = document.getElementById('siteNav');

let elclose = document.getElementById('closeBtn');

let elheadLogo = document.getElementById('headerLogo');

eldark.addEventListener('click', function(){
  document.body.classList.toggle('dark');
})

elmenu.addEventListener('click', function(e){
   elSite.classList.toggle('show');
   e.target.classList.toggle('show');
})