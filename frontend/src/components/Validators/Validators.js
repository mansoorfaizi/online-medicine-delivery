export const firstNameValidator = (data) => {
    let name = new RegExp('[A-Z][a-z]');
    if (data != '') {
        if (!data.match(/[0-9]/)) {
            if (name.test(data)) {
                return true;
            } else {
                return 'First letter of first_name must be capital letter';
            }
        } else {
            return 'Here must not be number';
        }
    } else {
        return 'First_name must not be empty';
    }
};

export const passwordValidator = (data) => {
    let password = new RegExp('[A-Z][a-z]');
    if (data != '') {
        if (password.test(data)) {
            if (data.match(/[0-9]/)) {
                if (data.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=]/)) {
                    let length = data.length;
                    if (length >= 8) {
                        return true;
                    } else {
                        return 'Password must more then 8 character';
                    }
                } else {
                    return 'Password at less must have one special character ';
                }
            } else {
                return 'Password must contain number';
            }
        } else {
            return 'Password at less must have one capital and one lower case letter';
        }
    } else {
        return 'Password must not be empty';
    }
};
