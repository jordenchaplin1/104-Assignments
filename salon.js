const salon = {
    name: "Paw Paws Pet Salon",
    hours: {
        open: "9:00 AM",
        close: "5:00 PM"
    },
    phone: "555-123-4567",
    address: {
        street: "123 Main Street",
        city: "San Diego",
        state: "CA",
        zip: "92101"
    }
};

function displaySalonInfo() {
    const paragraph = document.getElementById("salonInfo");

    paragraph.textContent =
        "Welcome to " + salon.name + "! Our hours of operation are: " +
        salon.hours.open + " - " + salon.hours.close + ". Please call us at " +
        salon.phone + ". We are located at " + salon.address.street + ", " +
        salon.address.city + ", " + salon.address.state + " " + salon.address.zip + "." + "Have a great day!";
}

displaySalonInfo();