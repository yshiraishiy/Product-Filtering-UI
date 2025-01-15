const products = [
  {
    name: "Sony Playstation 5",
    url: "/playstation_5.png",
    type: "games",
    price: 499.99,
  },
  {
    name: "Samsung Galaxy",
    url: "/samsung_galaxy.png",
    type: "smartphones",
    price: 399.99,
  },
  {
    name: "Cannon EOS Camera",
    url: "/cannon_eos_camera.png",
    type: "cameras",
    price: 749.99,
  },
  {
    name: "Sony A7 Camera",
    url: "/sony_a7_camera.png",
    type: "cameras",
    price: 1999.99,
  },
  {
    name: "LG TV",
    url: "/lg_tv.png",
    type: "televisions",
    price: 799.99,
  },
  {
    name: "Nintendo Switch",
    url: "/nintendo_switch.png",
    type: "games",
    price: 299.99,
  },
  {
    name: "Xbox Series X",
    url: "/xbox_series_x.png",
    type: "games",
    price: 499.99,
  },
  {
    name: "Samsung TV",
    url: "/samsung_tv.png",
    type: "televisions",
    price: 1099.99,
  },
  {
    name: "Google Pixel",
    url: "/google_pixel.png",
    type: "smartphones",
    price: 499.99,
  },
  {
    name: "Sony ZV1F Camera",
    url: "/sony_zv1f_camera.png",
    type: "cameras",
    price: 799.99,
  },
  {
    name: "Toshiba TV",
    url: "/toshiba_tv.png",
    type: "televisions",
    price: 499.99,
  },
  {
    name: "iPhone 14",
    url: "/iphone_14.png",
    type: "smartphones",
    price: 999.99,
  },
];

// DOM要素を取得
const productsWrapperEl = document.getElementById("products-wrapper");
const checkEl = document.querySelectorAll(".check");
const filtersContainerEl = document.getElementById("filters-container");
const searchInput = document.getElementById("search");
const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");

// 初期のカートアイテム数
let cartItemCount = 0;

// 初期のプロダクト数
const productsEls = [];

// プロダクトとプロダクト要素を作成
products.forEach((product) => {
  const productEl = createProductElement(product);
  productsEls.push(productEl);
  productsWrapperEl.appendChild(productEl);
});

// プロダクト要素を作成
function createProductElement(product) {
  const productEl = document.createElement("div");

  productEl.className = "item space-y-2";

  productEl.innerHTML = `
  <div
  class="bg-gray-100 flex justify-cener relative overflow-hidden group cursol-pointer border"
>
  <img
    src="${product.url}"
    alt="${product.name}"
    class="w-full h-full object-cover"
  />
  <span
    class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
    >Add To Cart</span
  >
</div>
<p class="text-xl">${product.name}</p>
<strong>$${product.price.toLocaleString()}</strong>
  `;

  productEl.querySelector(".status").addEventListener("click", addToCart);

  return productEl;
}

// カートへの追加と削除を切り替える
function addToCart(e) {
  const statusEl = e.target;

  if (statusEl.classList.contains("added")) {
    // カートから削除
    statusEl.classList.remove("added");
    statusEl.innerText = "Add To Car";
    statusEl.classList.remove("bg-red-600");
    statusEl.classList.add("bg-gray-800");

    cartItemCount--;
  } else {
    // カートに追加
    statusEl.classList.add("added");
    statusEl.innerText = "Remove From Car";
    statusEl.classList.remove("bg-gray-800");
    statusEl.classList.add("bg-red-600");

    cartItemCount++;
  }

  // カートアイテム数を更新
  cartCount.innerText = cartItemCount.toString();
}
