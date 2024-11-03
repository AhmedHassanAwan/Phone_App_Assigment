const mobilePhones = [
    {
      "id": 1,
      "brand": "Apple",
      "model": "iPhone 14",
      "ram": "6GB",
      "rom": "128GB",
      "price": 799,
      image : "https://airkart.com/cdn/shop/products/Red-12_800x.png?v=1623992838"
    //   image : "https://istore.mu/cdn/shop/products/IPHONE14RED.png?v=1680722105&width=800"
    },
    {
      "id": 2,
      "brand": "Samsung",
      "model": "Galaxy S22",
      "ram": "8GB",
      "rom": "256GB",
      "price": 899,
      image : "https://images.samsung.com/is/image/samsung/p6pim/pk/2202/gallery/pk-galaxy-s22-ultra-s908-413093-413093-sm-s908ezkgpkd-531032926?$650_519_PNG$"
    },
    {
      "id": 3,
      "brand": "Google",
      "model": "Pixel 7",
      "ram": "8GB",
      "rom": "128GB",
      "price": 699,
      image : "https://target.scene7.com/is/image/Target/GUEST_196a91f4-581b-4c24-8654-aa8ccac74550?wid=488&hei=488&fmt=pjpeg"
    },
    {
      "id": 4,
      "brand": "OnePlus",
      "model": "10 Pro",
      "ram": "12GB",
      "rom": "256GB",
      "price": 799,
      image : "https://i.pinimg.com/736x/9f/8e/c5/9f8ec581805d839e6765e9d384fe72ef.jpg"
    },
    {
      "id": 5,
      "brand": "Xiaomi",
      "model": "Redmi Note 12",
      "ram": "4GB",
      "rom": "128GB",
      "price": 299,
      image : "https://cubeonline.pk/cdn/shop/files/Xiaomi-Redmi-Note-12-Mint-Green-1_grande.png?v=1714628494"
    },
    {
      "id": 6,
      "brand": "Oppo",
      "model": "Reno 8",
      "ram": "8GB",
      "rom": "256GB",
      "price": 499,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLp98cjLUHPUQ2t4S2k7aDDr3UE-dV__utQ&s"
    },
    {
      "id": 7,
      "brand": "Vivo",
      "model": "V23",
      "ram": "8GB",
      "rom": "256GB",
      "price": 399,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOlKoJHlEpYwfaARvci4cfXq1UewDVWiyOQ&s"
    },
    {
      "id": 8,
      "brand": "Huawei",
      "model": "P40",
      "ram": "8GB",
      "rom": "256GB",
      "price": 699,
      image : "https://propakistani.pk/price/wp-content/uploads/2020/01/Huawei-P40-Pro-price-200x300.png"
    },
    {
      "id": 9,
      "brand": "Asus",
      "model": "Zenfone 9",
      "ram": "8GB",
      "rom": "128GB",
      "price": 599,
      image : "https://dlcdnwebimgs.asus.com/gain/99d0a96f-4ea5-4be5-8a91-95c8e0908176/w184"
    },
    {
      "id": 10,
      "brand": "Motorola",
      "model": "Moto G82",
      "ram": "4GB",
      "rom": "128GB",
      "price": 299,
      image : "https://d3pc1xvrcw35tl.cloudfront.net/images/420x315/5000mah-battery-50mp-camera-featured-moto-g82-5g-smartphone-launched-_202206832275.jpg"
    },
    {
        "id": 11,
        "brand": "Nokia",
        "model": "G60",
        "ram": "4GB",
        "rom": "128GB",
        "price": 399,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5DsK-Qg9Z4buMWNqDDejGJjbGf_smA7YZjw&s"
      },
      {
        "id": 12,
        "brand": "Sony",
        "model": "Xperia 1 IV",
        "ram": "12GB",
        "rom": "256GB",
        "price": 1099,
        image : "https://www.beachcamera.com/cdn/shop/products/890466_3_685x685.jpg?v=1679339446"
      },
      {
        "id": 13,
        "brand": "LG",
        "model": "G8X",
        "ram": "6GB",
        "rom": "128GB",
        "price": 699,
        image : "https://e2simages.excess2sell.com/images/products/lg_g_tmmpsp1592649427258_1592649428_lg.jpg"
      },
      {
        "id": 14,
        "brand": "HTC",
        "model": "U20",
        "ram": "8GB",
        "rom": "128GB",
        "price": 599,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQctNL7Cgq_96XzJG3Tcwp2Fj9mKCjjVlz5bg&s"
      },
      {
        "id": 15,
        "brand": "ZTE",
        "model": "Axon 40",
        "ram": "8GB",
        "rom": "256GB",
        "price": 499,
        image : "https://gsmchina.com/wp-content/themes/xiaomiuiwp/phone_pics/b_zte-axon-40-ultra-2.png"
      },
      {
      "id": 16,
      "brand": "Apple",
      "model": "Ipade",
      "ram": "8GB",
      "rom": "128GB",
      "price": 999,
      image :"https://cdsassets.apple.com/live/7WUAS350/images/ipad/ipad/ipad-8th-gen-colors.png"
      }
    
];

// render item
const div = document.querySelector("#container");
mobilePhones.map((item, index) => {
  div.innerHTML += `
    <div class="card1">
    <div class="card-image1">
    <img src="${item.image}" />
    </div>
    <div class="content2">
     <h3>Name:${item.model}</h3>
      <h3>Brand:${item.brand}</h3>
     <h3>Storage: ${item.ram} / ${item.rom}</h3>
      <h3>Price:$${item.price}</h3>
      
      <button class="vip-btn" onclick="addToCart(${index})">Add to Cart</button>
      </div>
      </div>
      `;
      // <button id="addtocard" onclick="addToCart(${index})">Add to Cart</button>
});

  //add to card
var cartitem = [];
function addToCart(index){
   const checkindex = cartitem.indexOf(mobilePhones[index]);
   if(checkindex === -1){
    mobilePhones[index].quantity = 1
    cartitem.push(mobilePhones[index]);
   } else{
    cartitem[checkindex].quantity +=1

   }
 
Swal.fire({
  title: "Good job!",
  text: "ITEM ADDED TO CARD SUCCESSFULLY",
  icon: "success"
});
   console.log(cartitem)
   
};

// local storage
function checkout(){
    const arrintostr = JSON.stringify(cartitem);
    localStorage.setItem("cart",arrintostr);
    window.location = "cart.html"
}






    




    

