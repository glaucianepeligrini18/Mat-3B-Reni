const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}  <div class="abas-textos">
<div class="aba-conteudo">
    <h3 class="aba-conteudo-titulo-principal">Estudar 4 cursos na Alura</h3>
    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
</div>
</div>

