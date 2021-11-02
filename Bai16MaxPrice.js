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

function maxPrice1() {
    var size = listProduct.length;
    for (var i = 0; i < size; i++) {
        for (var x = i+1; x < size; x++) {
            if (listProduct[i].price > listProduct[x].price) {
                var tmp = listProduct[i];
                listProduct[i] = listProduct [x];
                listProduct[x] = tmp;
            }
        }
    }
    var maxPrice = listProduct[listProduct.length-1];
    // console.log(maxPrice);
}
maxPrice1()

function maxPrice2() {
    var maxPriceProduct = listProduct[0]
    for(var i= 1; i<listProduct.length; i++) {
        if (listProduct[i].price> maxPriceProduct.price) {
            maxPriceProduct = listProduct[i]
        }
    }
    // console.log(maxPriceProduct);
}
maxPrice2()