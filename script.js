const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

const button = document.getElementById("submit");

function sendMail() {
  const message = document.getElementById("body").value;
  const subject = document.getElementById("subject").value;
  window.open(`mailto:qualtechar@gmail.com?subject=${subject}&body=${message}`);
  submit();
}
const menu_btn = document.querySelector(".menu-btn");
const close_btn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const drawer = menu.querySelector(".drawer");
const blank = menu.querySelector(".blank");
const close = () => {
  menu.classList.remove("blur");
  drawer.classList.remove("drawer-visible");
};

menu_btn.addEventListener("click", (e) => {
  menu.classList.add("blur");
  drawer.classList.add("drawer-visible");
});

close_btn.addEventListener("click", (e) => {
  close();
});


Array.from(drawer.querySelectorAll("a")).forEach((element) => {
  element.addEventListener("click", () => {
    close();
  });
});
menu.addEventListener('click', (e) => {
  menu.classList.remove("blur");
  drawer.classList.remove("drawer-visible");
});