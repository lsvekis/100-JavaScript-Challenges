fetch('https://api.example.com/data')
.then(res => { if (!res.ok) throw new Error('Network response error'); return res.json(); })
.then(data => console.log(data))
.catch(err => console.error('Fetch error:', err));