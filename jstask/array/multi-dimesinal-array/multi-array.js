let product = [
    {
        category: "electronics",
        subcategories: [
            {
            name: "smartphones",
            product: [
                {id: "sp01", brand:" samsung", model:"galaxy 523",price: 799,instock:true},
                 {id: "sp02", brand:" apple", model:"iphone 15",price: 999,instock:true},
                  {id: "sp01", brand:" goggle", model:"pixel 8",price: 699,instock:false},

            ]
        },
        {
            name: "laptops",
            product:[
                {id: "lt01", brand:" hp", model:"xps 15",price: 1499,instock:true},
                {id: "lt02", brand:" apple", model:"macbook air",price: 1199,instock:true},
            ]
        }
        ]
    },
    {
        category: "apparel",
        subcategories: [
            {
                name: "menswear",
                product: [
                    {id: "mw01", type:"shirt", size:["m","l","xl"], price: 45, instock:true},
                     {id: "mw02", type:"jeans", size:["30","32", "34"], price: 70, instock:true},

                ]
            },
            {
                name: "womenswaer",
                product:[
                    {id: "ww01", type:"dress", size:["s", "m"], price: 80, instock:false},
                ]
            }
        ]
    }
];

let  iphone15 = product[0].subcategories[0].product[1];
console.log("iphone 15 details:", iphone15);
//iterating categories, subcategories and product//
for(let category of product){
    console.log(`category: ${category.category}`);
    for(let subcategory of category.subcategories){
        console.log(`subcategory: ${subcategory.name}`);
        for(let product of subcategory.product){
            console.log(`${product.brand ? product.brand + " " : " "} ${product.model ||product.type} (price: $${product.price}, instock: ${product.instock ? "yes" : "no"})`);
        }
    }
}

