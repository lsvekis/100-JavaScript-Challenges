let jsonData = '[{"name":"Alice"},{"name":"Bob"}]';
let data = JSON.parse(jsonData);
data.forEach(item => console.log("User:", item.name));