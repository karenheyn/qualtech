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

const message = document.getElementById("body").value;
const subject = document.getElementById("subject").value;
const button = document.getElementById("submit");

function sendMail() {
  const message = document.getElementById("body").value;
  const subject = document.getElementById("subject").value;
  window.open(`mailto:qualtechar@gmail.com?subject=${subject}&body=${message}`);
  submit();
}
