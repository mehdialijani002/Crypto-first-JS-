$(document).ready(function () {
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    showDuration: "1000",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
});
function myFunction1() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo1").innerHTML;
}
function myFunction2() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo2").innerHTML;
}
function myFunction3() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo3").innerHTML;
}
function myFunction4() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo4").innerHTML;
}
function myFunction5() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo5").innerHTML;
}
function myFunction6() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo6").innerHTML;
}

const demo = document.querySelector("#demo-none");
demo.addEventListener("click", function () {
  form.reset();
});
function checkOutput() {
  const to = document.querySelector("#to");
  const full = document.querySelectorAll(".bg-danger");
  const amountInput = document.getElementById("amount");

  if (amountInput.value === "") {
    toastr.error("لطفا مقدار مورد نظر را وارد کنید");
    return;
  }

  let selectedOption = to.value;
  let selectedOption1 = full.value;

  let isValidOption = false;

  full.forEach((option) => {
    if (option.value === selectedOption) {
      isValidOption = true;
    }
  });
  if (!isValidOption) {
    toastr.error("لطفا ارز دیجیتال مورد نظر خود را وارد کنید.");
    return;
  }
  if (isValidOption && amountInput.value !== "") {
    toastr.success("تبدیل شما با موفقیت انجام شد");
  }
}
const lastInput = document.getElementById("success");
const form = document.querySelector(".form");
lastInput.addEventListener("click", function () {
  form.reset();
});
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
