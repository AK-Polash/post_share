// variables:
let userName = document.querySelector("#user__name");
let userPost = document.querySelector("#user__post");
let AddPostButton = document.querySelector(".submit__button");
let saveButton = document.querySelector(".save__button");

// ui layout:
let parentUi = document.querySelector(".main__area");
let mainArr = [];
let currentIndex;
let axis;
let boxUi;
let boxUiArr;

saveButton.style.display = "none";

// Add post Button:
AddPostButton.addEventListener("click", () => {
  mainArr.push({ name: userName.value, post: userPost.value });
  userName.value = "";
  userPost.value = "";
  postme();
});

// Save Button:
saveButton.addEventListener("click", () => {
  saveButton.style.display = "none";
  AddPostButton.style.display = "block";
  mainArr.splice(currentIndex, 1, {
    name: userName.value,
    post: userPost.value,
  });
  userName.value = "";
  userPost.value = "";
  userName.style.color = "black";
  userPost.style.color = "black";
  window.scrollTo({ top: axis, behavior: "smooth" });
  postme();
});

function postme() {
  parentUi.innerHTML = "";
  mainArr.map((item) => {
    parentUi.innerHTML += ` <div class="box"> <div class="name__box"> <h1 class="name"> ${item.name} </h1> </div> <div class="post__box"> <p class="post">${item.post}</p> </div> <div class="button__box"> <button class="button__item delete__button" type="button">Delete</button> <button class="button__item edit__button" type="button">Edit</button> <button class="button__item share__button" type="button">Share</button> </div> </div> `;
  });

  // Delete Button:
  let deleteButton = document.querySelectorAll(".delete__button");
  let deleteArr = Array.from(deleteButton);
  deleteArr.map((buttonItem, index) => {
    buttonItem.addEventListener("click", () => {
      mainArr.splice(index, 1);
      postme();
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
      AddPostButton.style.display = "none";
      saveButton.style.display = "block";
      userName.style.color = "crimson";
      userPost.style.color = "crimson";
      window.scrollTo({ top: 0, behavior: "smooth" });
      axis = window.pageYOffset;

      boxUi = document.querySelectorAll(".box");
      boxUiArr = Array.from(boxUi);
      boxUiArr.map((boxItem) => {
        boxItem.classList.remove("active");
        boxUiArr[index].classList.add("active");
      });
      // NOTE: code won't run these CSS if the postme() function is called here as it will overwrite Ui html code.
      // postme();
    });
  });

  // Share Button:
  let shareButton = document.querySelectorAll(".share__button");
  let shareArr = Array.from(shareButton);
  shareArr.map((shareItem, shareIndex, wholeArr) => {
    shareItem.addEventListener("click", () => {
      let dataName = mainArr[shareIndex].name;
      let dataPost = mainArr[shareIndex].post;
      // NOTE: here i'm using the splice() method instead of push() method only for fun, though the simple proper way is to use push() method.
      mainArr.splice(wholeArr.length, 0, {
        name: dataName,
        post: dataPost,
      });
      postme();
      // scrollLast();
    });
  });
}

// function scrollLast() {
//   let lastChildParentUi = parentUi.lastElementChild;
//   let viewPort = lastChildParentUi.getBoundingClientRect();
//   window.scrollTo({ top: viewPort.y, behavior: "smooth" });
//   console.log(viewPort.y);
// }
