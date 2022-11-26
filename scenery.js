/* 
    ATENCAO!!!
    **Essa area e destinada exclusivamente a criacao dos mapas do jogo
    ** Siga todas as regras e deixe tudo padronizado conforme abaixo:
    * Para cada mapa sera criada uma function com nome "get" + NomeDoMapa + "Map". (sem espacos)
    * Cada mapa sera dividido em CHUNKS (pedacos pequenos do mapa)
        - Para isso sera criado um array "chunks"
        - Cada CHUNK sera feita dentro de um bloco de codigo { code... }
        - Dentro desse bloco serao inseridos os CENARIOS
            > Para isso sera criado um array "scenery"
            > Cada CENARIO sera feito dentro de um bloco de codigo { code... }
                # O cenario e composto por formas geometricas (shapes).
                # Para isso sera criado um array "shapes"
                # Cada forma geometrica sera colocada dentro do array "shappes" com:
                    shapes.push(forma_geometrica);
            > Apos inserir todas as formas, devera ser colocado o cenario dentro do array "scenery" com:
                scenery.push( new Scenery(x, y, width, height, shapes) );       --> Passando o array "shapes" como parametro
        - Apos inserir todos os cenarios, devera ser colocada a chunk dentro do array "chunks" com:
            chunks.push( new Chunk(x, y, width, height, scenery) );         --> Passando o array "scenery" como parametro
    * Por fim, apos inserir todas as chunks, sera retornado o objeto GameMap com a estrutura a seguir:
            return new GameMap(width, height, chunks, mapBorderColor);      --> Passando o array "chunks" como parametro, alem de passar a 
                                                                                cor da borda do mapa em "mapBorderColor".
                                                                                    Obs.: Essa borda sera vista apenas quando o jogador se
                                                                                    mover e nao existir mapa para cima, para baixo, ou para
                                                                                    os lados ("limbo do jogo"). 

*/

function getJungleMap() {
    let chunks = [];
    {
        let scenery = [];
        {
            let shapes = [];
            shapes.push( new Rectagle(0, 0, 100, 100, "#444444", [20]) );
            shapes.push( new Rectagle(10, 10, 80, 80, "#777777", [20]) );

            scenery.push( new SceneryObject(150, 0, 100, 100, shapes) );
        }
        chunks.push( new Chunk(150, 150, 680, 325, scenery) );
    } 
    return new GameMap(1360, 650, chunks, "green");
}







