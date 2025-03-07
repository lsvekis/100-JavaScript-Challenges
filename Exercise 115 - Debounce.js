function debounce(fn,d){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),d);}};
window.addEventListener('resize',debounce(()=>console.log('Resized'),300));