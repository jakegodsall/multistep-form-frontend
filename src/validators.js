const isName = (name) => {
    const re = /^[a-zA-Z -]+$/;
    return re.exec(name);
};

const isEmail = (email) => {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
};

export { isName };
export { isEmail };
