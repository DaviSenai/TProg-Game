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
//             shapes.push( new Rectangle(0, 0, 100, 100, "#444444", [20]) );
//             shapes.push( new Rectangle(10, 10, 80, 80, "#777777", [20]) );

//             scenery.push( new SceneryObject(0, 0, 100, 100, shapes) );
//         }
//         chunks.push( new Chunk(0, 0, 680, 325, scenery) );
//     }
//     return new GameMap(1364, 766, chunks, "green");
// }



function getJungleMap() {
    let chunks = [];
    {
        let scenery = [];
        {
            let shapes = [];
            shapes.push( new Rectangle(0, 0, 100, 100, "#444444", [20]) );
            shapes.push( new Rectangle(10, 10, 80, 80, "#777777", [20]) );

            scenery.push( new SceneryObject(450, 300, 100, 100, shapes) );
        }
        {
            let shapes = [];
            shapes.push( new Rectangle(0, 0, 100, 100, "#444444", [20]) );
            shapes.push( new Rectangle(10, 10, 80, 80, "#777777", [20]) );

            scenery.push( new SceneryObject(650, 220, 100, 100, shapes) );
        }
        {
            let shapes = [];
            shapes.push( new Rectangle(0, 0, cWidth, 200, "green") );
            
            scenery.push( new SceneryObject(0, cHeight - 270, cHeight, 200, shapes) );
        }
        chunks.push( new Chunk(0, 0, cWidth, cHeight, scenery) );
    }
    return new GameMap(1364, 766, chunks, "green");
}

function getTempleMap() {
    let chunks = [];
    let chunkW = 2496;
    let chunkH = 1248;
    {
        // 1.1
        let scenery = [];
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push( new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(192, 384, 48, 240, shapes) );
        }
        // 1.2
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48
            }

            scenery.push( new SceneryObject(192, 624, 384, 48, shapes) );
        }
        // 1.3
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push( new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(528, 432, 48, 192, shapes) );
        }
        // 1.4
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 14; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(528, 432, 672, 48, shapes) );
        }
        // 1.5
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push( new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(720, 480, 48, 240, shapes) );
        }
        // 1.6
        {
            let shapes = []
            for (let i = 0, size = 0; i < 32; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            scenery.push( new SceneryObject(960, 1056, 1536, 48, shapes) );
        }
        // 1.7
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 11; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(288, 1056, 528, 48, shapes) );
        }
        // 1.8
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(288, 1104, 48, 144, shapes) );
        }
        // 1.9
        {
            let shapes = [];
            let size = 0;
            shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
            size += 48;

            scenery.push( new SceneryObject(768, 1104, 48, 48, shapes) );
        }
        // 1.10
        {
            let shapes = [];
            let size = 0;
            for (let i = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            scenery.push( new SceneryObject(960, 672, 48, 384, shapes) );
        }
        // 1.11
        {
            let shapes = []
            for (let i = 0, size = 0; i < 21; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(0, 864, 1008, 48, shapes) );
        }
        // 1.12
        {
            let shapes = []
            for (let i = 0, size = 0; i < 27; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1200, 864, 1296, 48, shapes) );
        }
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 15; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(960, 624, 720, 48, shapes) );
        }
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 12; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(2256, 312, 48, 576, shapes) );
        }
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 18; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1440, 312, 864, 48, shapes) );
        }
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(2304, 432, 192, 48, shapes) );
        }
        chunks.push( new Chunk(0, 0, chunkW, chunkH, scenery) );
    }
    {
        let scenery = [];
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push( new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
            size += 48;
            }
        
            scenery.push( new SceneryObject(2496, 0, 48, 240, shapes) );
        }
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 70; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(2496, 432, 3360, 48, shapes) );
        }
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push( new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(2736, 192, 48, 240, shapes) );
        }
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 14; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(2736, 192, 672, 48, shapes) );
        }
        {
            let shapes = []
            for (let i = 0, size = 0; i < 18; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(2496, 864, 854, 48, shapes) );
        }
        chunks.push( new Chunk(chunkW, 0, chunkW, chunkH, scenery) );
    }
    {
        let scenery = [];
        //5.1
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 14; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
    
            scenery.push( new SceneryObject(192, 192, 672, 48, shapes) );
        }
        //5.2
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
    
            scenery.push( new SceneryObject(192, 240, 48, 480, shapes) );
        }
        //5.3
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(192, 720, 288, 48, shapes) );
        }
        //5.4
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(432, 768, 48, 288, shapes) );
        }
        //5.5
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(144, 1056, 336, 48, shapes) );
        }
        //5.6
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 14; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(816, 240, 48, 672, shapes) );
        }
        //5.7
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(528, 480, 288, 48, shapes) );
        }
        //5.8
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1104, 864, 48, 144, shapes) );
        }
        //5.9
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(816, 912, 336, 48, shapes) );
        }
        //5.10
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
    
            scenery.push( new SceneryObject(1152, 192, 672, 48, shapes) );
        }
        chunks.push( new Chunk(0, chunkH, chunkW, chunkH, scenery) );
    }
    {
        let scenery = [];
        {
            let shapes = [];
            
    
        }
        chunks.push( new Chunk(0, chunkH * 2, chunkW, chunkH, scenery) );
    }
    {
        let scenery = [];
        {
            let shapes = [];
            
    
        }
        chunks.push( new Chunk(0, chunkH * 3, chunkW, chunkH, scenery) );
    }
    {
        let scenery = [];
        {
            let shapes = [];
            
    
        }
        chunks.push( new Chunk(0, chunkH * 4, chunkW, chunkH, scenery) );
    }
    return new GameMap(9984, 6240, chunks, "green");
    // 2496 x 4 = 9984;
    // 1248 x 5 = 6240;
}


function getLifeBar() {
    let shapes = [];
    shapes.push( new Rectangle(0, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectangle(15, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectangle(30, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectangle(45, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectangle(60, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectangle(75, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectangle(90, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectangle(105, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectangle(120, 0, 10, 30, "#940101", [5]) );
    shapes.push( new Rectangle(135, 0, 10, 30, "#940101", [5]) );
    
    return new SceneryObject(cWidth - 160, 20, 145, 30, shapes);
}



