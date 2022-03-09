const elsSiteInput = document.querySelectorAll('[name = "switch-input-radio"]');
const elsSitePricing = document.querySelectorAll(".price");

elsSiteInput.forEach(function (elSiteinput) {
  elSiteinput.addEventListener("change", function () {
    const period = elSiteinput.value;

    if (period === "annually") {
      elsSitePricing.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest(".card-box-item").dataset.pricingAnnually;
      });
    } else {
      elsSitePricing.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest(".card-box-item").dataset.pricingMonthly;
      });

    }
  })
})