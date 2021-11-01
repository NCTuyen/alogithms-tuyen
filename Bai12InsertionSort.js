var listProduct = [
	{name : 'CPU', price: 750, quality: 10, categoryId: 1},	
	{name : 'RAM', price: 50, quality: 2, categoryId: 2},			
	{name : 'HDD', price: 70, quality: 1, categoryId: 2	},
    {name : 'Main', price: 400, quality: 3, categoryId: 1},	
    {name : 'Keyboard', price: 30, quality: 8, categoryId: 4},	
    {name : 'Mouse', price: 25, quality: 50, categoryId: 4},	
    {name : 'VGA', price: 60, quality: 35, categoryId: 3},	
    {name : 'Monitor', price: 120, quality: 28, categoryId: 2},	
    {name : 'Case', price: 120, quality: 28, categoryId: 5}	   			
];

function sortByName(listProduct) {
    const size = listProduct.length;
    for ( var i=1; i < size; i++) {
        let key = listProduct[i];
        let x = i-1;
        while (x >= 0 && key.name.length > listProduct[x].name.length) {
            listProduct[x+1] = listProduct[x];
            x--;
        }
        listProduct[x+1]=key;
    }
    return listProduct;
}
console.log (sortByName(listProduct))