function temperoalDeadZoneWithoutSetTimeout() {
    setTimeout(() => {
      console.log(x);
      console.log(y);
    }, 1000);
    var x = 1;
    let y = 2;
}
temperoalDeadZoneWithoutSetTimeout();

function temperoalDeadZoneSetTimeout() {
    console.log(x);
    console.log(y);
    var x = 1;
    let y = 2;
}
temperoalDeadZoneSetTimeout();