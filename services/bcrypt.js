import bcrypt from "bcryptjs";

export async function hashPassword(plainPassword) {
    try {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(plainPassword, salt);
        return hashedPassword
    } catch (error) {
        console.log(error);
    }
}

 export async function checkValidPassword(plainPassword, hashedPassword) {
    try {
        const isValid = await bcrypt.compare(plainPassword, hashedPassword);
        return isValid;
    } catch (error) {
        console.error(error);
    }
}