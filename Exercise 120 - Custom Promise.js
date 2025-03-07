function customPromise(){return new Promise(r=>setTimeout(()=>r('Done!'),1000));}
customPromise().then(console.log);