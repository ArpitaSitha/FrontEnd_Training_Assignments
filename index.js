



const { default: jsConvert } = require('js-convert-case');
const uuid = require('uuid');
const usersArray = [
  { uname: "ARPITA", email: "Arpita@gmail.com", cartId: "" },
  { uname: "STEVE", email: "STevE@gmail.com", cartId: "" },
  { uname: "MAX", email: "MAX@gmail.com", cartId: "" },
  { uname: "SMITH", email: "SMITH@gmail.com", cartId: "" },
 
  // Add more user objects as needed
];
 
// Function to convert a string to the desired format (User Id, Email, Cart Id)
function formatUserDetails(user) {
  const userId = jsConvert.toHeaderCase(user.uname);
  const userEmail = user.email.toLowerCase();
  const cartId = uuid.v4().toUpperCase();
 
  return `User Id = ${userId}, Email = ${userEmail}, Cart Id = ${cartId}`;
}
 
// Loop through the user array and update the cartId property
for (const user of usersArray) {
  user.cartId = uuid.v4();
}
 
// Display user details in the desired format
usersArray.forEach(user => {
  console.log(formatUserDetails(user));
});
