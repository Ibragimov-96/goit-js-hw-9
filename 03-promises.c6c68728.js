function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequireada7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequireada7=i);var r=i("eWCmQ");const l=document.querySelector("form");l.addEventListener("submit",(function(t){t.preventDefault();let n=+l.elements.delay.value;const o=+l.elements.step.value,i=+l.elements.amount.value;t.target.reset();for(let t=0;t<i;t++)a(t+1,n+=o).then((({position:t,delay:n})=>{e(r).Notify.success(`:белая_галочка: Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`:х: Rejected promise ${t} in ${n}ms`)}));function a(e,t){return new Promise(((n,i)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):i({position:e,delay:t})}),t-=o)}))}}));
//# sourceMappingURL=03-promises.c6c68728.js.map
