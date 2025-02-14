function adicionarConsulta(data, horario, medico, descricao) {
    const consulta = { date: data, time: horario, doctor: medico, description: descricao };
    let consultasData = JSON.parse(localStorage.getItem('consultas')) || [];
    consultasData.push(consulta);
    localStorage.setItem('consultas', JSON.stringify(consultasData));
}

document.getElementById('consultation-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = document.getElementById('consultation-date').value;
    const horario = document.getElementById('consultation-time').value;
    const medico = document.getElementById('consultation-doctor').value;
    const descricao = document.getElementById('consultation-description').value;

    adicionarConsulta(data, horario, medico, descricao);
    event.target.reset();
}); 
