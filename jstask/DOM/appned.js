//create and appendchild//
function createList() {
            let list = document.createElement("ul");
            
            let listItem1 = document.createElement("li");
            let listItem2 = document.createElement("li");
            let listItem3 = document.createElement("li");
            
            listItem1.innerHTML = "this is some text";
            listItem2.innerText = "item 2";
            listItem3.innerText = "item 3";
            
            listItem1.style.color = "red";
            
            
            list.appendChild(listItem1);
            list.appendChild(listItem2);
            list.appendChild(listItem3);
            
            return list;
        }

        
        for (let i = 0; i < 4; i++) {
            
            const newList = createList();
            document.getElementById("target").appendChild(newList);
        }

        // grocery list using array//
         let groceryList = [
        "Apple",
        "Banana",
        "Milk",
        "Bread",
        "Cheese",
        "tea",
        "coffee",
        "peanut butter",
        "dry fruits",
        "sugar"
    ];
      
       
        function createlist(items) {
           
            const ulElement = document.createElement("ul");

            items.forEach(item => {
                
                const liElement = document.createElement("li");
                liElement.innerText =item;
                
               
                ulElement.appendChild(liElement);
            });
          return ulElement;
           
        }
        let newgrocerylist = createlist(groceryList);
        document.getElementById("target2").appendChild(newgrocerylist);
       
         
