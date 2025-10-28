export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const descToBullets = (md) => {
  return md
    .split('\n')                           // split by lines
    .map(line => line.trim())              // remove extra spaces
    .filter(line => line.startsWith('-'))  // only keep dash lines
    .map(line => line.replace(/^-\s*/, '')) // remove the dash and space
    .filter(Boolean);                      // remove any empties
}