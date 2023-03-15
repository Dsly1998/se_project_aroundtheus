!function(){"use strict";class e{constructor(e,t){var n,o,r;n=this,r=()=>this._inputElements.every((e=>e.validity.valid)),(o=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(o="_checkFormValidity"))in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,this._formSelector=e.inputSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=t}_showInputError(e){const t=this._form.querySelector("#"+e.id+"-error");e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_toggleButtonState(){this._checkFormValidity()?(this._submitButton.disabled=!1,this._submitButton.classList.remove(this._inactiveButtonClass)):(this._submitButton.disabled=!0,this._submitButton.classList.add(this._inactiveButtonClass))}_hideInputError(e){const t=this._form.querySelector("#"+e.id+"-error");e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}_checkInputValidity(e){if(!e.validity.valid)return this._showInputError(e);this._hideInputError(e)}_setEventListeners(){this._inputElements=[...this._form.querySelectorAll(this._inputSelector)],this._submitButton=this._form.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputElements.forEach((e=>{e.addEventListener("input",(t=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}resetValidation(){this._toggleButtonState()}enableValidation(){this._form.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}}class t{constructor(e){let{popupSelector:t}=e;this._popupElement=document.querySelector(t),this._handleEscUp=this._handleEscUp.bind(this)}_handleEscUp(e){"Escape"===e.key&&(document.querySelector(".modal_open"),this.close())}setEventListener(){this._popupElement.addEventListener("mousedown",(e=>{e.target.classList.contains("modal_open")&&this.close()}))}open(){this._popupElement.classList.add("modal_open"),document.addEventListener("keydown",this._handleEscUp)}close(){this._popupElement.classList.remove("modal_open"),document.removeEventListener("keydown",this._handleEscUp)}}class n extends t{constructor(e){let{popupSelector:t,handleFormSubmit:n}=e;super({popupSelector:t}),this._handleFormSubmit=n,this._popupForm=this._popupElement.querySelector(".modal__form")}_getInputValues(){const e=this._popupElement.querySelectorAll(".modal__input"),t={};return e.forEach((e=>{t[e.name]=e.value})),t}setEventListener(){super.setEventListener(),this._popupForm.addEventListener("submit",(()=>{this._handleFormSubmit(this._getInputValues())}))}close(){this._popupForm.reset(),super.close()}}document.querySelector(".card");const o=document.querySelector(".profile__button-edit"),r=document.querySelector("#modal-add").querySelector(".modal__button-exit"),i=document.querySelector("#modal-edit-form"),s=(document.querySelector(".profile__title"),document.querySelector(".profile__title-description"),document.querySelector("#image-modal")),l=document.querySelector(".profile__button"),a=document.querySelector("#modal-card-add").querySelector(".modal__button-exit"),c=document.querySelector("#modal-card-form"),u=s.querySelector(".modal__button-exit"),m=document.querySelector("#name"),d=document.querySelector("#description"),_={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error-visible"},p=new class extends t{constructor(e){let{popupSelector:t}=e;super({popupSelector:t}),this._title=this._popupElement.querySelector(".modal__image-description"),this._image=this._popupElement.querySelector(".modal__preview-image")}open(e,t){this._title.textContent=e,this._image.src=t,this._image.alt=e,super.open()}}({popupSelector:"#image-modal"}),h=(e,t)=>{const n=new class{constructor(e,t){this._name=e.name,this._link=e.link,this._alt=e.name,this._handleImageClick=e.handleImageClick,this._cardSelector=t}_setEventListeners(){this.element.querySelector(".card__title-button").addEventListener("click",(()=>this._handleLikeButton())),this.element.querySelector(".card__delete-button").addEventListener("click",(()=>this._handleDeleteButton())),this.element.querySelector(".card__image").addEventListener("click",(()=>this._handleImageClick(this._name,this._link)))}_handleLikeButton(){this.element.querySelector(".card__like-image").classList.toggle("card__like-image_active")}_handleDeleteButton(){this.element.remove()}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".card__content").cloneNode(!0)}getView(){return this.element=this._getTemplate(),this.element.querySelector(".card__image").src=this._link,this.element.querySelector(".card__image").alt=this._alt,this.element.querySelector(".card__title").textContent=this._name,this._setEventListeners(),this.element}}({name:e,link:t,handleImageClick:(e,t)=>{p.open(e,t)}},"#card-template");return n.getView()},S=new e(_,c),E=new e(_,i);S.enableValidation(),E.enableValidation();const v=new class{constructor(e){let{nameSelector:t,titleSelector:n}=e;this._nameElement=document.querySelector(t),this._descriptionElement=document.querySelector(n)}getUserInfo(){return{name:this._nameElement.textContent,description:this._descriptionElement.textContent}}setUserInfo(e){let{name:t,description:n}=e;this._nameElement.textContent=t,this._descriptionElement.textContent=n}}({nameSelector:".profile__title",titleSelector:".profile__title-description"}),y=new n({popupSelector:"#modal-add",handleFormSubmit:e=>{const t=e.name,n=e.description;v.setUserInfo({name:t,description:n}),y.close()}}),g=new n({popupSelector:"#modal-card-add",handleFormSubmit:function(e){g.close(),S.resetValidation(),f.addItem(h(e.name,e.link))}}),f=new class{constructor(e,t){let{renderer:n}=e;this._renderer=n,this._container=document.querySelector(t)}addItem(e){this._container.prepend(e)}renderItems(e){e.forEach((e=>{this._renderer(e)}))}}({renderer:e=>{const t=h(e.name,e.link);f.addItem(t)}},".card");f.renderItems([{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",alt:"Yosemite Valley"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",alt:"Lake Louise"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",alt:"Bald Mountains"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",alt:"Latemar"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",alt:"Vanoise National Park"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",alt:"Lago di Braies"}]),y.setEventListener(),p.setEventListener(),g.setEventListener(),r.addEventListener("click",(function(){y.close()})),u.addEventListener("click",(function(){p.close()})),a.addEventListener("click",(function(){y.close()})),a.addEventListener("click",(function(){g.close()})),o.addEventListener("click",(()=>{const{name:e,description:t}=v.getUserInfo();m.value=e,d.value=t,y.open()})),l.addEventListener("click",(()=>{g.open()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hCLElBRUF3QixFQUFpQnRDLGlCQUFpQixTQUFTLFdBQ3pDMEMsRUFBWTVCLE9BQ2QsSUFFQXNCLEVBQWFwQyxpQkFBaUIsU0FBUyxXQUNyQzZFLEVBQWMvRCxPQUNoQixJQUVBc0IsRUFBYXBDLGlCQUFpQixTQUFTLFdBQ3JDOEUsRUFBYWhFLE9BQ2YsSUFhQWlCLEVBQWdCL0IsaUJBQWlCLFNBWFR5RixLQUN0QixNQUFNLEtBQUU3RCxFQUFJLFlBQUU4QyxHQUFnQk4sRUFBU0ssY0FDdkNsQyxFQUFZVixNQUFRRCxFQUNwQlksRUFBbUJYLE1BQVE2QyxFQUMzQkcsRUFBYzNELE1BQU0sSUFTdEJpQixFQUFjbkMsaUJBQWlCLFNBTlgwRixLQUNsQlosRUFBYTVELE1BQU0sRyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9wb3B1cC5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9mb3JtU2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2Zvcm0gPSBmb3JtRWxlbWVudDtcclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnRzKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIiNcIiArIGlucHV0RWxlbWVudHMuaWQgKyBcIi1lcnJvclwiXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50cy5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50cy52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIGVycm9yTWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9jaGVja0Zvcm1WYWxpZGl0eSA9ICgpID0+XHJcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzLmV2ZXJ5KChpbnB1dCkgPT4gaW5wdXQudmFsaWRpdHkudmFsaWQpO1xyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IHRoaXMuX2NoZWNrRm9ybVZhbGlkaXR5KCk7XHJcblxyXG4gICAgaWYgKGlzRm9ybVZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudHMpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZUVsZW1lbnQgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiI1wiICsgaW5wdXRFbGVtZW50cy5pZCArIFwiLWVycm9yXCJcclxuICAgICk7XHJcbiAgICBpbnB1dEVsZW1lbnRzLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yTWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgZXJyb3JNZXNzYWdlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2lucHV0RWxlbWVudHMgPSBbLi4udGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXTtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuX2lucHV0RWxlbWVudHMuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9oYW5kbGVFc2NVcCA9IHRoaXMuX2hhbmRsZUVzY1VwLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRXNjVXAoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICBjb25zdCBvcGVuZWRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfb3BlblwiKTtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldnQpID0+IHtcclxuICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfb3BlblwiKSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuXCIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5cIik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NVcCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9wb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xyXG4gICAgc3VwZXIoeyBwb3B1cFNlbGVjdG9yIH0pO1xyXG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcclxuICB9XHJcblxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19pbnB1dFwiKTtcclxuICAgIGNvbnN0IGlucHV0VmFsdWVzID0ge307XHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpbnB1dFZhbHVlcztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVyKCk7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgXCIuLi9wYWdlcy9pbmRleC5jc3NcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3B1cFwiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm9cIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvblwiO1xyXG5cclxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QveW9zZW1pdGUuanBnXCIsXHJcbiAgICBhbHQ6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFrZS1sb3Vpc2UuanBnXCIsXHJcbiAgICBhbHQ6IFwiTGFrZSBMb3Vpc2VcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICAgIGFsdDogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGF0ZW1hci5qcGdcIixcclxuICAgIGFsdDogXCJMYXRlbWFyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3Zhbm9pc2UuanBnXCIsXHJcbiAgICBhbHQ6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFnby5qcGdcIixcclxuICAgIGFsdDogXCJMYWdvIGRpIEJyYWllc1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vLy8vLy8vLy8vL3F1ZXJ5c2VsZWN0b3JzLy8vLy8vL1xyXG5jb25zdCBwbGFjZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpO1xyXG5jb25zdCBwcm9maWxlRWRpdE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbi1lZGl0XCIpO1xyXG5jb25zdCBwcm9maWxlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWFkZFwiKTsgLy9wb3BcclxuY29uc3QgcHJvZmlsZU1vZGFsQ2xvc2UgPSBwcm9maWxlTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fYnV0dG9uLWV4aXRcIik7XHJcbmNvbnN0IHByb2ZpbGVFZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtZWRpdC1mb3JtXCIpOyAvL3NlY3Rpb25cclxuY29uc3QgcHJvZmlsZU5hbWVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XHJcbmNvbnN0IHByb2ZpbGVKb2JUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGUtZGVzY3JpcHRpb25cIik7XHJcbmNvbnN0IGltYWdlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLW1vZGFsXCIpOyAvL2ltZ1xyXG5jb25zdCBjYXJkQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19idXR0b25cIik7XHJcbmNvbnN0IGNhcmRNb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWNhcmQtYWRkXCIpOyAvL2Zvcm1cclxuY29uc3QgY2FyZEFkZENsb3NlID0gY2FyZE1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19idXR0b24tZXhpdFwiKTtcclxuY29uc3QgY2FyZEFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWNhcmQtZm9ybVwiKTsgLy9zZWN0aW9uXHJcbmNvbnN0IGltYWdlQ2xvc2VCdXR0b24gPSBpbWFnZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2J1dHRvbi1leGl0XCIpO1xyXG5jb25zdCBwcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcclxuY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9faW5wdXRcIixcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX2J1dHRvblwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX2J1dHRvbl9kaXNhYmxlZFwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yLXZpc2libGVcIixcclxufTtcclxuXHJcbmNvbnN0IHBvcHVwQ29uZmlnID0ge1xyXG4gIGVkaXRGb3JtUG9wdXBTZWxlY3RvcjogXCIjbW9kYWwtYWRkXCIsXHJcbiAgYWRkQ2FyZFBvcHVwU2VsZWN0b3I6IFwiI21vZGFsLWNhcmQtYWRkXCIsXHJcbn07XHJcblxyXG5jb25zdCBjYXJkUHJldmlldyA9IG5ldyBQb3B1cFdpdGhJbWFnZSh7IHBvcHVwU2VsZWN0b3I6IFwiI2ltYWdlLW1vZGFsXCIgfSk7XHJcblxyXG5jb25zdCBjcmVhdGVDYXJkID0gKG5hbWUsIGxpbmspID0+IHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIGxpbms6IGxpbmssXHJcbiAgICAgIGhhbmRsZUltYWdlQ2xpY2s6IChuYW1lLCBsaW5rKSA9PiB7XHJcbiAgICAgICAgY2FyZFByZXZpZXcub3BlbihuYW1lLCBsaW5rKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiNjYXJkLXRlbXBsYXRlXCJcclxuICApO1xyXG4gIHJldHVybiBjYXJkLmdldFZpZXcoKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihzZXR0aW5ncywgY2FyZEFkZEZvcm0pO1xyXG5jb25zdCBhZGRlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHNldHRpbmdzLCBwcm9maWxlRWRpdEZvcm0pO1xyXG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuYWRkZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xyXG4gIG5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fdGl0bGVcIixcclxuICB0aXRsZVNlbGVjdG9yOiBcIi5wcm9maWxlX190aXRsZS1kZXNjcmlwdGlvblwiLFxyXG59KTtcclxuXHJcbmNvbnN0IGVkaXRGb3JtUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogcG9wdXBDb25maWcuZWRpdEZvcm1Qb3B1cFNlbGVjdG9yLFxyXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uO1xyXG4gICAgdXNlckluZm8uc2V0VXNlckluZm8oeyBuYW1lOiBuYW1lLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfSk7XHJcbiAgICBlZGl0Rm9ybVBvcHVwLmNsb3NlKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBhZGRDYXJkUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogcG9wdXBDb25maWcuYWRkQ2FyZFBvcHVwU2VsZWN0b3IsXHJcbiAgaGFuZGxlRm9ybVN1Ym1pdDogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIGFkZENhcmRQb3B1cC5jbG9zZSgpO1xyXG4gICAgYWRkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxuICAgIHNlY3Rpb24uYWRkSXRlbShjcmVhdGVDYXJkKGRhdGEubmFtZSwgZGF0YS5saW5rKSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzZWN0aW9uID0gbmV3IFNlY3Rpb24oXHJcbiAge1xyXG4gICAgcmVuZGVyZXI6IChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKGRhdGEubmFtZSwgZGF0YS5saW5rKTtcclxuICAgICAgc2VjdGlvbi5hZGRJdGVtKGNhcmQpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIFwiLmNhcmRcIlxyXG4pO1xyXG5zZWN0aW9uLnJlbmRlckl0ZW1zKGluaXRpYWxDYXJkcyk7XHJcblxyXG5lZGl0Rm9ybVBvcHVwLnNldEV2ZW50TGlzdGVuZXIoKTtcclxuXHJcbmNhcmRQcmV2aWV3LnNldEV2ZW50TGlzdGVuZXIoKTtcclxuXHJcbmFkZENhcmRQb3B1cC5zZXRFdmVudExpc3RlbmVyKCk7XHJcblxyXG5wcm9maWxlTW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGVkaXRGb3JtUG9wdXAuY2xvc2UoKTtcclxufSk7XHJcblxyXG5pbWFnZUNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY2FyZFByZXZpZXcuY2xvc2UoKTtcclxufSk7XHJcblxyXG5jYXJkQWRkQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBlZGl0Rm9ybVBvcHVwLmNsb3NlKCk7XHJcbn0pO1xyXG5cclxuY2FyZEFkZENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgYWRkQ2FyZFBvcHVwLmNsb3NlKCk7XHJcbn0pO1xyXG5cclxuY29uc3Qgb3BlblByb2ZpbGVFZGl0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24gfSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgcHJvZmlsZU5hbWUudmFsdWUgPSBuYW1lO1xyXG4gIHByb2ZpbGVEZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uO1xyXG4gIGVkaXRGb3JtUG9wdXAub3BlbigpO1xyXG59O1xyXG5cclxuY29uc3Qgb3BlbkNhcmRBZGQgPSAoKSA9PiB7XHJcbiAgYWRkQ2FyZFBvcHVwLm9wZW4oKTtcclxufTtcclxuXHJcbnByb2ZpbGVFZGl0T3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblByb2ZpbGVFZGl0KTtcclxuXHJcbmNhcmRBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5DYXJkQWRkKTtcclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL3BvcHVwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IgfSkge1xyXG4gICAgc3VwZXIoeyBwb3B1cFNlbGVjdG9yIH0pO1xyXG4gICAgdGhpcy5fdGl0bGUgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2UtZGVzY3JpcHRpb25cIik7XHJcbiAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWltYWdlXCIpO1xyXG4gIH1cclxuXHJcbiAgb3BlbihuYW1lLCBsaW5rKSB7XHJcbiAgICB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB0aGlzLl9pbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgdGhpcy5faW1hZ2UuYWx0ID0gbmFtZTtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9XHJcbn1cclxuIiwiY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSwgY2FyZFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5fbGluayA9IGRhdGEubGluaztcclxuICAgIHRoaXMuX2FsdCA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2hhbmRsZUltYWdlQ2xpY2sgPSBkYXRhLmhhbmRsZUltYWdlQ2xpY2s7XHJcbiAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGUtYnV0dG9uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlTGlrZUJ1dHRvbigpKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2hhbmRsZURlbGV0ZUJ1dHRvbigpKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuX2hhbmRsZUltYWdlQ2xpY2sodGhpcy5fbmFtZSwgdGhpcy5fbGluaylcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVMaWtlQnV0dG9uKCkge1xyXG4gICAgdGhpcy5lbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtaW1hZ2VcIilcclxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWltYWdlX2FjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVEZWxldGVCdXR0b24oKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2NvbnRlbnRcIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGdldFZpZXcoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKS5hbHQgPSB0aGlzLl9hbHQ7XHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCB0aXRsZVNlbGVjdG9yIH0pIHtcclxuICAgIHRoaXMuX25hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aXRsZVNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLl9kZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlckluZm8oeyBuYW1lLCBkZXNjcmlwdGlvbiB9KSB7XHJcbiAgICB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB0aGlzLl9kZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyByZW5kZXJlciB9LCBlbGVtZW50Q29udGFpbmVyKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50Q29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJdGVtcyhpdGVtcykge1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiRm9ybVZhbGlkYXRvciIsImNvbnN0cnVjdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsInRoaXMiLCJfaW5wdXRFbGVtZW50cyIsImV2ZXJ5IiwiaW5wdXQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2Zvcm1TZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtIiwiX3Nob3dJbnB1dEVycm9yIiwiaW5wdXRFbGVtZW50cyIsImVycm9yTWVzc2FnZUVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiX2NoZWNrRm9ybVZhbGlkaXR5IiwiX3N1Ym1pdEJ1dHRvbiIsImRpc2FibGVkIiwicmVtb3ZlIiwiX2hpZGVJbnB1dEVycm9yIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsImlucHV0RWxlbWVudCIsIl9zZXRFdmVudExpc3RlbmVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaW5wdXRFbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVzZXRWYWxpZGF0aW9uIiwiZW5hYmxlVmFsaWRhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJfcmVmIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJkb2N1bWVudCIsIl9oYW5kbGVFc2NVcCIsImJpbmQiLCJldnQiLCJrZXkiLCJjbG9zZSIsInNldEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjb250YWlucyIsIm9wZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX3BvcHVwRm9ybSIsIl9nZXRJbnB1dFZhbHVlcyIsImlucHV0cyIsImlucHV0VmFsdWVzIiwibmFtZSIsInZhbHVlIiwicmVzZXQiLCJwcm9maWxlRWRpdE9wZW4iLCJwcm9maWxlTW9kYWxDbG9zZSIsInByb2ZpbGVFZGl0Rm9ybSIsImltYWdlTW9kYWwiLCJjYXJkQWRkQnV0dG9uIiwiY2FyZEFkZENsb3NlIiwiY2FyZEFkZEZvcm0iLCJpbWFnZUNsb3NlQnV0dG9uIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJmb3JtU2VsZWN0b3IiLCJjYXJkUHJldmlldyIsIl90aXRsZSIsIl9pbWFnZSIsImxpbmsiLCJzcmMiLCJhbHQiLCJjcmVhdGVDYXJkIiwiY2FyZCIsImRhdGEiLCJjYXJkU2VsZWN0b3IiLCJfbmFtZSIsIl9saW5rIiwiX2FsdCIsIl9oYW5kbGVJbWFnZUNsaWNrIiwiaGFuZGxlSW1hZ2VDbGljayIsIl9jYXJkU2VsZWN0b3IiLCJlbGVtZW50IiwiX2hhbmRsZUxpa2VCdXR0b24iLCJfaGFuZGxlRGVsZXRlQnV0dG9uIiwidG9nZ2xlIiwiX2dldFRlbXBsYXRlIiwiY29udGVudCIsImNsb25lTm9kZSIsImdldFZpZXciLCJhZGRGb3JtVmFsaWRhdG9yIiwiYWRkZWRpdEZvcm1WYWxpZGF0b3IiLCJ1c2VySW5mbyIsIm5hbWVTZWxlY3RvciIsInRpdGxlU2VsZWN0b3IiLCJfbmFtZUVsZW1lbnQiLCJfZGVzY3JpcHRpb25FbGVtZW50IiwiZ2V0VXNlckluZm8iLCJkZXNjcmlwdGlvbiIsInNldFVzZXJJbmZvIiwiX3JlZjIiLCJlZGl0Rm9ybVBvcHVwIiwiYWRkQ2FyZFBvcHVwIiwic2VjdGlvbiIsImFkZEl0ZW0iLCJlbGVtZW50Q29udGFpbmVyIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiaXRlbSIsInByZXBlbmQiLCJyZW5kZXJJdGVtcyIsIml0ZW1zIiwib3BlblByb2ZpbGVFZGl0Iiwib3BlbkNhcmRBZGQiXSwic291cmNlUm9vdCI6IiJ9