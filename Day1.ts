//("Task No: 02");
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let Name: string = "Minhaj"; //PersonName
console.log(`Hello ${Name}, would you to learn some typescript today?`); //PersonalMessage

//("Task No: 02");
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(Name.charAt(0).toUpperCase()+Name.slice(1).toLowerCase());