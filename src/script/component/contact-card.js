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
                <img src="http://1.gravatar.com/avatar/19cdf69dff222130fb875edab51f7c7c" alt="profile-pic">
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