// variables:
let userName = document.querySelector("#user__name");
let userPost = document.querySelector("#user__post");
let userSubmitButton = document.querySelector(".submit__button");
let saveButton = document.querySelector(".save__button");
// ui layout:
let mainArea = document.querySelector(".main__area");
// let nameUi = document.querySelector(".name");
// let postUi = document.querySelector(".post");
let mainArr = [];
let currentIndex;
saveButton.style.display = "none";

userSubmitButton.addEventListener("click", () => {
  mainArr.push({ name: userName.value, post: userPost.value });
  userName.value = "";
  userPost.value = "";
  postme();
  console.log(mainArr);
});

function postme() {
  mainArea.innerHTML = "";
  mainArr.map((item) => {
    mainArea.innerHTML += ` <div class="box"> <div class="name__box"> <h1 class="name"> ${item.name} </h1> </div> <div class="post__box"> <p class="post">${item.post}</p> </div> <div class="button__box"> <button class="button__item delete__button" type="button">Delete</button> <button class="button__item edit__button" type="button">Edit</button> <button class="button__item share__button" type="button">Share</button> </div> </div> `;
  });

  // Delete Button:
  let deleteButton = document.querySelectorAll(".delete__button");
  let deleteArr = Array.from(deleteButton);
  deleteArr.map((buttonItem, index) => {
    buttonItem.addEventListener("click", () => {
      mainArr.splice(index, 1);
      postme();
      console.log(mainArr);
    });
  });

  // Edit Button:
  let editButton = document.querySelectorAll(".edit__button");
  let editArr = Array.from(editButton);
  editArr.map((buttonItem, index) => {
    buttonItem.addEventListener("click", () => {
      currentIndex = index;
      userName.value = mainArr[index].name;
      userPost.value = mainArr[index].post;
      userSubmitButton.style.display = "none";
      saveButton.style.display = "block";
      postme();
      console.log(mainArr);
    });
  });

  // Save Button:
  saveButton.addEventListener("click", () => {
    saveButton.style.display = "none";
    userSubmitButton.style.display = "block";
    mainArr.splice(currentIndex, 1, {
      name: userName.value,
      post: userPost.value,
    });
    userName.value = "";
    userPost.value = "";
    postme();
    console.log(mainArr);
  });

  // share button:
  let shareButton = document.querySelectorAll(".share__button");
  let shareArr = Array.from(shareButton);
  shareArr.map((shareItem, shareIndex, wholeArr) => {
    shareItem.addEventListener("click", () => {
      let dataName = mainArr[shareIndex].name;
      let dataPost = mainArr[shareIndex].post;
      mainArr.splice(wholeArr.length, 0, {
        name: dataName,
        post: dataPost,
      });
      postme();
      console.log(mainArr);
    });
  });
}
