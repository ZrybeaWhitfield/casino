// var button = document.querySelector('button').addEventListener('click', bet)
  var bet =  0

document.querySelectorAll('.pokerchips').forEach(num => num.addEventListener('click', addChips))

function addChips(e){
  var chip = Number(e.target.getAttribute('data-value'))

  if(chip == 1){
    bet += 1
  }else if (chip === 10) {
    bet += 10
  }else if (chip === 50) {
    bet += 50
  }else if (chip === 100) {
    bet += 100
  }
  // return bet
  console.log(bet);

  document.querySelector('h2').innerText = bet

}

var betAmount = document.querySelector('h2');

document.querySelector('#submitBet').addEventListener('click', spinWheel);


  function spinWheel() {
    betAmount.innerText

    console.log(betAmount.innerText);

    fetch(`/api?betAmount=${bet}`)
      //the ? is the parimeter for the bet being place
      .then(response => response.json())
      .then(data =>{


        //this is the data for the winner and results will be returned with console.log below
        console.log(data.winner);
        console.log(data.spinResults);

      })
    }


// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
// var trash = document.getElementsByClassName("fa-trash");
//
// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });
// Array.from(thumbDown).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('thumbDown', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });
//
// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
