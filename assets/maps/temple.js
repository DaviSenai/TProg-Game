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

function getTempleMap() {
    let chunks = [];
    let chunkW = 2496;
    let chunkH = 1248;
    // CHUNK A
    {
        let mobs = [];
        mobs.push( new Mummy(1248, 960) );
        mobs.push( new Mummy(960, 1056) );
        mobs.push( new Bat(96, 768) );
        mobs.push( new Bat(720, 960) );
        mobs.push( new Bat(1248, 96) );
        let scenery = [];
        // A.1
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push( new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(192, 384, 48, 240, shapes) );
        }
        // A.2
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48
            }

            scenery.push( new SceneryObject(192, 624, 384, 48, shapes) );
        }
        // A.3
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push( new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(528, 432, 48, 192, shapes) );
        }
        // A.4
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 14; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(528, 432, 672, 48, shapes) );
        }
        // A.5
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push( new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(720, 480, 48, 240, shapes) );
        }
        // A.6
        {
            let shapes = []
            for (let i = 0, size = 0; i < 32; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            scenery.push( new SceneryObject(960, 1056, 1536, 48, shapes) );
        }
        // A.7
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 11; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(288, 1056, 528, 48, shapes) );
        }
        // A.8
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(288, 1104, 48, 144, shapes) );
        }
        // A.9
        {
            let shapes = [];
            let size = 0;
            for (let i = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            scenery.push( new SceneryObject(960, 672, 48, 384, shapes) );
        }
        // A.10
        {
            let shapes = []
            for (let i = 0, size = 0; i < 15; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(0, 864, 720, 48, shapes) );
        }
        // A.11
        {
            let shapes = []
            for (let i = 0, size = 0; i < 23; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1200, 864, 1104, 48, shapes) );
        }
        // A.12
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(96, 1056, 48, 192, shapes) );
        }
        // A.13
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg",size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(0, 1056, 144, 48, shapes) );
        }
        // A.14
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 15; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(960, 624, 720, 48, shapes) );
        }
        // A.15
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 12; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(2256, 312, 48, 576, shapes) );
        }
        // A.16
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 18; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1440, 312, 864, 48, shapes) );
        }
        // A.17
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(2304, 432, 192, 48, shapes) );
        }
        // A.18
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 46; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(288, 1248, 2208, 48, shapes) );
        }
        // A.19
        {
            let shapes = []
            for (let i = 0, size = 0; i < 53; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(-48, -48, 2496, 48, shapes) );
        }
        // A.20
        {
            let shapes = []
            for (let i = 0, size = 0; i < 26; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(-48, 0, 48, 1248, shapes) );
        }
        chunks.push( new Chunk(0, 0, chunkW, chunkH, scenery, mobs) );
    }
    // CHUNK B
    {
        let mobs = [];
        mobs.push( new Bat(384, 288) );
        mobs.push( new Bat(720, 768) );
        mobs.push( new Bat(1824, 768) );
        mobs.push( new Mummy(960, 1152) );
        mobs.push( new Mummy(1248, 960) );
        mobs.push( new Mummy(1632, 960) );
        let scenery = [];
        // B.1
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push( new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
            size += 48;
            }
        
            scenery.push( new SceneryObject(0, 0, 48, 240, shapes) );
        }
        // B.2
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(0, 432, 288, 48, shapes) );
        }
        // B.3
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push( new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(240, 192, 48, 240, shapes) );
        }
        // B.4
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 14; i++) {
                shapes.push( new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(240, 192, 672, 48, shapes) );
        }
        // B.5
        {
            let shapes = []
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(0, 1056, 480, 48, shapes) );
        }
        // B.6
        {
            let shapes = []
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(432, 864, 48, 192, shapes) );
        }
        // B.7
        {
            let shapes = []
            for (let i = 0, size = 0; i < 16; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(432, 816, 768, 48, shapes) );
        }
        // B.8
        {
            let shapes = []
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(48, 672, 48, 240, shapes) );
        }
        // B.9
        {
            let shapes = []
            for (let i = 0, size = 0; i < 13; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(48, 624, 624, 48, shapes) );
        }
        // B.10
        {
            let shapes = []
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(624, 672, 48, 288, shapes) );
        }
        // B.11
        {
            let shapes = []
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1152, 864, 48, 240, shapes) );
        }
        // B.12
        {
            let shapes = []
            for (let i = 0, size = 0; i < 20; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg",size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1152, 1008, 960, 48, shapes) );
        }
        // B.13
        {
            let shapes = []
            for (let i = 0, size = 0; i < 11; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1536, 480, 48, 528, shapes) );
        }
        // B.14
        {
            let shapes = []
            for (let i = 0, size = 0; i < 23; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(480, 432, 1104, 48, shapes) );
        }
        // B.15
        {
            let shapes = []
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(912, 480, 48, 144, shapes) );
        }
        // B.16
        {
            let shapes = []
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(912, 624, 480, 48, shapes) );
        }
        // B.17
        {
            let shapes = []
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1344, 672, 48, 192, shapes) );
        }
        // B.18
        {
            let shapes = []
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(2064, 864, 48, 144, shapes) );
        }
        // B.19
        {
            let shapes = []
            for (let i = 0, size = 0; i < 12; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1920, 816, 576, 48, shapes) );
        }
        // B.20
        {
            let shapes = []
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1728, 672, 48, 192, shapes) );
        }
        // B.21
        {
            let shapes = []
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1728, 624, 384, 48, shapes) );
        }
        // B.22
        {
            let shapes = []
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2064, 480, 48, 144, shapes) );
        }
        // B.23
        {
            let shapes = []
            for (let i = 0, size = 0; i < 16; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1728, 432, 768, 48, shapes) );
        }
        // B.24
        {
            let shapes = []
            for (let i = 0, size = 0; i < 52; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 1248, 2496, 48, shapes) );
        }
        // B.25
        {
            let shapes = []
            for (let i = 0, size = 0; i < 52; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(0, -48, 2496, 48, shapes) );
        }
        chunks.push( new Chunk(chunkW, 0, chunkW, chunkH, scenery, mobs) );
    }
    // CHUNK C
    {
        let mobs = [];
        mobs.push( new Bat(2400, 144) );
        mobs.push( new Bat(480, 240) );
        mobs.push( new Bat(1968, 528) );
        mobs.push( new Mummy(96, 672) );
        mobs.push( new Mummy(1872, 1152) );
        let scenery = [];
        // C.1
        {
            let shapes = []
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 432, 384, 48, shapes) );
        }
        // C.2
        {
            let shapes = []
            for (let i = 0, size = 0; i < 52; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(0, 816, 2496, 48, shapes) );
        }
        // C.3
        {
            let shapes = []
            for (let i = 0, size = 0; i < 12; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(0, 480, 48, 576, shapes) );
        }
        // C.4
        {
            let shapes = []
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(336, 192, 48, 240, shapes) );
        }
        // C.5
        {
            let shapes = []
            for (let i = 0, size = 0; i < 20; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(336, 144, 960, 48, shapes) );
        }
        // C.6
        {
            let shapes = []
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1248, 192, 48, 240, shapes) );
        }
        // C.7
        {
            let shapes = []
            for (let i = 0, size = 0; i < 15; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(576, 432, 720, 48, shapes) );
        }
        // C.8
        {
            let shapes = []
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1536, 192, 48, 288, shapes) );
        }
        // C.9
        {
            let shapes = []
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1536, 144, 480, 48, shapes) );
        }
        // C.10
        {
            let shapes = []
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1968, 192, 48, 288, shapes) );
        }
        // C.11
        {
            let shapes = []
            for (let i = 0, size = 0; i < 11; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1968, 432, 528, 48, shapes) );
        }
        // C.12
        {
            let shapes = []
            for (let i = 0, size = 0; i < 45; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(336, 624, 2160, 48, shapes) );
        }
        // C.13
        {
            let shapes = []
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1296, 864, 48, 192, shapes) );
        }
        // C.14
        {
            let shapes = []
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(960, 1056, 384, 48, shapes) );
        }
        // C.15
        {
            let shapes = []
            for (let i = 0, size = 0; i < 2; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1488, 1008, 48, 96, shapes) );
        }
        // C.16
        {
            let shapes = []
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(336, 1008, 336, 48, shapes) );
        }
        // C.17
        {
            let shapes = []
            shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, 0, 48, 48) );

            scenery.push( new SceneryObject(624, 1056, 48, 48, shapes) );
        }
        // C.18
        {
            let shapes = []
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1776, 1008, 480, 48, shapes) );
        }
        // C.19
        {
            let shapes = []
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1776, 1056, 48, 192, shapes) );
        }
        // C.20
        {
            let shapes = []
            for (let i = 0, size = 0; i < 52; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(0, 1248, 2496, 48, shapes) );
        }
        // C.21
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 26; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2496, 0, 48, 1248, shapes) );
        }
        // C.22
        {
            let shapes = []
            for (let i = 0, size = 0; i < 53; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(0, -48, 2544, 48, shapes) );
        }
        chunks.push( new Chunk(chunkW * 2, 0, chunkW, chunkH, scenery, mobs) );
    }
    // CHUNK D
    {
        let mobs = [];
        mobs.push( new Mummy(96, 1152) );
        mobs.push( new Mummy(912, 288) );
        mobs.push( new Mummy(1680, 912) );
        mobs.push( new Bat(336, 912) );
        mobs.push( new Bat(1200, 480) );
        mobs.push( new Bat(2352, 384) );
        let scenery = [];
        //D.1
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 14; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
    
            scenery.push( new SceneryObject(192, 192, 672, 48, shapes) );
        }
        //D.2
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
    
            scenery.push( new SceneryObject(192, 240, 48, 480, shapes) );
        }
        //D.3
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(192, 720, 288, 48, shapes) );
        }
        //D.4
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(432, 768, 48, 288, shapes) );
        }
        //D.5
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(144, 1056, 336, 48, shapes) );
        }
        //D.6
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 14; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(816, 240, 48, 672, shapes) );
        }
        //D.7
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(528, 480, 288, 48, shapes) );
        }
        //D.8
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1104, 864, 48, 144, shapes) );
        }
        //D.9
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(816, 912, 336, 48, shapes) );
        }
        //D.10
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 18; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
    
            scenery.push( new SceneryObject(1152, 192, 864, 48, shapes) );
        }
        //D.11
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1152, 240, 48, 384, shapes) );
        }
        //D.12
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 18; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
    
            scenery.push( new SceneryObject(1152, 624, 864, 48, shapes) );
        }
        //D.13
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1440, 672, 48, 336, shapes) );
        }
        //D.14
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1968, 672, 48, 144, shapes) );
        }
        //D.15
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg",size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1632, 816, 384, 48, shapes) );
        }
        //D.16
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1632, 864, 48, 144, shapes) );
        }
        //D.17
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 18; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg",size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1632, 1008, 864, 48, shapes) );
        }
        //D.18
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 20; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg",size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1344, 432, 960, 48, shapes) );
        }
        //D.19
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2256, 480, 48, 384, shapes) );
        }
        //D.20
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg",size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2304, 624, 192, 48, shapes) );
        }
        //D.21
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2208, 48, 48, 192, shapes) );
        }
        //D.22
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2448, 192, 48, 240, shapes) );
        }
        //D.23
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 52; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg",size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 1248, 2496, 48, shapes) );
        }
        // D.24
        {
            let shapes = []
            for (let i = 0, size = 0; i < 26; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(-48, 0, 48, 1248, shapes) );
        }
        chunks.push( new Chunk(0, chunkH, chunkW, chunkH, scenery, mobs) );
    }
    // CHUNK E
    {
        let mobs = [];
        mobs.push( new Mummy(1056, 196));
        mobs.push( new Mummy(480, 1056));
        mobs.push( new Mummy(2016, 196));
        mobs.push( new Bat(336, 336));
        mobs.push( new Bat(720, 816));
        mobs.push( new Bat(2352, 864));
        mobs.push( new Bat(1584, 96));
        let scenery = [];
        // E.1
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(-48, 432, 240, 48, shapes) );
        }
        // E.2
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 624, 192, 48, shapes) );
        }
        // E.3
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 960, 48, 288, shapes) );
        }
        // E.4
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(144, 192, 336, 48, shapes) );
        }
        // E.5
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(432, 240, 48, 480, shapes) );
        }
        // E.6
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(624, 192, 48, 240, shapes) );
        }
        // E.7
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 12; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(624, 432, 576, 48, shapes) );
        }
        // E.8
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1152, 48, 48, 384, shapes) );
        }
        // E.9
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 14; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1392, 48, 48, 672, shapes) );
        }
        // E.10
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 12; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(624, 672, 576, 48, shapes) );
        }
        // E.11
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(624, 720, 48, 336, shapes) );
        }
        // E.12
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 35; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(192, 864, 1680, 48, shapes) );
        }
        // E.13
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(336, 912, 48, 336, shapes) );
        }
        // E.14
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 20; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(624, 1056, 960, 48, shapes) );
        }
        // E.15
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1584, 480, 48, 192, shapes) );
        }
        // E.16
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1632, 576, 384, 48, shapes) );
        }
        // E.17
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1968, 624, 48, 288, shapes) );
        }
        // E.18
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2160, 624, 48, 288, shapes) );
        }
        // E.19
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2160, 576, 336, 48, shapes) );
        }
        // E.20
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 12; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1776, 384, 576, 48, shapes) );
        }
        // E.21
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1920, 48, 48, 336, shapes) );
        }
        // E.22
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1584, 192, 192, 48, shapes) );
        }
        // E.23
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2116, 192, 48, 196, shapes) );
        }
        // E.24
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2356, 48, 48, 192, shapes) );
        }
        // E.25
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2160, 1056, 288, 48, shapes) );
        }
        // E.26
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 16; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2448, 480, 48, 768, shapes) );
        }
        // E.27
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 52; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 1248, 2496, 48, shapes) );
        }
        chunks.push( new Chunk(chunkW, chunkH, chunkW, chunkH, scenery, mobs) );
    }
    // CHUNK F
    {
        let mobs = [];
        mobs.push( new Bat(96, 1056) );
        mobs.push( new Bat(480, 144) );
        mobs.push( new Bat(720, 336) );
        mobs.push( new Bat(288, 624) );
        mobs.push( new Bat(1872, 192) );
        mobs.push( new Bat(1632, 432) );
        mobs.push( new Bat(2112, 960) );
        let scenery = [];
        // F.1
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 46; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 1248, 2208, 48, shapes) );
        }
        // F.2
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 27; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(48, 192, 1296, 48, shapes) );

        }
        // F.3
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(384, 48, 48, 144, shapes) );
        }
        // F.4
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 11; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(864, 240, 48, 528, shapes) );
        }
        // F.5
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(864, 768, 144, 48, shapes) );
        }
        // F.6
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1008, 960, 480, 48, shapes) );
        }
        // F.7
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 11; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(192, 960, 528, 48, shapes) );
        }
        // F.8
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 9; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(672, 528, 48, 432, shapes) );
        }
        // F.9
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 11; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(192, 480, 528, 48, shapes) );
        }
        // F.10
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(192, 528, 48, 144, shapes) );
        }
        // F.11
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(192, 672, 336, 48, shapes) );
        }
        // F.12
        {
            let shapes = [];
            shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, 0, 48, 48) );
            shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, 48, 48, 48) );
            
            scenery.push( new SceneryObject(480, 720, 48, 96, shapes) );
        }
        // F.13
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1776, 48, 48, 192, shapes) );
        }
        // F.14
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 15; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1632, 384, 720, 48, shapes) );
        }
        // F.15
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1872, 576, 480, 48, shapes) );
        }
        // F.16
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1872, 624, 48, 480, shapes) );
        }
        // F.17
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1920, 816, 288, 48, shapes) );
        }
        // F.18
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2112, 1056, 240, 48, shapes) );
        }
        // F.19
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1056, 528, 240, 48, shapes) );
        }
        // F.20
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1440, 724, 240, 48, shapes) );
        }
        // F.21
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 26; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2496, 0, 48, 1248, shapes) );
        }
        chunks.push( new Chunk(chunkW * 2, chunkH, chunkW, chunkH, scenery, mobs) );
    }
    // CHUNK G
    {
        let mobs = [];
        mobs.push( new Mummy(96, 1152) );
        mobs.push( new Mummy(1776, 1152) );
        mobs.push( new Bat(1872, 192) );
        mobs.push( new Bat(96, 384) );
        mobs.push( new Bat(96, 864) );
        mobs.push( new Bat(816, 384) );
        mobs.push( new Bat(720, 1056) );
        mobs.push( new Bat(720, 1968) );
        mobs.push( new Bat(1104, 672) );
        mobs.push( new Bat(1344, 672) );
        mobs.push( new Relic(1248, 1100) );
        let scenery = [];
        // G.1
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 53; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(-48, 1248, 2544, 48, shapes) );
        }
        // G.2
        {
            let shapes = []
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(2304, 240, 192, 48, shapes) );
        }
        // G.3
        {
            let shapes = []
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, 0, 48, 48) );

            scenery.push( new SceneryObject(2304, 288, 48, 48, shapes) );
        }
        // G.4
        {
            let shapes = []
            for (let i = 0, size = 0; i < 35; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(816, 480, 1680, 48, shapes) );
        }
        // G.5
        {
            let shapes = []
            for (let i = 0, size = 0; i < 45; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(336, 720, 2160, 48, shapes) );
        }
        // G.6
        {
            let shapes = []
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(2016, 1008, 480, 48, shapes) );
        }
        // G.7
        {
            let shapes = []
            shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, 0, 48, 48) );

            scenery.push( new SceneryObject(2016, 1056, 48, 48, shapes) );
        }
        // G.8
        {
            let shapes = []
            shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, 0, 48, 48) );

            scenery.push( new SceneryObject(2256, 1200, 48, 48, shapes) );
        }
        // G.9
        {
            let shapes = []
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1248, 768, 48, 240, shapes) );
        }
        // G.10
        {
            let shapes = []
            for (let i = 0, size = 0; i < 14; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1056, 1008, 672, 48, shapes) );
        }
        // G.11
        {
            let shapes = []
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1680, 1056, 48, 192, shapes) );
        }
        // G.12
        {
            let shapes = []
            for (let i = 0, size = 0; i < 20; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(1104, 240, 960, 48, shapes) );
        }
        // G.13
        {
            let shapes = []
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(2016, 48, 48, 192, shapes) );
        }
        // G.14
        {
            let shapes = []
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(336, 240, 480, 48, shapes) );
        }
        // G.15
        {
            let shapes = []
            for (let i = 0, size = 0; i < 15; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(528, 288, 48, 720, shapes) );
        }
        // G.16
        {
            let shapes = []
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(0, 480, 336, 48, shapes) );
        }
        // G.17
        {
            let shapes = []
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(0, 960, 336, 48, shapes) );
        }
        // G.18
        {
            let shapes = []
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(768, 960, 144, 48, shapes) );
        }
        // G.19
        {
            let shapes = []
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(768, 1008, 48, 240, shapes) );
        }
        // G.20
        {
            let shapes = []
            for (let i = 0, size = 0; i < 26; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }

            scenery.push( new SceneryObject(-48, 0, 48, 1248, shapes) );
        }
        chunks.push( new Chunk(0, chunkH * 2, chunkW, chunkH, scenery, mobs) );
    }
    // CHUNK H
    {
        let mobs = [];
        mobs.push( new Mummy(576, 1152) );
        mobs.push( new Mummy(2400, 1152) );
        mobs.push( new Mummy(336, 1152) );
        mobs.push( new Mummy(768, 912) );
        mobs.push( new Mummy(1776, 912) );
        mobs.push( new Mummy(2064, 912) );
        mobs.push( new Bat(0, 144) );
        mobs.push( new Bat(480, 384) );
        mobs.push( new Bat(768, 720) );
        mobs.push( new Bat(336, 912) );
        mobs.push( new Bat(1584, 144) );
        mobs.push( new Bat(1776, 528) );
        let scenery = [];
        // H.1
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 52; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 1248, 2496, 48, shapes) );
        }
        // H.2
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2304, 240, 48, 288, shapes) );
        }
        // H.3
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2112, 48, 48, 480, shapes) );
        }
        // H.4
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 14; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1632, 768, 672, 48, shapes) );
        }
        // H.5
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1728, 48, 48, 384, shapes) );
        }
        // H.6
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 16; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1920, 240, 48, 768, shapes) );
        }
        // H.7
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1584, 672, 48, 192, shapes) );
        }
        // H.8
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2304, 672, 48, 192, shapes) );
        }
        // H.9
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 38; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(672, 1008, 1824, 48, shapes) );
        }
        // H.10
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 12; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1392, 432, 48, 576, shapes) );
        }
        // H.11
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(912, 624, 480, 48, shapes) );
        }
        // H.12
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 9; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(672, 816, 432, 48, shapes) );
        }
        // H.13
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 15; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(672, 288, 48, 720, shapes) );
        }
        // H.14
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 13; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(672, 240, 624, 48, shapes) );
        }
        // H.15
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 15; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(432, 528, 48, 720, shapes) );
        }
        // H.16
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 480, 480, 48, shapes) );
        }
        // H.17
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 720, 288, 48, shapes) );
        }
        // H.18
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 10; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 1008, 480, 48, shapes) );
        }
        // H.19
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 9; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 240, 432, 48, shapes) );
        }
        chunks.push( new Chunk(chunkW, chunkH * 2, chunkW, chunkH, scenery, mobs) );
    }
    // CHUNK I
    {
        let mobs = [];
        mobs.push( new Mummy(1920, 384) );
        mobs.push( new Mummy(96, 1152) );
        mobs.push( new Mummy(2400, 1152) );
        mobs.push( new Bat(192, 192) );
        mobs.push( new Bat(672, 480) );
        mobs.push( new Bat(864, 480) );
        mobs.push( new Bat(1056, 684) );
        mobs.push( new Bat(432, 720) );
        mobs.push( new Bat(384, 912) );
        let scenery = [];
        // I.1
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 53; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 1248, 2544, 48, shapes) );
        }
        // I.2
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(96, 48, 48, 384, shapes) );
        }
        // I.3
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 3; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(336, 288, 48, 144, shapes) );
        }
        // I.4
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 25; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(336, 240, 1200, 48, shapes) );
        }
        // I.5
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1200, 48, 48, 192, shapes) );
        }
        // I.6
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 17; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(768, 288, 48, 816, shapes) );
        }
        // I.7
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 17; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1488, 288, 48, 816, shapes) );
        }
        // I.8
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 18; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1776, 240, 48, 864, shapes) );
        }
        // I.9
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 14; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(1824, 480, 672, 48, shapes) );
        }
        // I.10
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 7; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2160, 768, 336, 48, shapes) );
        }
        // I.11
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2160, 816, 48, 288, shapes) );
        }
        // I.12
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(960, 528, 384, 48, shapes) );
        }
        // I.13
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(960, 576, 48, 384, shapes) );
        }
        // I.14
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 8; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(960, 960, 384, 48, shapes) );
        }
        // I.15
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 13; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 624, 48, 624, shapes) );
        }
        // I.16
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 12; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(0, 576, 576, 48, shapes) );
        }
        // I.17
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 4; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(528, 624, 48, 192, shapes) );
        }
        // I.18
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 6; i++) {
                shapes.push(new Img("./assets/textures/brick_floor.jpg", size, 0, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(288, 816, 288, 48, shapes) );
        }
        // I.19
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 5; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(288, 864, 48, 240, shapes) );
        }
        // I.20
        {
            let shapes = [];
            for (let i = 0, size = 0; i < 26; i++) {
                shapes.push(new Img("./assets/textures/brick_wall.jpg", 0, size, 48, 48) );
                size += 48;
            }
            
            scenery.push( new SceneryObject(2496, 0, 48, 1248, shapes) );
        }
        chunks.push( new Chunk(chunkW * 2, chunkH * 2, chunkW, chunkH, scenery, mobs) );
    }

    let bgX = cWidth - (cWidth + visionFieldSize)/2 - visionFieldSize/2;
    let bgY = 0
    let bgWidth = 7488 / 8 + (cWidth - visionFieldSize)/2 + 200
    let bgHeight = 7488 / 8 + (cWidth - visionFieldSize)/2 + 200
    let background = new Img("./assets/maps/background/temple.png", bgX, bgY, bgWidth, bgHeight);
    
    return new GameMap(7488, 3744, chunks, "transparent", background);
}

