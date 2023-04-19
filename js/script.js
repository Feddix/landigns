const body = document.querySelector("body");

const switchMode = document.querySelector('.switchMode');
switchMode.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    
  } else {
    body.classList.add("dark");
    ;

  }
});
const text = document.querySelectorAll("p");

switchMode.addEventListener("click", function () {
  if(body.classList.contains("dark")){
    text.style.color = 'black';
  } else {
    text.style.color = 'white';

  }
}
)


darkmode_dark.addEventListener('click', function () {
  if (darkmode_dark.classList.contains("darkmode_dark")) {
    darkmode_dark.classList.remove("darkmode_dark");
    like_dark.classList.remove("like_dark");
    insta_dark.classList.remove("insta_dark");
    faceb_dark.classList.remove("faceb_dark");
  } else {
    darkmode_dark.classList.add("darkmode_dark");
    like_dark.classList.add("like_dark");
    insta_dark.classList.add("insta_dark");
    faceb_dark.classList.add("faceb_dark");

  }
})


