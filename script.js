function passCheck(data) {
    var passCheck = document.getElementsByClassName("password-check")
    const lowerCase = new RegExp('(?=.*[a-z])');
    const upperCase = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])');
    const specialChar = new RegExp('(?=.*[!@#\$%\^&\*])');
    const eightChar = new RegExp('(?=.{8,})');

    if (eightChar.test(data)){
        passCheck[0].style.color = "green";
    } else {
        passCheck[0].style.color = "grey";
    }
    if (lowerCase.test(data)){
        passCheck[1].style.color = "green";
    } else {
        passCheck[1].style.color = "grey";
    }
    if (upperCase.test(data)){
        passCheck[2].style.color = "green";
    } else {
        passCheck[2].style.color = "grey";
    }
    if (number.test(data)){
        passCheck[3].style.color = "green";
    } else {
        passCheck[3].style.color = "grey";
    }
    if (specialChar.test(data)){
        passCheck[4].style.color = "green";
    } else {
        passCheck[4].style.color = "grey";
    }

}