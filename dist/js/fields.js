export { FieldType, InputField, TextAreaField, SelectField, CheckboxField };
var FieldType;
(function (FieldType) {
    FieldType["TEXT"] = "text";
    FieldType["TEXTAREA"] = "textarea";
    FieldType["DATE"] = "date";
    FieldType["EMAIL"] = "email";
    FieldType["SELECT"] = "select";
    FieldType["CHECKBOX"] = "checkbox";
})(FieldType || (FieldType = {}));
class FieldLabel {
    constructor(field) {
        this.field = field;
    }
    generate() {
        let label = document.createElement("label");
        label.htmlFor = this.field.name;
        label.innerHTML = this.field.label;
        return label;
    }
}
class InputField {
    constructor(name, label, type) {
        this.name = name;
        this.label = label;
        this.element = document.createElement("input");
        this.element.name = this.element.id = name;
        this.element.type = this.type = type;
    }
    render(parent) {
        let fieldLabel = new FieldLabel(this);
        let labelElement = fieldLabel.generate();
        parent.appendChild(labelElement);
        parent.appendChild(this.element);
    }
    getValue() {
        return this.element.value;
    }
}
class TextAreaField {
    constructor(name, label) {
        this.type = FieldType.TEXTAREA;
        this.name = name;
        this.label = label;
        this.element = document.createElement("textarea");
        this.element.name = this.element.id = name;
    }
    render(parent) {
        let fieldLabel = new FieldLabel(this);
        let labelElement = fieldLabel.generate();
        parent.appendChild(labelElement);
        parent.appendChild(this.element);
    }
    getValue() {
        return this.element.value;
    }
}
class SelectField {
    constructor(name, label, options) {
        this.type = FieldType.TEXTAREA;
        this.name = name;
        this.label = label;
        this.element = document.createElement("select");
        this.element.name = this.element.id = name;
        for (const optionValue of options) {
            let optionElement = document.createElement("option");
            optionElement.value = optionElement.text = optionValue;
            this.element.appendChild(optionElement);
        }
    }
    render(parent) {
        let fieldLabel = new FieldLabel(this);
        let labelElement = fieldLabel.generate();
        parent.appendChild(labelElement);
        parent.appendChild(this.element);
    }
    getValue() {
        return this.element.value;
    }
}
class CheckboxField {
    constructor(name, label) {
        this.type = FieldType.CHECKBOX;
        this.name = name;
        this.label = label;
        this.element = document.createElement("input");
        this.element.name = this.element.id = name;
        this.element.type = this.type.toString();
    }
    render(parent) {
        let fieldLabel = new FieldLabel(this);
        let labelElement = fieldLabel.generate();
        parent.appendChild(labelElement);
        parent.appendChild(this.element);
    }
    getValue() {
        return this.element.value;
    }
}
