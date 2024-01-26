document.addEventListener('DOMContentLoaded', () => {
    const repositories = document.querySelector('.content-main');

    async function getApiGitHub() {
        try {
            const response = await fetch('https://api.github.com/users/regispicaz/repos');
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

            const data = await response.json();

            data.forEach(item => {
                const project = document.createElement('div');
                project.innerHTML = `
                    <div class="project border-4 rounded-lg border-green-200 m-2 p-2">
                    <div class="grid grid-cols-2 mb-4">
                    <h4 class="title font-bold">${item.name}</h4>
                    <span class="date-create p-1 justify-self-end text-sm text-slate-50 font-thin text-slate-50 border-2 border-slate-50 rounded-full px-2 py-0">${item.created_at}</span>
                    <!-- <h4>${item.description}</h4>-->
                    </div>
                    <div class="grid grid-cols-2 place-content-between">
                    <a href="${item.html_url}" target="_blank" class="font-thin text-sm">${item.html_url}</a>
                    <span class="language text-end  text-sm font-medium"><span class="circle"></span>${item.language}</span>
                    </div>
                    </div>
                `;
                repositories.appendChild(project);
            });
            console.log(data);
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
    }

    

    getApiGitHub();
});