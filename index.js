import { menuArray } from './data.js'

// stretch goals
// change the theme
// offer a 15% off when users select a meal and a drink

function menu() {
  let menuHtml = ``

  menuArray.forEach((item) => {
    menuHtml += `
    <div class="order">
      <div class="menu">
        <div class="img">
          <img src="${item.img}" alt="${item.name}" />
        </div>
        <div class="order-details">
          <div class="name">${item.name}</div>
          <div class="ingredients">${item.ingredients}</div>
          <div class="price">$${item.price}</div>
        </div>
      </div>
      <div class="select-order">
        <button class="plus-btn">+</button>
      </div>
    </div>
    `
  })

  return menuHtml
}

function render() {
  document.getElementById('app').innerHTML = menu()
}

render()
