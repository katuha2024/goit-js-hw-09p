import"./assets/styles-tuwtOS83.js";let t={email:"",message:""};const a="feedback-form-state",l=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,r=document.querySelector(".feedback-form");r.addEventListener("input",o);function o(e){e.target.name==="email"&&(g(e),t.email=e.target.value.trim()),e.target.name==="message"&&(t.message=e.target.value.trim()),localStorage.setItem(a,JSON.stringify(t))}function g(e){l.test(e.target.value.trim())?e.target.setCustomValidity(""):e.target.setCustomValidity("Введіть коректний email, наприклад usermail@mail.domen. Адреса має бути введена латиницею, містити символ @, після якого щонайменше 1 символ, потім . після якої щонайменше 2 символи"),e.target.reportValidity()}window.addEventListener("load",u);function u(){const e=document.querySelector(".feedback-form"),m=localStorage.getItem(a);if(m){t=JSON.parse(m);const{email:s,message:i}=t;e.elements.email.value=s,e.elements.message.value=i}}r.addEventListener("submit",n);function n(e){if(e.preventDefault(),e.target.elements.email.value.trim()===""||e.target.elements.message.value.trim()===""){alert("'All form fields must be filled in'");return}if(l.test(e.target.elements.email.value.trim()))e.target.elements.email.setCustomValidity("");else{e.target.elements.email.setCustomValidity("Введіть коректний email, наприклад usermail@mail.domen. Адреса має бути введена латиницею, містити символ @, після якого щонайменше 1 символ, потім . після якої щонайменше 2 символи");return}console.log(t),localStorage.removeItem(a),e.target.reset(),t.email="",t.message=""}
//# sourceMappingURL=2-form.js.map
