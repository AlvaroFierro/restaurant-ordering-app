(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();const s=[{name:"Pizza",ingredients:["pepperoni","mushrom","mozarella"],id:0,price:14,emoji:"🍕",img:"./img/pizza.png"},{name:"Hamburger",ingredients:["beef","cheese","lettuce"],price:12,emoji:"🍔",id:1,img:"./img/burger.png"},{name:"Beer",ingredients:["grain, hops, yeast, water"],price:12,emoji:"🍺",id:2,img:"./img/beer.png"}],v=document.getElementById("menu-items"),o=document.getElementById("order-items"),m=document.getElementById("modal"),f=document.getElementById("pay"),u=document.getElementById("confirmation");let d=[];document.addEventListener("click",e=>{e.target.dataset.add&&g(e.target.dataset.add),e.target.dataset.remove&&p(e.target.dataset.remove),e.target.id==="checkout-btn"&&y()});function g(e){const t=s.find(i=>i.name===e);o.classList.remove("hidden"),d.push(t),c()}function p(e){const t=s.find(i=>i.name===e);d=d.filter(i=>i.name!==t.name),d.length===0&&o.classList.add("hidden"),c()}function h(){let e=0,t='<h1 id="order-details" class="container">Your order</h1>';return d.forEach(i=>{e+=i.price,t+=`
    <div class="cart container">
      <div class="order-cart">
        <div class="item-cart">
          <div class="item-name">${i.name}</div>
          <div class="item-remove">
            <button class="remove-btn" data-remove="${i.name}">remove</button>
          </div>
        </div>
        <div class="item-price">$${i.price}</div>
      </div>
    </div>
    `}),t+=`
  <div class="order-details container">
    <div class="order-checkout">
      <div class="total-text">Total price:</div>
      <div class="total-amount">$${e}</div>
    </div>
  </div>
  <div class="checkout container">
    <button id="checkout-btn">Complete order</button>
  </div>
  `,t}form.addEventListener("submit",e=>{e.preventDefault();const i=new FormData(e.target).get("name");b(i)});function y(){m.classList.remove("hidden"),o.classList.add("hidden"),f.addEventListener("click",()=>{m.classList.add("hidden"),d=[]})}function b(e){setTimeout(()=>{let t=`<div class="confirmation-details container">
    <div class="confirmation-text">Thanks, ${e}! Your order is on its way!</div>
  </div>`;u.innerHTML=t,setTimeout(()=>{u.innerHTML=""},3e3)},100)}function L(){let e="";return s.forEach(t=>{e+=`
    <div class="order container">
      <div class="menu">
        <div class="emoji">
          <img src="${t.img}" alt="${t.name}" />
        </div>
        <div class="order-details">
          <div class="name">${t.name}</div>
          <div class="ingredients">${t.ingredients}</div>
          <div class="price">$${t.price}</div>
        </div>
      </div>
      <div class="select-order">
        <button class="add-btn" data-add="${t.name}">+</button>
      </div>
    </div>
    `}),e}function c(){v.innerHTML=L(),o.innerHTML=h()}c();
