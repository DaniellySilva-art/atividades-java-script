//Adiciona os items
let produtos =["Pão","Queijo","Presunto","Arroz","Feijão","Café","Leite","Óleo de soja","Macarrão","Detergente"];
produtos.push("Açúcar","Amaciante","Sabonete");
//mostra quando se tem esse produto ou não
if(produtos == ""){
console.log("Produto não encontrado");
}
else{
    console.log("Produto encontrado");
}
//filtra para aparecer todos que batem com a condição
let produtos2 = produtos.filter(p=> p.startsWith("A"))
console.log(produtos)
console.log(produtos2)

let arquivos = ["tcc_versao_final.pdf","artigo_cientifico_revisado.docx","projeto_integrador_grupo3.pptx","• resenha_critica_livro.pdf","relatorio_estagio_2026.pdf","estudo_de_caso_empresa.docx","relatorio_laboratorio_aula5.pdf","analise_dados_pesquisa.xlsx","apresentacao_banca_tcc.pptx","manual_regras_abnt.pdf","grafico_desempenho_projeto.png","cronograma_entregas_semestre.xlsx"]
let buscar = prompt("Digite o prefixo do arquivo que deseja buscar: ");
if(procura === ""){
    alert("Você não digitou nenhum prefixo de arquivo válido. Tente novamente");
}
else{
    //filtra os arquivos com base no prefixo fornecido pelo usuário
    let listaArquivosEncontrados = arquivos.filter( lista => lista.toLocaleLowerCase().startsWith(procura.toLocaleLowerCase())
)
if(procura.length != 0){
    console.log("Arquivos encontrados: " + listaArquivosEncontrados.trim(","));
}
else{
    console.log("Nenhum arquivo encontrado com esse prefixo: " + procura);

  }
}
// Solicita ao usuário que digite a extensão do arquivo que deseja pesquisar
let extensao = prompt("Digite o nome do arquivo que deseja buscar: ");
if(extensao === ""){
    alert("Você não digitou nenhum nome de arquivo. tente novamente.");
}
else{
    //filtrar os arquivos encontrados com base na extensão especifica pelo usuário
    let listaArquivosEncontrados = arquivos.filter(lista => lista.toLocaleLowerCase().includes(extensao.toLocaleLowerCase())
)
//Exiba os arquivos encontrados ou uma mensagem caso nenhum arquivo seja encontrado
if(extensao.length != 0){
    console.log("Arquivos encontrados: " + listaArquivosEncontrados.trim(", "));
}
else{
    console.log("Nenhum arquivo encontrado na extensão: " + extensao)
}
}
//


















// //Enquanto é um laço de repetição que sempre irá "rodar" enquanto a condição passar for verdadeira
// let contador = 0
// while(contador <= 10){
//     alert(contador);
//     contador = contador + 1

// }

// let contador = 0 
// while(contador <= 20){
//     alert(contador);
//     contador = contador + 2
// }

// let nomes = ["Paula Ribeiro", "Ana Julia","Israel de Oliveira"];
// let indice = 0;
// let encerrar = 0;
//  while (encerrar < nomes.length) {
//     console.log(nomes[indice]);
//     nomes.slice(indice, 1);
//     console.log(nomes)
//  }

// let nome = "admin"

// let nomeDigitado = prompt("Digite o nome do usuário");

// while(nomeDigitado.toLocaleLowerCase().trim() != nome.toLocaleLowerCase().trim()){
//  nomeDigitado = prompt("Nome incorreto, tente novamente.")   
// }
// alert("Acesso liberado")

let nomes = ["Paula Ribeiro", "Ana Julia","Israel de Oliveira"];

nomes.sort();

nomes.forEach(nome =>{
    console.log(nome);
})