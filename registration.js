const pet1 = {
    name: "Nala",
    age: 1,
    gender: "Female",
    service: "bath & brush",
    breed: "Cane Corso"
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
    breed: "German Shepherd"
};

// Constructor used to create pets.
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
    "Golden Retriever"
);

const pet5 = new Pet(
    "Bruce",
    6,
    "Male",
    "bath & brush",
    "Bulldog"
);

const pet6 = new Pet(
    "Sweety",
    12,
    "Female",
    "bath & nail trim",
    "Chihuahua"
);

// Keep one shared array so additions and deletions remain
// when the table is refreshed.
const pets = [pet1, pet2, pet3, pet4, pet5, pet6];

const registrationForm = document.getElementById("registrationForm");
const registrationMessage = document.getElementById(
    "registrationMessage"
);

// Display all pets in the table.
function displayRow() {
    const tableBody = document.getElementById("petTableBody");

    tableBody.replaceChildren();

    if (pets.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.colSpan = 6;
        cell.textContent = "No pets registered yet.";
        cell.className = "text-center";

        row.appendChild(cell);
        tableBody.appendChild(row);
        return;
    }

    pets.forEach(function (pet, index) {
        const row = document.createElement("tr");

        const values = [
            pet.name,
            pet.age,
            pet.gender,
            pet.service,
            pet.breed
        ];

        for (const value of values) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        }

        // Add a Delete button for this pet.
        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.type = "button";
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("aria-label", `Delete ${pet.name}`);

        deleteButton.addEventListener("click", function () {
            deletePet(index);
        });

        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
        tableBody.appendChild(row);
    });
}

// Read the form and register a new pet.
function registerPet(event) {
    // Prevent the form from reloading the page.
    event.preventDefault();

    const nameInput = document.getElementById("petName");
    const breedInput = document.getElementById("petBreed");

    const name = nameInput.value.trim();
    const age = Number(document.getElementById("petAge").value);
    const gender = document.getElementById("petGender").value;
    const service = document.getElementById("petService").value;
    const breed = breedInput.value.trim();

    // Reject names and breeds containing only spaces.
    if (name === "" || breed === "") {
        registrationMessage.textContent =
            "Please enter a pet name and breed.";

        if (name === "") {
            nameInput.focus();
        } else {
            breedInput.focus();
        }

        return;
    }

    const newPet = new Pet(name, age, gender, service, breed);

    pets.push(newPet);
    displayRow();

    registrationForm.reset();
    registrationMessage.textContent =
        `${name} was registered successfully.`;

    nameInput.focus();
}

// Remove a pet and refresh the table.
function deletePet(index) {
    const petName = pets[index].name;

    pets.splice(index, 1);
    displayRow();

    registrationMessage.textContent = `${petName} was deleted.`;
}

// Run registerPet when the user submits the form.
registrationForm.addEventListener("submit", registerPet);

registrationForm.addEventListener("reset", function () {
    registrationMessage.textContent = "";
});

// Display the original six pets when the page opens.
displayRow();