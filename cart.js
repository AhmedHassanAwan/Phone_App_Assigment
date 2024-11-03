const localstorage = localStorage.getItem("cart")
const data= JSON.parse(localstorage);
console.log(data);


const div = document.querySelector("#container1");

data.map((item,index)=>{
 div.innerHTML += `
   <div class="card1">
      <div class="card-image1">
      <img src="${item.image}" />
      </div>
      <div class="content1">
      <h3>Name:${item.model}</h3>
      <h3>Brand:${item.brand}</h3>
     <h3>Storage: ${item.ram} / ${item.rom}</h3>
      <h3>Price:$${item.price}</h3>
      <div id="disply" style="display: flex; align-items: center;">
  <button class="plus-minus-btn" onclick="plus(${index})">+</button>
  <h2 id="num${index}" style="margin: 0 10px;">1</h2>
  <button class="plus-minus-btn" onclick="minus(${index})">-</button>
</div><br>
<button class="btn-delete" onclick="delete1(${index})">Delete</button>

<button class="btn-buy-now" onclick="buynow()">Buy Now</button>

      </div>
      </div>
      ;
`
})

// quantity 

function plus(index){
    const plus = document.querySelector(`#num${index}`);
    plus.innerHTML++;
};
function minus(index){
    const minus = document.querySelector(`#num${index}`);
     if(minus.innerHTML > 1){
        minus.innerHTML--;
     }
};

// delete dtn

function delete1(index){
  data.splice(index,1)
//   localstorage.setitem("cart",JSON.stringify(data));
  div.innerHTML ="";
  data.map((item,index)=>{
    div.innerHTML += `
      <div class="card1">
         <div class="card-image1">
         <img src="${item.image}" />
         </div>
         <div class="content1">
         <h3>Name:${item.model}</h3>
         <h3>Brand:${item.brand}</h3>
        <h3>Storage: ${item.ram} / ${item.rom}</h3>
         <h3 id="price${index}">Price:$${item.price}</h3>
         <div id="disply" style="display: flex; align-items: center;">
     <button class="plus-minus-btn" onclick="plus(${index})">+</button>
     <h2 id="num${index}" style="margin: 0 10px;">1</h2>
     <button class="plus-minus-btn" onclick="minus(${index})">-</button>
   </div><br>
   <button class="btn-delete" onclick="delete1(${index})">Delete</button>
   
   <button class="btn-buy-now">Buy Now</button>
   
         </div>
         </div>
         ;
   `
   })
   

};



// Buy now function with SweetAlert
function buynow() {
  Swal.fire({
    title: "Are you sure?",
    text: "Once you add, your order will be submitted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirm"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Order",
        text: "Your order has been submitted successfully!",
        icon: "success"
      });
    }
  });
  }
// update price
function plus(index){
    const price = document.querySelector(`#price${index}`);
    const plus = document.querySelector(`#num${index}`);
    plus.innerHTML++;
    price.innerHTML = `price: ${data[index].price * plus.innerHTML}`
}
function minus(index){
  const price = document.querySelector(`#price${index}`);
  const minus = document.querySelector(`#num${index}`);
  if(minus.innerHTML > 1){
    minus.innerHTML--;
 }
  price.innerHTML = `price: ${data[index].price * minus.innerHTML}`
}



