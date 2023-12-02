const allProducts = fetch('https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/techTrove.json').then(res => res.json()).then(data => console.log(data))
