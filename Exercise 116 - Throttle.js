function throttle(fn,w){let l=0;return(...a)=>{let n=Date.now();if(n-l>w){l=n;fn(...a);}}};
window.addEventListener('scroll',throttle(()=>console.log('Scrolled'),1000));