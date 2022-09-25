
export const nameOnlyLetters = "field  contain must be only Letters ";
export const notFound = "field is not found";
export const isEmail = "field must be email";
export const isNotExists = "email is not exists";
export const isDeciNum = "field must contain only float number";
export const exists = "email is exists";
export const changeEmail = " cane not change email ";
export const changePass = " cane not change password ";
export const changeUserId = " cane not change user_id ";
export const changeimgName = " cane not change imgName ";
export const isJWTToken = "field must be JWT token";
export function stringErrMessage(min, max) { return `field length must be more then ${min} and less ${max}`; }
export function integerErrMessage(min, max) { return `field must be more then ${min} and less ${max}`; }