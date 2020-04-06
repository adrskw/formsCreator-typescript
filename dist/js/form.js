export { Form };
class Form {
    constructor(fields) {
        this.fields = fields;
    }
    render(parent) {
        const formElement = document.createElement("form");
        for (const field of this.fields) {
            // wrap field with div
            const div = document.createElement("div");
            div.className = "form-element";
            field.render(div);
            formElement.appendChild(div);
        }
        const button = document.createElement("button");
        button.type = "submit";
        button.innerHTML = "Wyślij";
        button.addEventListener("click", (e) => {
            console.log(this.getValue());
            e.preventDefault();
        });
        formElement.appendChild(button);
        parent.appendChild(formElement);
    }
    getValue() {
        let resultValues = {};
        for (const field of this.fields) {
            resultValues[field.type + "_" + field.name] = field.getValue();
        }
        return resultValues;
    }
}
