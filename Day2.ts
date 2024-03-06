//("Task No: 04");
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log(`Prophet MUHAMMAD ( Peace Be Upon Him) Said: "The best of houses is the house where an orphan gets love and kindness" `);

//("Task No: 05");
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person: string = "Prophet MUHAMMAD ( Peace Be Upon Him)";
let message: string = `${famous_person} Said: "The best of houses is the house where an orphan gets love and kindness"`;
console.log(message)

//("Task No: 06");
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let Name: string = "\t\n Minhaj \t\n";
console.log(Name);
console.log(Name.trim());

