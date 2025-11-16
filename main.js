const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://4rbgp5efwvng6ssadkws7uffle0cyatr.lambda-url.ap-southeast-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `${data}`;
}
updateCounter();