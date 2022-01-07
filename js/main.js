const elSiteButton = document.querySelector(".site-header-toggle");
const elSitePrice1 = document.querySelector(".price-1");
const elSitePrice2 = document.querySelector(".price-2");
const elSitePrice3 = document.querySelector(".price-3");
elSiteButton.addEventListener("click", function () {
  elSitePrice1.textContent = "199.99";
  elSitePrice2.textContent = "249.99";
  elSitePrice3.textContent = "399.99";
});