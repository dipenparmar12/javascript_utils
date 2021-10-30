function storageStatus(name) {
    return !!localStorage.getItem(name);
}

function setState(name, value, parse = true) {
    localStorage.setItem(name, value);
    return parse
        ? JSON.parse(localStorage.getItem(name))
        : localStorage.getItem(name);
}

function getState(name, setDefaultValue = null, parse = true) {
    if (localStorage.getItem(name) === null) {
        console.log("Initial::", localStorage.getItem(name));
        localStorage.setItem(name, setDefaultValue);
    }
    return parse
        ? JSON.parse(localStorage.getItem(name))
        : localStorage.getItem(name);
}

