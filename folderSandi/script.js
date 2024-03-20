script.js
var enterButton = document.getElementById("enter");
    var input = document.getElementById("userInput");
    var ul = document.querySelector("ul");
    var item = document.getElementsByTagName("li");

    function inputLength() {
      return input.value.length;
    }

    function listLength() {
      return item.length;
    }

    function createListElement() {
      var liText = input.value.trim();
      
      if (isDuplicate(liText)) {
        alert("Item already exists!");
        return;
      }

      var li = document.createElement("li");
      li.appendChild(document.createTextNode(liText));
      ul.appendChild(li);
      input.value = "";

      function crossOut() {
        li.classList.toggle("done");
      }

      li.addEventListener("click", crossOut);

      var dBtn = document.createElement("button");
      dBtn.appendChild(document.createTextNode("X"));
      li.appendChild(dBtn);
      dBtn.addEventListener("click", deleteListItem);

      function deleteListItem() {
        li.classList.add("delete");
      }
    }

    function isDuplicate(text) {
      for (var i = 0; i < listLength(); i++) {
        if (item[i].textContent.trim() === (text+'X')) {
          return true;
        }
      }
      return false;
    }

    function addListAfterClick() {
      if (inputLength() > 0) {
        createListElement();
      }
    }

    function addListAfterKeypress(event) {
      if (inputLength() > 0 && event.which === 13) {
        createListElement();
      }
    }

    enterButton.addEventListener("click", addListAfterClick);
    input.addEventListener("keypress", addListAfterKeypress);