const WA_NUMBER='6285691511549';const WA_TEXT='Halo, saya tertarik bikin website untuk bisnis saya. Boleh konsultasi?';function waLink(p,t){return `https://wa.me/${p}?text=${encodeURIComponent(t)}`}const menuBtn=document.getElementById('menuBtn');const menu=document.getElementById('menu');menuBtn.addEventListener('click',()=>{menu.style.display=menu.style.display==='flex'?'none':'flex'}) ;document.querySelectorAll('#ctaWA1,#ctaWA2,#ctaWA3,#ctaWA4,#ctaWA5').forEach(el=>{el.setAttribute('href',waLink(WA_NUMBER,WA_TEXT));el.setAttribute('target','_blank')});document.getElementById('year').textContent=new Date().getFullYear();document.getElementById('waNumber').textContent=WA_NUMBER;

function chatWhatsApp(paket) {
  const nomorWA = '6285691511549'; 
  const pesan = encodeURIComponent(`Halo, saya tertarik dengan paket website *${paket}* yang Anda tawarkan. Mohon info lebih lanjut ya.`);
  const url = `https://wa.me/${nomorWA}?text=${pesan}`;
  window.open(url, '_blank');
}
