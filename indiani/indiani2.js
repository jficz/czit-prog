let indiani = [ "One", "two", "three", "Four", "five", "six", "Seven", "eight", "nine", "Ten" ]

let sloka1 = ""
let sloka2 = ""
let pisen  = ""
let konec  = ""

for (let i = 0; i < 10; i++) {

  konec = " Indian"
  if ( i < 9 ) {
    if ( (i + 1) % 3 ) {
      konec = ", "
    } else {
      konec += "s\n"
    }
  } else {
    konec += " boy"
  }

  sloka1 += indiani[i]   + " little" + konec
  sloka2 += indiani[9-i] + " little" + konec
}

pisen = sloka1 + "s.\n" + sloka2 + "."

console.log(pisen)
