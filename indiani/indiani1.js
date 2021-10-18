let sloka1 = ""
let sloka2 = ""
let pisen  = ""
let konec  = ""

for (let i = 1; i <= 10; i++) {

  konec = " Indian"
  if ( i < 10 ) {
    if ( i % 3 ) {
      konec = ", "
    } else {
      konec += "s\n"
    }
  } else {
    konec += " boy"
  }

  sloka1 +=      i + " little" + konec
  sloka2 += 11 - i + " little" + konec
}

pisen = sloka1 + "s.\n\n" + sloka2 + ".\n"

console.log(pisen)
