let myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  let closeButton = document.createElement("button");
  let txt = document.createTextNode("\u00D7");
  closeButton.className = "close button float-right";
  closeButton.appendChild(txt);
  myNodelist[i].appendChild(closeButton);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// // Add a "checked" symbol when clicking on a list item
// let list = document.querySelector('#myUL');
// let checkedButton= document.createElement("button");
// list.addEventListener('click', ev=> {
//   if (ev.target.tagName === 'li') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
// for (i = 0; i < list.length; i++) {
//     checkedButton.className = "checked button float-right";
//     checkedButton.appendChild(txt);
//     myNodelist[i].appendChild(checkedButton);
// };
// let checked = document.getElementsByClassName("checked");
// var i;
// for (i = 0; i < checked.length; i++) {
//   checked[i].onclick = function() {
//     let div = this.parentElement;
//     div.style.display = "none";
//   }
// }
//
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// add an edit button
let edit = document.querySelector('#myUL');
let editButton= document.createElement("button");
editButton.addEventListener('click', e=>{
  for (i = 0; i < list.length; i++) {
      editButton.className = "checked button float-right";
      editButton.appendChild(txt);
      myNodelist[i].appendChild(checkedButton);
  };
});


// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let closeButton = document.createElement("closeButton");
  var txt = document.createTextNode("\u00D7");
  closeButton.className = "close";
  closeButton.appendChild(txt);
  li.appendChild(closeButton);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// scrap all this nonsense it is all over the place
