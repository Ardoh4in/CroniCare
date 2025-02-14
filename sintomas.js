function adicionarSintoma(nome, data, severidade, descricao) {
    const sintoma = { name: nome, date: data, severity: severidade, description: descricao };
    let sintomasData = JSON.parse(localStorage.getItem('sintomas')) || [];
    sintomasData.push(sintoma);
    localStorage.setItem('sintomas', JSON.stringify(sintomasData));
}

document.getElementById('symptom-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('symptom-name').value;
    const data = document.getElementById('symptom-date').value;
    const severidade = document.getElementById('symptom-severity').value;
    const descricao = document.getElementById('symptom-description').value;

    adicionarSintoma(nome, data, severidade, descricao);
    event.target.reset();
}); 
