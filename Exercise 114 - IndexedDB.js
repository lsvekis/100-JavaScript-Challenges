let dbReq=indexedDB.open('testDB',1);
dbReq.onupgradeneeded=e=>e.target.result.createObjectStore('store',{keyPath:'id'});