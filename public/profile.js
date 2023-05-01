const card = document.getElementById('response');

axios.get('/perfil/voluntario')
    .then(response => {
        console.log(response.data);
        card.innerHTML = `
        <div class="profile-card">
        <p id="profile-id">${response.data.id}</p>
        <p>${response.data.nome} ${response.data.sobrenome}</p>
        <p>${response.data.nascimento}</p>
        <p>${response.data.cpf}</p>
        <p>${response.data.email}</p>
        <p>${response.data.celular}</p>
        <p>${response.data.cep}</p>
        <p>${response.data.endereco}</p>
        </div>
        `
        const form = document.getElementById('delete-div');
        form.innerHTML = `
            <form action="/perfil/deletar${response.data.id}" method="DELETE">
                <button class="btn" id="delete">Deletar conta</button>
            </form>
        `
    })
    .catch(error => {
        console.log(error);
    });
