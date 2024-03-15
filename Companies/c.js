// Sample data for companies
const companies = [
    {
        name: "Siemens",
        logo: "Siemens.jpg",
        averageSalary: "$100,000",
        studentsPlaced: 50
    },
    
    // Add more companies here as needed
];

// Function to dynamically generate company cards
function generateCompanyCards() {
    const container = document.querySelector('.company-container');

    companies.forEach(company => {
        // Create company card
        const card = document.createElement('div');
        card.classList.add('company-card');

        // Company name
        const heading = document.createElement('h2');
        heading.textContent = company.name;

        // Company logo
        const logo = document.createElement('img');
        logo.src = company.logo;
        logo.alt = `${company.name} Logo`;

        // Company info
        const info = document.createElement('div');
        info.classList.add('company-info');
        const salary = document.createElement('p');
        salary.textContent = `Average Salary: ${company.averageSalary}`;
        const placed = document.createElement('p');
        placed.textContent = `Students Placed: ${company.studentsPlaced}`;

        // Append elements to card
        info.appendChild(salary);
        info.appendChild(placed);
        card.appendChild(heading);
        card.appendChild(logo);
        card.appendChild(info);

        // Append card to container
        container.appendChild(card);
    });
}

// Call function to generate company cards
generateCompanyCards();
