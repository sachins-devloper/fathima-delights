import { products } from "../data/product.js";

let productHTML = "";
let totalCartCount = 0;

products.forEach((product) => {
  productHTML += `
        <div class="product-card js-product-card">
            <div class="product-image">
              <img src="${product.image}" alt="" />
              <div class="badge">-${product.discount}%</div>
            </div>

            <!-- Add to cart bar container -->
            <div class="product-actions">
              <button class="qty-btn js-qty-dec-btn">-</button>
              <span class="js-cart-qtn">0</span>
              <button class="qty-btn js-qty-inc-btn">+</button>
              <button class="add-to-cart js-add-to-cart">Add to Cart</button>
            </div>

            <h3>${product.name}</h3>
            <div class="rating">
              <i class="fas fa-star"></i><i class="fas fa-star"></i>
              <i class="fas fa-star"></i><i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <span>${product.rating} reviews</span>
            </div>
            <p class="old-price">Rs. ${product.oldprice.toFixed(2)}</p>
            <p class="new-price">Rs. ${product.newprice.toFixed(2)}</p>
        </div>
    `;
});

document.querySelector(".js-product-list").innerHTML = productHTML;

// ========== Quantity + Cart ============
document.querySelectorAll(".js-product-card").forEach((card) => {
  const incrBtn = card.querySelector(".js-qty-inc-btn");
  const decrBtn = card.querySelector(".js-qty-dec-btn");
  const quanDisplay = card.querySelector(".js-cart-qtn");
  const addtoCartBtn = card.querySelector(".js-add-to-cart");

  let quantity = 0;

  decrBtn.addEventListener("click", () => {
    if (quantity > 0) {
      quantity--;
      quanDisplay.innerText = quantity;
    }
  });

  incrBtn.addEventListener("click", () => {
    quantity++;
    quanDisplay.innerText = quantity;
  });

  addtoCartBtn.addEventListener("click", () => {
    totalCartCount += quantity;
    quantity = 0;
    quanDisplay.innerText = quantity;
    document.querySelector(".noi").innerText = totalCartCount;
  });
});

// =============== Feedback section

let feedbacks = [
  {
    feedback:
      "Awesome authenticity and on time delivery what else one could ask for ...full value for money. Loved the flavour of Leonidas Milk Almonds & Sea Salt Bar 100g, it was delicious.",
    author: "Arun A",
  },
  {
    feedback:
      "Awesome authenticity and on time delivery what else one could ask for ...full value for money. Loved the flavour of Leonidas Milk Almonds & Sea Salt Bar 100g, it was delicious.",
    author: "Merlin Agnes",
  },
  {
    feedback:
      "It's excellent chocolate. I rarely love chocolates but once I tried Venchi it was a delight, I received the chocolates in good original condition and it has not got melted. Thank you Fathimadelights.I will surely buy again!!",
    author: "Rakshana",
  }
];

let feedbackHTML = "";
feedbacks.forEach((feedback) => {
  feedbackHTML+= `
    <div class="testimonial">
            <i class="fa-solid fa-quote-right"></i>
            <p>${feedback.feedback}</p>
            <div class="stars">★★★★★</div>
            <h4>${feedback.author}</h4>
          </div>
    `;
});
document.querySelector(".testimonial-container").innerHTML = feedbackHTML

// ============ Product list display

// let quantity = 0;
// let productHTML = "";

// // ============= Quantity fuction =========

// document.querySelectorAll(".product-card").forEach((card) => {
//     const decBtn = card.querySelector(".js-qty-dec-btn");
//     const incBtn = card.querySelector(".js-qty-inc-btn");
//     const qtyDisplay = card.querySelector(".js-cart-qtn");
//     const addtoCart = card.querySelector(".js-add-to-cart")

//     decBtn.addEventListener("click", () => {
//       if (quantity > 0) {
//         quantity--;
//         qtyDisplay.innerText = quantity;
//       }
//     });

//     incBtn.addEventListener("click", () => {
//       quantity++;
//       qtyDisplay.innerText = quantity;
//     });

//     addtoCart.addEventListener('click', () => {
//         document.querySelector('.noi').innerText = eval(quantity)
//     })
// });

// ===========  cart Quantity display

/*
document
    .querySelectorAll(".js-qty-dec-btn")
    .forEach((btn) => btn
        .addEventListener("click", () => {
            if (cartQuantity > 0) {
                cartQuantity = cartQuantity - 1;
                document.querySelector(".js-cart-qtn").innerText = cartQuantity;
            }
        }));

document.querySelectorAll(".js-qty-inc-btn").forEach((btn)=>btn.addEventListener("click", () => {
  cartQuantity = cartQuantity + 1;
  console.log(cartQuantity);
  document.querySelector(".js-cart-qtn").innerHTML = cartQuantity;
}));
*/
