const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.navlinks');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');if(toggle)toggle.textContent='☰'}));document.getElementById('year').textContent=new Date().getFullYear();

// Static Cloudflare Pages fallback: compose a request in the visitor's email app.
// No request is stored or sent until the visitor sends the email.
document.getElementById('quote-form')?.addEventListener('submit',function(event){
 event.preventDefault();
 if(!this.reportValidity())return;
 const data=new FormData(this);
 const lines=['Kreilich Digital project inquiry','','Name: '+data.get('name'),'Email: '+data.get('email'),'Service: '+data.get('service'),'Budget: '+(data.get('budget')||'Not specified'),'','Project details:',data.get('details')];
 const subject=encodeURIComponent('Project request — '+data.get('service'));
 const body=encodeURIComponent(lines.join('\n'));
 window.location.href='mailto:kreilichdigital@gmail.com?subject='+subject+'&body='+body;
});
