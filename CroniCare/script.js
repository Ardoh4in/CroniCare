function addRecord() {
    const symptom = document.getElementById('symptom').value;
    const medication = document.getElementById('medication').value;
    const consultationDate = document.getElementById('consultationDate').value;
    const consultationTime = document.getElementById('consultationTime').value;

    if (!symptom || !medication || !consultationDate || !consultationTime) {
        alert("Preencha todos os campos!");
        return;
    }

    const newRecord = { symptom, medication, consultation: `${consultationDate} ${consultationTime}` };

    let records = JSON.parse(localStorage.getItem('records')) || [];
    records.push(newRecord);
    localStorage.setItem('records', JSON.stringify(records));

    document.getElementById('symptom').value = '';
    document.getElementById('medication').value = '';
    document.getElementById('consultationDate').value = '';
    document.getElementById('consultationTime').value = '';
}

function displayRecords() {
    const recordList = document.getElementById('recordList');
    let records = JSON.parse(localStorage.getItem('records')) || [];
    
    recordList.innerHTML = '';
    records.forEach((record, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>Sintomas: ${record.symptom}</span>
            <span>Medicamentos: ${record.medication}</span>
            <span>Consulta: ${record.consultation}</span>
            <button class="delete" onclick="deleteRecord(${index})">Deletar</button>
        `;
        recordList.appendChild(li);
    });
}

function deleteRecord(index) {
    let records = JSON.parse(localStorage.getItem('records')) || [];
    records.splice(index, 1);
    localStorage.setItem('records', JSON.stringify(records));
    displayRecords();
}

document.addEventListener('DOMContentLoaded', displayRecords);
