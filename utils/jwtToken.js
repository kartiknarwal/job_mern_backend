export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();

    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // only true in deployed env
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // important for cross-origin cookies
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        message,
        token,
    });
};
