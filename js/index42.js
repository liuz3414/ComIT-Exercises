let message = "Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";
console.log("------ALL UPPER CASE-------\n" + message.toUpperCase());
console.log("\n\n\n--------ALL LOWER CASE----------\n" + message.toLowerCase());

let splitIndex = message.indexOf("Cline sold the rights to publish the novel in June 2010,");
let leftMessage = message.substring(0, splitIndex).toUpperCase();
let rightMessage = message.substring(splitIndex, message.length).toLowerCase();
let newMessage = leftMessage.concat(rightMessage);
console.log(`\n\n\n----------UPPER AND LOWER----------\n${newMessage}`);
console.log(`The message has ${newMessage.length} characters long`);