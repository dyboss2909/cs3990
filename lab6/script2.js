function login() {
    const login = prompt("Enter your login:");
    let password;
    let attempts = 0;

    if (login.toLowerCase() === 'admin') {
        password = generateAdminPassword();
        attempts = 2;
        console.log(password);
    } else if (login.toLowerCase() === 'designer') {
        password = '111';
        attempts = 3;
    } else if (login.toLowerCase() === 'tester') {
        password = '222';
        attempts = 3;
    } else {
        alert("No such user");
        return;
    }

    let isCorrect = false;
    while (attempts > 0 && !isCorrect) {
        const enteredPassword = prompt("Enter your password:");
        if (enteredPassword === password) {
            isCorrect = true;
        } else {
            attempts--;
            alert("Incorrect password. Attempts left: " + attempts);
        }
    }

    if (isCorrect) {
        if (login.toLowerCase() === 'admin') {
            handleAdmin();
        } else if (login.toLowerCase() === 'designer') {
            handleDesigner();
        } else if (login.toLowerCase() === 'tester') {
            handleTester();
        }
    } else {
        alert("Access denied");
    }
}

function generateAdminPassword() {
    let password = '';
    for (let i = 0; i < 6; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return password;
}

function handleAdmin() {
    const age = parseInt(prompt("Enter your age:"));
    const yearOfAdmission = parseInt(prompt("Enter your year of admission to NWP:"));
    const currentYear = new Date().getFullYear();
    const graduationYear = yearOfAdmission + 4;

    alert(`You will be ${age + (graduationYear - currentYear)} years old when you receive your bachelor's degree in CS in ${graduationYear}`);
}

function handleDesigner() {
    const numPortfolios = parseInt(prompt("Enter the number of available portfolios:"));
    const birthYear = parseInt(prompt("Enter your year of birth:"));
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (age >= 14 && age <= 18 && numPortfolios >= 5 && numPortfolios <= 10) {
        alert("You are given a 10% discount on an optional course on Adobe XD");
    } else if (age > 18 && numPortfolios >= 10 && numPortfolios <= 20) {
        alert("You are given a 7% discount on an optional course on Adobe XD");
    } else {
        alert("No discount available");
    }
}

function handleTester() {
    const numPortfolios = parseInt(prompt("Enter the number of available portfolios:"));
    const birthYear = parseInt(prompt("Enter your year of birth:"));
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (age >= 14 && age <= 18 && numPortfolios >= 5 && numPortfolios <= 10) {
        alert("You are given a 10% discount on the QA Pro course");
    } else if (age > 18 && numPortfolios >= 10 && numPortfolios <= 20) {
        alert("You are given a 7% discount on the QA Pro course");
    } else {
        alert("No discount available");
    }
}

document.getElementById('logInButton').addEventListener('click', login);