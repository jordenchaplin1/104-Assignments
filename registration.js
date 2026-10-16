const pet1 = {
    name: "Nala",
    age: 1,
    gender: "Female",
    service: "bath & brush",
    breed: "Cane Corso",
};

const pet2 = {
    name: "Mowgli",
    age: 5,
    gender: "Male",
    service: "bath, deshed, & trim",
    breed: "Australian Shepherd"
};

const pet3 = {
    name: "Bandit",
    age: 3,
    gender: "Male",
    service: "bath & brush",
    breed: "German Shepherd",
};

function displayPets() {
    const pets = [pet1, pet2, pet3, pet4, pet5, pet6];
    const container = document.getElementById("petNames");
    const list = document.createElement("ol");

    for(const pet of pets) {
        const listItem = document.createElement('li');
        listItem.textContent = pet.name;
        list.appendChild(listItem);
    }

    container.replaceChildren(list);
}


function Pet(name, age, gender, service, breed) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
}

const pet4 = new Pet(
    "Sally",
    8,
    "Female",
    "bath & trim",
    "Golden Retriever",
)

const pet5 = new Pet(
    "Bruce",
    6,
    "Male",
    "bath & brush",
    "Bulldog",    

)

const pet6 = new Pet (
    "Sweety",
    12,
    "Female",
    "bath & nail trim",
    "Chihuahua",

)

displayPets();