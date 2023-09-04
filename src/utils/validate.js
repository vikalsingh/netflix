export const checkSigninValidData = (email, password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";
    

    return null;
};

export const checkSignupValidData = (name, email, password) => {
    const isNameValid = /^[a-zA-Z ]+$/.test(name);
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isNameValid) return "Name is not valid";
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";
    

    return null;
};