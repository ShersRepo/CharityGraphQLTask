//Adds a comma to each line of the address to make addresses readable, last line should be followed by a postcode
//TBC - If postcode does not follow, comma should be removed
export function reformatAddress(address) {
  const formattedOutput = [];
  let addressLines = 0
  if(address) {
    addressLines = address.length;
  };
  
  address.forEach((line, i) => {
    if((i+1) === addressLines) {
      formattedOutput.push(line);
    } else formattedOutput.push(line + ', ');
  }); 
  return formattedOutput;
}