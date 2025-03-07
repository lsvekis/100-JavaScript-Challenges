const targetNode = document.getElementById('observe');
const config = { attributes: true, childList: true, subtree: true };
const callback = mutations => mutations.forEach(mutation => console.log(mutation));
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);