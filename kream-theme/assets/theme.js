(function() {
  document.documentElement.classList.remove('no-js');

  const productForms = document.querySelectorAll('.product__form');
  productForms.forEach((form) => {
    const select = form.querySelector('select');
    const hiddenInput = form.querySelector('input[name="id"]');
    if (select && hiddenInput) {
      select.addEventListener('change', (event) => {
        hiddenInput.value = event.target.value;
      });
    }
  });

  const accordionGroups = document.querySelectorAll('.product__accordions');
  accordionGroups.forEach((group) => {
    const details = group.querySelectorAll('details');
    details.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (item.open) {
          details.forEach((other) => {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  });
})();
