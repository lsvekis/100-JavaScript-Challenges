const worker=new Worker('worker.js');worker.postMessage('Start');
worker.onmessage=e=>console.log('Worker says:',e.data);