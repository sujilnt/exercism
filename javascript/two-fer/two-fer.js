/*
*  message function : the function that print message .
*  twoFer function : the function that checks the input and call the message function by the passing the input .
*  if the input has falsly values then empty message() function is called .
*  if the input has truthy values then message(name) function is called .
* */
const message = (name="you")=>`One for ${name}, one for me.`;
export const twoFer = (name) => Boolean(name) ? message(name) : message();
