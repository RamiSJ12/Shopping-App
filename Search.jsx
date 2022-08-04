fetch('https://dummyjson.com/products/search?q=phone')
.then(res => res.json())
.then(console.log);