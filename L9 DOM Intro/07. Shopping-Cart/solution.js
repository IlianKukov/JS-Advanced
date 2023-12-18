function solve() {
   const addButtons = Array.from(document.
      querySelectorAll('button.add-product'));
      const products = {
         'Bread': 0.80,
         'Milk': 1.09,
         'Tomatoes': 0.99,
      }

      addButtons.forEach (btn =>{
      btn.addEventListner()
      })
}