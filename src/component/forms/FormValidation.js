class FormValidation {

    errorMsg(field, msg) {
        console.log("field : "+msg, field);
        let f = (field && field.dirty && field.invalid) ? msg : "";
        return f;
    }

    validate(e, validations, value) {
        const res = !validations(value);
        console.log(value, res)
        if(!e){ e = {}; }
        e.dirty = true;
        e.invalid = res;
        this.setState(e);
        console.log(e);
    }

    require = (value) => {
        return (value) ? true : false;
    }

    compose = (rules) => {

    }

    rangeNumValue = (min, max) => {
        return (val) =>  (val > min && val < max);
    }


    dirtyTouch(e){
        if(!e){ e = {}; }
        e.dirty = true;
        this.setState(e);
    }

}
const validator = new FormValidation();
export default validator;