function mostrarAba(aba) {
    const todasAbas = document.querySelectorAll('.tab-content');
    todasAbas.forEach(aba => {
        aba.style.display = 'none';
    });

    const abaSelecionada = document.getElementById(aba);
    abaSelecionada.style.display = 'block';
}

function preencherTabelaSintomas() {
    const sintomasData = JSON.parse(localStorage.getItem('sintomas')) || [];
    const sintomasTableBody = document.querySelector('#sintomas-table tbody');
    sintomasTableBody.innerHTML = '';

    sintomasData.forEach(sintoma => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${sintoma.name}</td>
            <td>${sintoma.date}</td>
            <td>${sintoma.severity}</td>
            <td>${sintoma.description}</td>
        `;
        sintomasTableBody.appendChild(row);
    });
}

function preencherTabelaMedicamentos() {
    const medicamentosData = JSON.parse(localStorage.getItem('medicamentos')) || [];
    const medicamentosTableBody = document.querySelector('#medicamentos-table tbody');
    medicamentosTableBody.innerHTML = '';

    medicamentosData.forEach(medicamento => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${medicamento.name}</td>
            <td>${medicamento.dosage}</td>
            <td>${medicamento.startDate}</td>
            <td>${medicamento.observations}</td>
        `;
        medicamentosTableBody.appendChild(row);
    });
}

function preencherTabelaConsultas() {
    const consultasData = JSON.parse(localStorage.getItem('consultas')) || [];
    const consultasTableBody = document.querySelector('#consultas-table tbody');
    consultasTableBody.innerHTML = '';

    consultasData.forEach(consulta => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${consulta.date}</td>
            <td>${consulta.time}</td>
            <td>${consulta.doctor}</td>
            <td>${consulta.description}</td>
        `;
        consultasTableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    preencherTabelaSintomas();
    preencherTabelaMedicamentos();
    preencherTabelaConsultas();
});
 