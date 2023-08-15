window.onload = () => {
  const flashCards = document.querySelector(".flashcards");
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");
  const newCards = document.querySelector("#new_cards");
  const delCard = document.querySelector("#del_cards");
  const save = document.querySelector("#save");
  const del = document.querySelector("#delete");
  const createBox = document.querySelector(".create_box");
  let contentArray = [];

  del.addEventListener("click", () => {
    createBox.style.display = "none";
  });

  newCards.addEventListener("click", () => {
    createBox.style.display = "flex";
  });

  save.addEventListener("click", () => {
    createFlashBox();
  });

  delCard.addEventListener("click", () => {
    clearFlashcard();
  });

  // CASE 1:(Save button. once save button is clicked, i took all input values and save them in an object(flashCardInfo). then i pushed it into an array with name contentArray[]. After that, i took the values pushed into the array which is located at the first index of contentArray(i.e contentArray[contentArray.length -1]) and passed it into divMaker function. divMaker() is a function that creates a dynamic div and two h2 elements and transfers the object saved at the first index of the contentArray to the function. );

  function createFlashBox() {
    const flashCardInfo = {
      myQuestion: question.value,
      myAnswer: answer.value,
    };

    contentArray.push(flashCardInfo);

    divMaker(contentArray[contentArray.length - 1]);
    question.value = "";
    answer.value = "";
  } // End of CASE 1;

  //CASE 1.1 using forEach array method to loop through the array calling a function divMaker to create dynamic div and h2 tags.
  contentArray.forEach(divMaker);

  function divMaker(text) {
    let div = document.createElement("div");
    let h2_question = document.createElement("h2");
    let h2_answer = document.createElement("h2");
    let delbutton = document.createElement("button");

    delbutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    delbutton.setAttribute("class", "delbutton");

    h2_question.innerHTML = text.myQuestion;

    h2_question.setAttribute(
      "style",
      "border:none; border-top:1px solid #fff; padding:5px; margin-top:40px"
    );

    h2_answer.innerHTML = text.myAnswer;

    h2_answer.setAttribute(
      "style",
      "padding:5px; color:white; margin-top:30px; display:none; text-align:center; font-size:1rem"
    );

    div.className = "flashcard";
    div.appendChild(delbutton);
    div.appendChild(h2_question);
    div.appendChild(h2_answer);
    flashCards.appendChild(div);

    // adding event() to the toggle answer's visibility;
    div.addEventListener("click", () => {
      if (h2_answer.style.display === "none") {
        h2_answer.style.display = "block";
      } else {
        h2_answer.style.display = "none";
      }
    }); // End.

    // adding event() to created delbutton.
    delbutton.addEventListener("click", () => {
      div.style.display = "none";
    }); //End.
  } //End of CASE 1.1;

  //CASE 2: (A function added to delete button thats clears the flashCards and array);
  function clearFlashcard() {
    flashCards.innerHTML = "";
    contentArray = [];
  } //End of CASE 2;
}; //End of General()✅
