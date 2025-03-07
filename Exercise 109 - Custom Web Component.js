class MyComponent extends HTMLElement {
  connectedCallback() { this.innerHTML = '<p>Custom Component</p>'; }
}
customElements.define('my-component', MyComponent);