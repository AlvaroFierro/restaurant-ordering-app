import { menuArray } from './data.js'

const menuItems = document.getElementById('menu-items')
const orderItems = document.getElementById('order-items')
const modal = document.getElementById('modal')
const payBtn = document.getElementById('pay')
const confirmationEl = document.getElementById('confirmation')

let orders = []

document.addEventListener('click', (e) => {
  if (e.target.dataset.add) addItem(e.target.dataset.add)
  if (e.target.dataset.remove) removeItem(e.target.dataset.remove)
  if (e.target.id === 'checkout-btn') paymentProcess()
})

function addItem(name) {
  const targetItem = menuArray.find((item) => {
    return item.name === name
  })
  orderItems.classList.remove('hidden')
  orders.push(targetItem)
  render()
}

function removeItem(name) {
  const targetItem = menuArray.find((item) => {
    return item.name === name
  })
  orders = orders.filter((item) => {
    return item.name !== targetItem.name
  })
  if (orders.length === 0) orderItems.classList.add('hidden')
  render()
}

function cartOrder() {
  let total = 0
  let orderHtml = `<h1 id="order-details" class="container">Your order</h1>`

  orders.forEach((item) => {
    total += item.price
    orderHtml += `
    <div class="cart container">
      <div class="order-cart">
        <div class="item-cart">
          <div class="item-name">${item.name}</div>
          <div class="item-remove">
            <button class="remove-btn" data-remove="${item.name}">remove</button>
          </div>
        </div>
        <div class="item-price">$${item.price}</div>
      </div>
    </div>
    `
  })

  orderHtml += `
  <div class="order-details container">
    <div class="order-checkout">
      <div class="total-text">Total price:</div>
      <div class="total-amount">$${total}</div>
    </div>
  </div>
  <div class="checkout container">
    <button id="checkout-btn">Complete order</button>
  </div>
  `

  return orderHtml
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const name = formData.get('name')
  purchaseDetails(name)
})

function paymentProcess() {
  modal.classList.remove('hidden')
  orderItems.classList.add('hidden')

  payBtn.addEventListener('click', () => {
    if (!form.checkValidity()) return
    modal.classList.add('hidden')
    orders = []
  })
}

function purchaseDetails(name) {
  setTimeout(() => {
    let confirmation = `<div class="confirmation-details container">
    <div class="confirmation-text">Thanks, ${name}! Your order is on its way!</div>
  </div>`
    confirmationEl.innerHTML = confirmation

    setTimeout(() => {
      confirmationEl.innerHTML = ''
    }, 3000)
  }, 100)
}

function menu() {
  let menuHtml = ``

  menuArray.forEach((item) => {
    menuHtml += `
    <div class="order container">
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
        <button class="add-btn" data-add="${item.name}">+</button>
      </div>
    </div>
    `
  })

  return menuHtml
}

function render() {
  menuItems.innerHTML = menu()
  orderItems.innerHTML = cartOrder()
}
render()
