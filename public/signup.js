const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    // vê o objeto formData
    //console.log([...formData]);

    axios.post('/perfil', formData, {
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((res) => {
            (console.log("Sucesso ao fazer POST"));
            navigate('/perfil');
        })
        .catch((error) => {
            console.log("Erro ao fazer POST!");
        });
});

function perfil() {
    window.location.href = "profile.html";
}