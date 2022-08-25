// ITERATION 1
//const { product } = require('puppeteer');

function updateSubtotal(product) {
  const preu = product.querySelector('.price span').innerHTML;
  const quantitat = product.querySelector('.quantity input').value;

  const subtotal = product.querySelector('.subtotal span');

  const subtReal = Number(preu * quantitat);
  subtotal.innerHTML = subtReal;

  console.log('Calculating subtotal, yey!');

  return subtReal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test
  const productList = document.querySelectorAll('.product');
  // ITERATION 2
  const totalTot = document.querySelector('#total-value span');
  let total = 0;
  productList.forEach((unProducte) => {
    total += updateSubtotal(unProducte);
  });
  // ITERATION 3
  totalTot.innerHTML = total;
  return totalTot;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const removeChildVariable = target.parentNode.parentNode;
  const parent = removeChildVariable.parentNode;

  parent.removeChild(removeChildVariable);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let productName = document.querySelector('#newProduct');
  let productPrice = document.querySelector('#newPrice');

  const addToTheList = document.querySelector('tbody');
  addToTheList.innerHTML += `
  <tr class="product">
          <td class="name">
            <span>${productName.value}</span>
          </td>
          <td class="price">$<span>${productPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
  `;

  //Clear the input fields
  productName.value = 'Product Name';
  productPrice = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((standards) => (standards.onclick = removeProduct));

  // Code Here
  const addButton = document.getElementById('create');
  addButton.addEventListener('click', createProduct);
});
