// input fields:
let userName = document.querySelector("#user__name");
let userPost = document.querySelector("#user__post");
let userSubmitButton = document.querySelector(".submit__button");

// inner html:
let poster = document.querySelector(".name");
let postDetails = document.querySelector(".post");
// post buttons:
let editButton = document.querySelector(".edit__button");
let shareButton = document.querySelector(".share__button");

let mainArea = document.querySelector(".main__area");
let mainArray = [];

userSubmitButton.addEventListener("click", () => {
  mainArray.push({ name: `${userName.value}`, post: `${userPost.value}` });
  userName.value = "";
  userPost.value = "";
  postme();
  console.log(mainArray);
});

function postme() {
  mainArea.innerHTML = "";
  mainArray.map((item) => {
    mainArea.innerHTML += ` <div class="box"> <div class="name__box"> <h1 class="name"> ${item.name} </h1> </div> <div class="post__box"> <p class="post">${item.post}</p> </div> <div class="button__box"> <button class="button__item delete__button" type="button">Delete</button> <button class="button__item edit__button" type="button">Edit</button> <button class="button__item share__button" type="button">Share</button> </div> </div> `;
  });

  // Delete Button:
  let deleteButton = document.querySelectorAll(".delete__button");
  let deleteArr = Array.from(deleteButton);
  deleteArr.map((buttonItem, index) => {
    buttonItem.addEventListener("click", () => {
      mainArray.splice(index, 1);
      postme()
      console.log(mainArray);
    });
  });
}
