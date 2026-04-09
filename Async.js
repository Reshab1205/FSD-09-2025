console.log("Hello");

setTimeout(() => {
  console.log("Ist");
  setTimeout(() => {
    console.log("2nd");
    setTimeout(() => {
      console.log("3rd");
    }, 1000);
  }, 1000);
}, 1000);

setTimeout(() => {
  console.log("4th");
});

Promise.resolve().then(() => console.log("Promise"));
console.log("Bye");
