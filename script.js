"strict mode";
const form = document.querySelector(".form");
const done = document.querySelector(".done");
const continew = document.querySelector(".continue");

const cardholderName = document.querySelector(".cardholder-name");
const cardholderNumber = document.querySelector(".cardholder-number");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year");
const cvvInput = document.querySelector(".cvv-code");
//// errors
const card_no_error = document.querySelector(".card-no-error");
const date_error = document.querySelector(".date-error");
const cvv_error = document.querySelector(".cvv-error");
const name_error = document.querySelector(".name-error");

/////
const Cardname = document.querySelector(".name");
const exp = document.querySelector(".exp");
const cvv = document.querySelector(".cvv");
const card_Numbers = document.querySelector(".card-numbers");

////////
////
let correct_card_number;
let cardnumber_joined;
let monthNumber;
let yearNumber;
let cvvNumber;

////////

const submitBtn = document.querySelector(".submit");
let cardNo;

///////

/////cardholder name

cardholderName.addEventListener("keyup", function (e) {
  cardholderName.style.border = "1px solid hsl(270, 3%, 87%)";
  name_error.textContent = "";
  Cardname.innerHTML = cardholderName.value.toUpperCase();
});

cardholderNumber.addEventListener("keyup", function (e) {
  cardnumber_joined = cardholderNumber.value.split(" ").join("");
  correct_card_number = Number(cardnumber_joined);

  if (cardholderNumber.value) {
    cardholderNumber.style.border = "1px solid hsl(270, 3%, 87%)";
    card_no_error.textContent = "";
    card_Numbers.innerHTML = cardholderNumber.value
      .split(" ")
      .join(`&nbsp;&nbsp; `);

    if (!correct_card_number) {
      card_no_error.textContent = `Wrong format, numbers only`;
    }

    console.log("yes");
    if (
      cardholderNumber.value.length === 4 ||
      cardholderNumber.value.length === 9 ||
      cardholderNumber.value.length === 14
    ) {
      cardholderNumber.value = cardholderNumber.value + " ";
    } else {
      return;
    }

    if (e.key === "Backspace") {
      cardholderNumber.value = cardholderNumber.value.trimEnd();
    }
  }
});
////////////
///////////
monthInput.addEventListener("keydown", function (e) {
  monthInput.style.border = "1px solid hsl(270, 3%, 87%)";
  date_error.textContent = "";
});
yearInput.addEventListener("keydown", function (e) {
  yearInput.style.border = "1px solid hsl(270, 3%, 87%)";
  date_error.textContent = "";
});
cvvInput.addEventListener("keydown", function (e) {
  cvvInput.style.border = "1px solid hsl(270, 3%, 87%)";
  cvv_error.textContent = "";
});

/////////////////

////////////

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // dates
  monthNumber = Number(monthInput.value);
  yearNumber = Number(yearInput.value);
  cvvNumber = Number(cvvInput.value);
  console.log(monthNumber);

  ///////////cards
  cardnumber_joined = cardholderNumber.value.split(" ").join("");
  correct_card_number = Number(cardnumber_joined);
  ///////////

  if (
    !cardholderNumber.value ||
    !monthInput.value ||
    !cardholderName.value ||
    !monthInput.value ||
    !yearInput.value ||
    !cvvInput.value
  ) {
    //// if name was blank
    if (!cardholderName.value) {
      name_error.textContent = `Field can't be blank`;
      cardholderName.style.border = "1px solid red";
    }

    //////number blank
    if (!cardholderNumber.value) {
      card_no_error.textContent = `can't be blank`;
      cardholderNumber.style.border = "1px solid red";
      console.log("empty");
    }

    ///////month
    if (!monthInput.value) {
      date_error.textContent = `Can't be blank`;
      monthInput.style.border = "1px solid red";
    }

    //year
    if (!yearInput.value) {
      date_error.textContent = `Can't be blank`;
      yearInput.style.border = "1px solid red";
    }

    if (!cvvInput.value) {
      cvv_error.textContent = `Can't be blank`;
      cvvInput.style.border = "1px solid red";
    }
  } else if (
    cardholderNumber.value &&
    cardholderNumber.value.length === 19 &&
    correct_card_number &&
    monthInput.value &&
    monthNumber &&
    monthNumber <= 31 &&
    yearNumber > 19 &&
    yearNumber < 28 &&
    yearNumber &&
    cardholderName.value &&
    monthInput.value &&
    yearInput.value &&
    cvvInput.value &&
    cvvNumber &&
    cvvInput.value.length === 3
  ) {
    Cardname.innerHTML = cardholderName.value.toUpperCase();
    card_Numbers.innerHTML = cardholderNumber.value
      .split(" ")
      .join(`&nbsp;&nbsp; `);
    exp.innerHTML = `${monthInput.value.padStart(2, "0")}/${yearNumber}`;

    cvv.innerHTML = cvvInput.value;

    form.style.transition = "all 1s";
    form.style.opacity = "0";
    setTimeout(() => {
      form.classList.add("none");
    }, 500);

    setTimeout(() => {
      done.classList.remove("none");

      done.style.transition = "all 1s";
      done.style.opacity = "1";
    }, 1000);
  } else {
    if (cardholderNumber.value.length !== 19) {
      card_no_error.textContent = `card number not complete`;
      //   card_no_error.textContent = `Wrong format, numbers only`;
      cardholderNumber.style.border = "1px solid red";
    }

    if (!correct_card_number) {
      card_no_error.textContent = `Wrong format, numbers only`;
    }

    if (monthNumber > 31) {
      date_error.textContent = `Invalid exp. date`;
      monthInput.style.border = "1px solid red";
    }

    if (yearNumber <= 21 || yearNumber > 20) {
      date_error.textContent = `Invalid exp. date`;
      yearInput.style.border = "1px solid red";
    }

    if (cvvInput.value.length !== 3) {
      cvv_error.textContent = `Invalid cvv`;
      cvvInput.style.border = "1px solid red";
    }
  }
});

///continue
continew.addEventListener("click", function (e) {
  e.preventDefault();
  cardholderName.value = "";
  cardholderNumber.value = "";
  monthInput.value = "";
  yearInput.value = "";
  cvvInput.value = "";

  card_Numbers.innerHTML = `0000 0000 0000 0000`;
  Cardname.innerHTML = `JANE APPLESEED`;
  cvv.innerHTML = `000`;
  exp.innerHTML = `00/00`;

  /////
  done.style.transition = "all 1s";
  done.style.opacity = "0";
  setTimeout(() => {
    done.classList.add("none");
  }, 500);

  setTimeout(() => {
    form.classList.remove("none");

    form.style.transition = "all 1s";
    form.style.opacity = "1";
  }, 1000);
});

/////            0000 &nbsp; 0000 &nbsp; 9000 &nbsp; 0000
