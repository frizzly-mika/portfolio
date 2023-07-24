let about = document.querySelector("#about");

async function getApiGithub() {
    try {
        const dadosPerfil = await fetch("https://api.github.com/users/frizzly-mika");
        const perfil = await dadosPerfil.json();

        let conteudo = `
        <img src="${perfil.avatar_url}" alt="Foto de perfil">
        <article class="about_content">
            <h1>Sobre o Micael</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odit voluptates incidunt
                inventore rem error harum blanditiis accusamus vitae, minus fugit consequatur? Dolorum maiores magni
                deleniti modi sit laudantium totam!
            </p>

            <div class="about_github">
                <a class="btn" href="${perfil.html_url}" target="_blank">GitHub</a></a>
                <a class="btn" href="${perfil.followers}">Seguidores</a></a>
                <a class="btn" href="${perfil.public_repos}">Repositórios</a></a>
           </div>
        
        </article>
        `
        about.innerHTML += conteudo;
        console.log(conteudo);

    } catch (error) {
        console.log(error);
    }
}

function changeTheme() {
    document.body.classList.toggle("dark-theme");
}

getApiGithub();