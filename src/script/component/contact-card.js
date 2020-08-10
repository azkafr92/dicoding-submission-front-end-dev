class ContactCard extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <div class="profile">
                <img src="src/assets/profile-pic.jpg" alt="profile-pic">
                <ul>
                    <li>Azka Fadhli Ramadhan</li>
                    <li>+62 852 1370 6956</li>
                    <li>azkafr92@gmail.com</li>
                </ul>
            </div>
        `;
    }
    disconnectedCallback() {

    }
    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }
    static get observedAttributes() {
        return []
    }
}

customElements.define('contact-card', ContactCard);