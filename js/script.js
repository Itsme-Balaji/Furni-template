const productDetails = [
  {
    id : "cp13",
    Image : "./images/realmeMobile.webp",
    Title : "realme NARZO",
    Content : "realme NARZO N61 (Marble Black,6GB RAM+128GB Storage)...",
    Rating: "./images/4.5Star.png" ,
    Price : "8,498",
  },
  {
    id : "cp14",
    Image : "./images/watch.webp",
    Title : "Boult",
    Content : "Boult Newly Launched Mirage Smart Watch 1.39''HD ...",
    Rating: "./images/5star.png" ,
    Price : "1,799",
  },
  {
    id : "cp15",
    Image : "./images/keyboaed.webp",
    Title : "Logitech",
    Content : "Logitech Pebble Keys 2 K380s, Multi-Device Bluetooth Wireless...",
    Rating: "./images/4.5Star.png" ,
    Price : "1,999",
  },
  {
    id : "cp16",
    Image : "./images/mouse.webp",
    Title : "ZEBRONICS",
    Content : "ZEBRONICS PHERO Wired Gaming Mouse with up ...",
    Rating: "./images/4star.png" ,
    Price : "1,999",
  },
  {
    id : "cp17",
    Image : "./images/earbudsWhite.webp",
    Title : "Boult",
    Content : "Boult Audio W20 Truly Wireless in Ear Earbuds with 35H Playtime...",
    Rating: "./images/4star.png" ,
    Price : "999",
  },
  {
    id : "cp18",
    Image : "./images/trimmer.webp",
    Title : "Philips",
    Content : "Philips India's No.1 Men's Trimmer| Patented ...",
    Rating: "./images/5star.png" ,
    Price : "3,899",
  },
 
]
const productDetails2 = [
  {
    id : "cp19",
    Image : "./images/earbuds.webp",
    Title : "boAt",
    Content : "boAt Airdopes 141, Low Latency, ENx Tech, 42HRS Battery...",
    Rating: "./images/4.5Star.png" ,
    Price : "1,200",
  },
  {
    id : "cp20",
    Image : "./images/honortab.webp",
    Title : "HONOR Pad",
    Content : "HONOR Pad X8A with Free Flip-Cover 27.94Cm...",
    Rating: "./images/5star.png" ,
    Price : "11,999",
  },
  {
    id : "cp21",
    Image : "./images/dressSUTI.jpg",
    Title : "KLOSIA",
    Content : "KLOSIA Women Printed Kurta and Pant Set with Dupatta...",
    Rating: "./images/4star.png" ,
    Price : "1,999",
  },
  {
    id : "cp22",
    Image : "./images/iphone.webp",
    Title : "Apple iPhone13",
    Content : "Apple iPhone 13 (128GB) - (Product) RED...",
    Rating: "./images/5star.png" ,
    Price : "55,999",
  },
  {
    id : "cp23",
    Image : "./images/tuf.jpg",
    Title : "ASUS TUF Gaming",
    Content : "ASUS TUF Gaming A15, 15.6 FHD 16:9 144Hz 250nits...",
    Rating: "./images/5star.png" ,
    Price : "59,999",
  },
  {
    id : "cp24",
    Image : "./images/biscut.webp",
    Title : "Sunfeast",
    Content : "Sunfeast Dark Fantasy Yumfills, 242g/253g, Rich Chocolate...",
    Rating: "./images/4star.png" ,
    Price : "99",
  },
 
]

  let dynamicProduct = "";
  productDetails.map((value2) => {
    dynamicProduct +=`
    <div class="card col col-6 col-sm-6 col-md-4 col-lg-2">
          <img src="${value2.Image}"/>
          <div class="card-body">
            <h5 class="card-title">${value2.Title}</h5>
            <p class="card-text">${value2.Content}</p>
            <img src="${value2.Rating}" class="star d-block mb-3" />
            <i class="fa-solid fa-indian-rupee-sign"></i> <span class="productPrice">${value2.Price}</span>
            <select class="d-block mt-3">
              <option selected value="1">1</option>
              <option  value="2">2</option>
              <option  value="3">3</option>
              <option  value="4">4</option>
              <option  value="5">5</option>
              <option  value="6">6</option>
              <option  value="7">7</option>
              <option  value="8">8</option>
              <option  value="9">9</option>
              <option value="10">10</option>
            </select>
            <input type="button" class="btn btn-warning mt-4 ms-3 btn-cart" data-product-id=${value2.id} value="Add to Cart" />
          </div>
      </div>
    `
  })
  document.querySelector('.dynamic').innerHTML=dynamicProduct;


  let dynamicProduct2 = "";
  productDetails2.map((value) => {
    dynamicProduct2 +=`
    <div class="card col col-6 col-sm-6 col-md-4 col-lg-2">
          <img src="${value.Image}"/>
          <div class="card-body">
            <h5 class="card-title">${value.Title}</h5>
            <p class="card-text">${value.Content}</p>
            <img src="${value.Rating}" class="star d-block mb-3" />
            <i class="fa-solid fa-indian-rupee-sign"></i> <span class="productPrice">${value.Price}</span>
            <select class="d-block mt-3">
              <option selected value="1">1</option>
              <option  value="2">2</option>
              <option  value="3">3</option>
              <option  value="4">4</option>
              <option  value="5">5</option>
              <option  value="6">6</option>
              <option  value="7">7</option>
              <option  value="8">8</option>
              <option  value="9">9</option>
              <option value="10">10</option>
            </select>
            <input type="button" class="btn btn-warning mt-4 ms-3 btn-cart" data-product-id=${value.id} value="Add to Cart" />
          </div>
      </div>
    `
  })
  document.querySelector('.dynamic2').innerHTML=dynamicProduct2;

let productCart =[];  
document.querySelectorAll('.btn-cart').forEach((button) =>{
  button.addEventListener("click",() =>{
   
    let productId = button.dataset.productId;
    let matching;
    productCart.forEach((check)=>{
      if(productId===check.productId)
      {
        matching=check;
      }
    })
    if(matching){
      matching.quantity+=1
    }
    else{
      productCart.push(
        {
          productId :productId,
          quantity :1 
        }
      )
    }
   let cartQuantity=0;
    productCart.forEach((item)=>{
      cartQuantity+=item.quantity;
     
   })
      document.querySelector('.cart-Quantity').innerHTML=cartQuantity;
  })
})


