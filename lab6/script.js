document.getElementById('logInButton').addEventListener('click', function() {
    const user = prompt("Enter your user type (admin, student, or other):");
    const userButtons = document.getElementById('userButtons');
    const message = document.getElementById('message');
    const imageContainer = document.getElementById('imageContainer');

    userButtons.innerHTML = '';
    message.innerHTML = '';
    imageContainer.innerHTML = '';

    if (user.toLowerCase() === 'admin') {
        userButtons.innerHTML = `
            <button onclick="sayHi()">Say Hi</button>
            <button onclick="favoriteAnimal()">Favorite animal</button>
        `;
    } else if (user.toLowerCase() === 'student') {
        userButtons.innerHTML = `<button onclick="sayHi()">Say Hi</button>`;
    } else {
        message.innerHTML = `<p>I don’t know you</p>`;
    }
});

function sayHi() {
    const language = prompt("Enter the abbreviation of the language you speak (Eng, Fr, De, Spa):");
    let greeting = '';

    switch (language) {
        case language.toLowerCase('eng'):
            greeting = 'Hello';
            break;
        case language.toLowerCase('fr'):
            greeting = 'Bonjour';
            break;
        case language.toLowerCase('de'):
            greeting = 'Hallo';
            break;
        case language.toLowerCase('spa'):
            greeting = 'Hola';
            break;
        default:
            greeting = 'Sorry, but I do not speak your language.';
            break;
    }

    alert(greeting);
}

function favoriteAnimal() {
    const birthYear = parseInt(prompt("Enter your year of birth:"));
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (age < 18) {
        alert("Content is not available due to age restrictions");
    } else if (age >= 18 && age <= 55) {
        const animal = prompt("Enter the name of your favorite animal (Cat, Dog, Frog, Mouse):");
        let imageUrl = '';

        switch (animal) {
            case animal.toLowerCase('cat'):
                imageUrl = 'https://plus.unsplash.com/premium_photo-1673967770669-91b5c2f2d0ce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBjYXR8ZW58MHx8MHx8fDA%3D';
                break;
            case animal.toLowerCase('dog'):
                imageUrl = 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg';
                break;
            case animal.toLowerCase('frog'):
                imageUrl = 'https://media.istockphoto.com/id/175397603/photo/frog.jpg?s=612x612&w=0&k=20&c=EMXlwg5SicJllr7gnSFUUjzwCGa1ciLjYD1bk8NvO2E=';
                break;
            case animal.toLowerCase('mouse'):
                imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRcY9lPXyrNTI7fFkMAOam_0_DU-H52Ywtg&s';
                break;
            default:
                alert("Invalid animal name");
                imageUrl = 'defualt.jpg'
                return;
        }

        document.getElementById('imageContainer').innerHTML = `<img src="${imageUrl}" alt="${animal}">`;
    } else if (age > 55) {
        document.getElementById('message').innerHTML = `
            <p>Much like mathematics, programming is a logico-deductive system. And I think the important point that I am making is that in a purely logico-deductive system there is no philosophy - everything is known. However, insofar as there is art in mathematics, there is philosophy in mathematics. Insofar as there is art in programming, there is philosophy in programming.</p>
        `;
    }
}