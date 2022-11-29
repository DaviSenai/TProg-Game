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



// function getJungleMap() {
//     let chunks = [];
//     {
//         let scenery = [];
//         {
//             let shapes = [];
//             shapes.push( new Rectagle(0, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(10, 10, 80, 80, "#777777", [20]) );

//             scenery.push( new SceneryObject(0, 0, 100, 100, shapes) );
//         }
//         chunks.push( new Chunk(0, 0, 680, 325, scenery) );
//     }
//     return new GameMap(1364, 766, chunks, "green");
// }


// function getJungleMap() {
//     let chunks = [];
//     {
//         let scenery = [];
//         {
//             let shapes = [];
//             shapes.push( new Rectagle(0, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(10, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(100, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(110, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(200, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(210, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(300, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(310, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(400, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(410, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(500, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(510, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(0, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(10, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(100, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(110, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(200, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(210, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(300, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(310, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(400, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(410, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(500, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(510, 10, 80, 80, "#777777", [20]) );

//             scenery.push( new SceneryObject(0, 0, 100, 100, shapes) );
//         }
//         {
//             let shapes = [];
//             shapes.push( new Rectagle(0, 100, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(10, 110, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(100, 200, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(110, 210, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(200, 300, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(210, 310, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(300, 400, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(310, 410, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(400, 500, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(410, 510, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(500, 600, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(510, 610, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(0, 700, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(10, 10, 80, 80, "#777777", [20]) );

//             scenery.push( new SceneryObject(0, 0, 100, 100, shapes) );
//         }
//         chunks.push( new Chunk(0, 0, 680, 325, scenery) );
//     }
//     {
//         let scenery = [];
//         {
//             let shapes = [];
//             shapes.push( new Rectagle(0, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(10, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(100, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(110, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(200, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(210, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(300, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(310, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(400, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(410, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(500, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(510, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(0, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(10, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(100, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(110, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(200, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(210, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(300, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(310, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(400, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(410, 10, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(500, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(510, 10, 80, 80, "#777777", [20]) );

//             scenery.push( new SceneryObject(0, 0, 100, 100, shapes) );
//         }
//         {
//             let shapes = [];
//             shapes.push( new Rectagle(0, 100, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(10, 110, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(100, 200, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(110, 210, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(200, 300, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(210, 310, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(300, 400, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(310, 410, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(400, 500, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(410, 510, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(500, 600, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(510, 610, 80, 80, "#777777", [20]) );

//             shapes.push( new Rectagle(0, 700, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectagle(10, 10, 80, 80, "#777777", [20]) );

//             scenery.push( new SceneryObject(0, 0, 100, 100, shapes) );
//         }
//         chunks.push( new Chunk(300, 0, 680, 325, scenery) );
//     }
//     return new GameMap(1364, 766, chunks, "green");
// }



function getJungleMap() {
    let chunks = [];
    {
        let scenery = [];
        {
            let shapes = [];
            shapes.push( new Rectagle(0, 0, 100, 100, "#444444", [20]) );
            shapes.push( new Rectagle(10, 10, 80, 80, "#777777", [20]) );

            scenery.push( new SceneryObject(450, 300, 100, 100, shapes) );
        }
        {
            let shapes = [];
            shapes.push( new Rectagle(0, 0, 100, 100, "#444444", [20]) );
            shapes.push( new Rectagle(10, 10, 80, 80, "#777777", [20]) );

            scenery.push( new SceneryObject(650, 220, 100, 100, shapes) );
        }
        {
            let shapes = [];
            shapes.push( new Rectagle(0, 0, cWidth, 200, "green") );
            
            scenery.push( new SceneryObject(0, cHeight - 270, cHeight, 200, shapes) );
        }
        chunks.push( new Chunk(0, 0, cWidth, cHeight, scenery) );
    }
    return new GameMap(1364, 766, chunks, "green");
}


function getLifeBar() {
    let shapes = [];
    shapes.push( new Rectagle(0, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectagle(15, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectagle(30, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectagle(45, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectagle(60, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectagle(75, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectagle(90, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectagle(105, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectagle(120, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectagle(135, 0, 10, 30, "#940101", [5]) );
    
    return new SceneryObject(cWidth - 160, 20, 145, 30, shapes);
}



