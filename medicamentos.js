document.getElementById('medication-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const medicationName = document.getElementById('medication-name').value;
    const medicationDosage = document.getElementById('medication-dosage').value;
    const medicationStartDate = document.getElementById('medication-start-date').value;
    const medicationObservations = document.getElementById('medication-observations').value;

    const newMedication = {
        name: medicationName,
        dosage: medicationDosage,
        startDate: medicationStartDate,
        observations: medicationObservations,
    };

    let medicationsData = JSON.parse(localStorage.getItem('medicamentos')) || [];
    medicationsData.push(newMedication);
    localStorage.setItem('medicamentos', JSON.stringify(medicationsData));

    document.getElementById('medication-confirmation-message').style.display = 'block';
    setTimeout(function () {
        document.getElementById('medication-confirmation-message').style.display = 'none';
    }, 3000);

    this.reset(); 
});
