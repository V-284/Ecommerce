fetch("https://dummyjson.com/products")
// .then(res => console.log(result)) 
.then(response => response.json())
.then(res => {
    const data = res.products;
    let rows = "";
    data.forEach(product => {
        rows += `<tr>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                    <td>${product.rating}</td>
                    <td>${product.stock}</td>
                    <td>${product.brand}</td>
                    <td>${product.category}</td>
                    <td><img src="${product.thumbnail}" alt="${product.title}"style="width:20%"/></td>
                 </tr>`;
    });
    document.getElementById('tableRows').innerHTML = rows;
})
.catch(error => console.log(error));

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
