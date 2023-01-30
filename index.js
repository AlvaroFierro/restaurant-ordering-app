import { menuArray } from './data.js'

// stretch goals
// change the theme
// offer a 15% off when users select a meal and a drink

let orders = []

document.addEventListener('click', (e) => {
  if (e.target.dataset.attribute) {
    addItem(e.target.dataset.attribute)
  }
})

function menu() {
  let menuHtml = ``

  menuArray.forEach((item) => {
    menuHtml += `
    <div class="order">
      <div class="menu">
        <div class="emoji">
          <img src="${item.img}" alt="${item.name}" />
        </div>
        <div class="order-details">
          <div class="name">${item.name}</div>
          <div class="ingredients">${item.ingredients}</div>
          <div class="price">$${item.price}</div>
        </div>
      </div>
      <div class="select-order">
        <button class="add-btn" data-attribute="${item.name}">+</button>
      </div>
    </div>
    `
  })

  return menuHtml
}

function addItem(name) {
  const targetItem = menuArray.find((item) => {
    return item.name === name
  })
  orders.push(targetItem)
}

function render() {
  document.getElementById('menu-items').innerHTML = menu()
}
render()
