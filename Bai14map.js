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

var listCategory = [	
    {id: 1, name : 'Comuter'},
    {id: 2, name : 'Memory'},
    {id: 3, name : 'Card'},
    {id: 4, name : 'Acsesory'},
]

// function mapProductByCategory() {
//     listProduct.map((e)=> {
//         let temp = listCategory.find(el => el.id === e.categoryId)
//         if (temp.name) {
//             e.categoryName =  temp.name;
//         }
//     })
//     console.log(listProduct);
// }
// mapProductByCategory();

function mapProductByCategory() {
    for(var i = 0; i<listProduct.length; i++){
        for(var x= 0; x<listCategory.length;x++){
            if(listCategory[x].id === listProduct[i].categoryId) {
                listProduct[i].categoryName = listCategory[x].name;
            }
        }
    }
    // console.log(listProduct);
}
mapProductByCategory()
