//("Task No: 13");
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transports = ["Kawasaki H2r", "Lamborghini Sian", "Cervelo Bicycle"];
transports.forEach(function (transports) {
    console.log("I would like to own a ".concat(transports, "."));
});
//("Task No: 14");
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guests = ["Mark Zuckerberg", "Elon Musk", "Bill Gates"];
Guests.forEach(function (Guests) {
    console.log("Dear ".concat(Guests, ", would you like to join me for dinner?"));
});
//("Task No: 14");
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var unableToAttend = "Bill Gates";
console.log("".concat(unableToAttend, " can't make it to dinner."));
//Replace the guest
var newGuest = "Steve Jobs";
Guests[Guests.indexOf(unableToAttend)] = newGuest;
//New invitations
Guests.forEach(function (Guests) {
    console.log("Dear ".concat(Guests, ", would you like to join me for dinner?"));
});
