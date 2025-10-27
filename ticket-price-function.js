let visitorAge = 12;
let isStudent = true;

function printTicketPrice(visitorAge, isStudent) {
  if (visitorAge <= 6) {
    console.log("Ieeja bez maksas.");
  } else if (isStudent) {
    console.log("Biļetes cena: 5 EUR.");
  } else {
    console.log("Biļetes cena: 10 EUR.");
  }
}

printTicketPrice(12, true);  
printTicketPrice(35, false);  