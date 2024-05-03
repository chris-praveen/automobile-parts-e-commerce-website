// Define a class for automobile parts
class AutomobilePart {
    constructor(public id: number, public name: string, public price: number) {}
}

// Sample data for automobile parts
const partsData: AutomobilePart[] = [
    new AutomobilePart(1, "Brake Pads", 50),
    new AutomobilePart(2, "Oil Filter", 10),
    new AutomobilePart(3, "Spark Plugs", 5),
];

// Function to render parts list
function renderPartsList() {
    const appDiv = document.getElementById("app");
    if (!appDiv) return;

    const partsList = document.createElement("ul");
    partsData.forEach((part) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${part.name} - $${part.price}`;
        partsList.appendChild(listItem);
    });

    appDiv.appendChild(partsList);
}

// Initialize the page
renderPartsList();
