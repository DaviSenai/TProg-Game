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

function getMenu(){
    let color = "white";
    let chunks = [];
    {
        let scenery = [];
        {
            scenery.push( new SceneryObject(144, 240, 432, 48, shapes));
        }
        chunks.push( new Chunk(0, 0, chunkWidth, chunkHeight, scenery) );
    }
    return new GameMap(30000, 10000, chunks, "purple");
}


function getForestMap(){
    let chunks = [];

    let chunkWidth = 1728;
    let chunkHeight = 1584;
    
    /*CHUNK 1*/
    {
        let scenery = [];
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

            scenery.push( new SceneryObject(864, 0, 48, 192, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            
            scenery.push( new SceneryObject(864, 192, 864, 48 , shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            
            scenery.push( new SceneryObject(144, 240, 432, 48, shapes));
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));

            scenery.push( new SceneryObject(144, 192, 48, 48, shapes));
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

            scenery.push( new SceneryObject(336, 284, 48, 192, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            
            scenery.push( new SceneryObject(0, 428, 672, 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

            scenery.push( new SceneryObject(672, 380, 48, 192, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));

            scenery.push( new SceneryObject(864, 380, 48, 336, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));

            scenery.push( new SceneryObject(912, 380, 768, 48 , shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

            scenery.push( new SceneryObject(1680, 380, 48, 192, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));

            scenery.push( new SceneryObject(0, 620, 384, 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));

            scenery.push( new SceneryObject(144, 572, 48, 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            
            scenery.push( new SceneryObject(144, 812, 432, 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));

            scenery.push( new SceneryObject(144, 812, 48, 96, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            
            scenery.push( new SceneryObject(0, 1052, 336, 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

            scenery.push( new SceneryObject(336, 1004, 48, 144, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            
            scenery.push( new SceneryObject(144, 1340, 864, 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,432,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,480,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,528,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,576,48,48));

            scenery.push( new SceneryObject(576, 716, 48, 624, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",960,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1008,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1056,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1104,0,48,48));

            scenery.push( new SceneryObject(576, 716, 1152, 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            
            scenery.push( new SceneryObject(0, 1532, 336, 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));

            scenery.push( new SceneryObject(576, 1532, 432, 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));

            scenery.push( new SceneryObject(1008, 1340, 48 , 240, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));

            scenery.push( new SceneryObject(1200, 1196, 48 , 384, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));

            scenery.push( new SceneryObject(1392, 1196, 48 , 384, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));


            scenery.push( new SceneryObject(864, 1148, 864, 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

            scenery.push( new SceneryObject(1536, 956, 48 , 192, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));

            scenery.push( new SceneryObject(1344, 764, 48 , 240, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));

            scenery.push( new SceneryObject(1536, 908, 192 , 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));

            scenery.push( new SceneryObject(1584, 1340, 144 , 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));

            scenery.push( new SceneryObject(816, 1100, 48 , 96, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));

            scenery.push( new SceneryObject(864, 908, 480, 48, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));

            scenery.push( new SceneryObject(816, 860, 48 , 96, shapes));  
        }
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

            scenery.push( new SceneryObject(1584, 1388, 48 , 192, shapes));  
        }

        chunks.push( new Chunk(0, 0, chunkWidth, chunkHeight, scenery) );
    }
    /*CHUNK 2*/
    {
        let scenery = [];

        /*2.1*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));

            scenery.push( new SceneryObject(192, 192, 960, 48, shapes));  

        }
         /*2.2*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));

            scenery.push( new SceneryObject(144, 192, 48, 336, shapes));  
        }
        /*2.3*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
        
            scenery.push( new SceneryObject(336, 432, 48, 192, shapes));  
        }
        /*2.4*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));

            scenery.push( new SceneryObject(384, 432, 768, 48, shapes));  
        }
        /*2.5*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",960,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1008,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1056,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1104,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1152,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1200,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1248,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1296,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1344,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1392,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1440,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1488,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1536,0,48,48));

            scenery.push( new SceneryObject(144, 816, 1585, 48, shapes));  
        }
        /*2.6*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));
            

            scenery.push( new SceneryObject(1152, 192, 48, 432, shapes));  
        }
        /*2.7*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));

            scenery.push( new SceneryObject(528, 720, 48, 96, shapes));  
        }
        /*2.8*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));

            scenery.push( new SceneryObject(1344, 384, 48, 432, shapes));  
        }
        /*2.9*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));

            scenery.push( new SceneryObject(1392, 384, 336, 48, shapes));  

        }
        /*2.10*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));

            scenery.push( new SceneryObject(1536, 576, 144, 48, shapes));  
        }
        /*2.11*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

            scenery.push( new SceneryObject(1536, 624, 48, 192, shapes));  
        }
        /*2.12*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));

            scenery.push( new SceneryObject(144, 1008, 480, 48, shapes));  
        }
        /*2.13*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,432,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,480,48,48));
       
            scenery.push( new SceneryObject(336, 1056, 48, 528, shapes));  
        }
         /*2.14*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));

            scenery.push( new SceneryObject(96, 1200, 240, 48, shapes));  
        }
         /*2.15*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));

            scenery.push( new SceneryObject(144, 1440, 192, 48, shapes));  
        }
         /*2.16*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,432,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,480,48,48));
       
            scenery.push( new SceneryObject(576, 1056, 48, 528, shapes));  
        }
        /*2.17*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));

            scenery.push( new SceneryObject(816, 1008, 864, 48, shapes));  
        }
         /*2.18*/
         {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));

            scenery.push( new SceneryObject(624, 1200, 864, 48, shapes));  
        }
         /*2.19*/
         {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));

            scenery.push( new SceneryObject(816, 1392, 864, 48, shapes));  
        }
          /*2.20*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));

            scenery.push( new SceneryObject(624, 1536, 768, 48, shapes));  
        }
        /*2.21*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));
       
            scenery.push( new SceneryObject(1680, 1008, 48, 432, shapes));  
        }
        /*2.22*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
       
            scenery.push( new SceneryObject(1152, 1248, 48, 192, shapes));  
        }
        
        chunks.push( new Chunk(1728, 0, chunkWidth, chunkHeight, scenery) );
    }
     /*CHUNK 3*/   
    {
        let scenery = [];
        /*3.1*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));

            scenery.push( new SceneryObject(0, 192, 384, 48, shapes) );
        }
        /*3.2*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48)); 
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));

            scenery.push( new SceneryObject(721, 192, 960, 48, shapes) );
        }
        /*3.3*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));

            scenery.push( new SceneryObject(1681, 0, 48, 432, shapes) );
        }
        /*3.4*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));

            scenery.push( new SceneryObject(144, 432, 48, 288, shapes) );
        }
        /*3.5*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));

            scenery.push( new SceneryObject(144, 384, 572, 48, shapes) );
        }
        /*3.6*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",960,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1008,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1056,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1104,0,48,48));

            scenery.push( new SceneryObject(528, 576, 1152, 48, shapes) );
        }
        /*3.7*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));

            scenery.push( new SceneryObject(336, 432, 48, 432, shapes) );
        }
        /*3.8*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));

            scenery.push( new SceneryObject(384, 816, 480, 48, shapes) );
        }
        /*3.9*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));

            scenery.push( new SceneryObject(1536, 816, 144, 48, shapes) );
        }
        /*3.10*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,432,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,480,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,528,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,576,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,624,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,672,48,48));

            scenery.push( new SceneryObject(1680, 576, 48, 720, shapes) );
        }
        /*3.11*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));

            scenery.push( new SceneryObject(816, 864, 48, 240, shapes) );
        }
        /*3.12*/
        {
        let shapes = [];
        shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",960,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",1008,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",1056,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",1104,0,48,48));

        scenery.push( new SceneryObject(192, 1008, 1152, 48, shapes) );
        }
        /*3.13*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));

            scenery.push( new SceneryObject(1392, 1248, 336, 48, shapes) );
        }
        /*3.14*/
        {
        let shapes = [];
        shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));

        scenery.push( new SceneryObject(721, 1440, 864, 48, shapes) );
        }
        /*3.15*/
        {
        let shapes = [];
        shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));

        scenery.push( new SceneryObject(817, 1248, 336, 48, shapes) );
        }
        /*3.16*/
        {
        let shapes = [];
        shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
        shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));

        scenery.push( new SceneryObject(817, 1296, 48, 144, shapes) );
        }
        /*3.17*/
        {
        let shapes = [];
        shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
        shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
        shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

        scenery.push( new SceneryObject(673, 1296, 48, 192, shapes) );
        }
        /*3.18*/
        {
        let shapes = [];
        shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));

        scenery.push( new SceneryObject(144, 1248, 576, 48, shapes) );
        }
        /*3.19*/
        {
        let shapes = [];
        shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
        shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
        shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
        shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
        shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
        shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));

        scenery.push( new SceneryObject(144, 960, 48, 288, shapes) );
        }

        chunks.push( new Chunk(3456, 0, chunkWidth, chunkHeight, scenery) );
    }
    /* CHUNCK 4 */
    {
        let scenery = [];
        // /*pyramid*/
        // {
        //     let shapes = [];
        //     shapes.push( new Img("./assets/img/pyramid.png",0,0,512,512));

        //     scenery.push( new SceneryObject(300, 144, 192, 48, shapes));  
        // }
        /*4.1*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",960,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1008,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1056,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1104,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1152,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1200,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1248,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1296,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1344,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1392,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1440,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1488,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1536,0,48,48));

            scenery.push( new SceneryObject(144, 864, 1585, 48, shapes));  
        }/*4.2*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));

            scenery.push( new SceneryObject(96, 1104, 192, 48, shapes));  
        }
        /*4.3*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));

            scenery.push( new SceneryObject(480, 1056, 624, 48, shapes));  
        }
        /*4.4*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));

            scenery.push( new SceneryObject(1440, 1056, 288, 48, shapes));  
        }
        /*4.5*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

            scenery.push( new SceneryObject(1056, 864, 48, 192, shapes));  
        }
        /*4.6*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

            scenery.push( new SceneryObject(288, 1104, 48, 192, shapes));  
        }
        /*4.7*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));

            scenery.push( new SceneryObject(1344, 1296, 384, 48, shapes));  
        }
        /*4.8*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));

            scenery.push( new SceneryObject(96, 1296, 912, 48, shapes));  
        }
        /*4.9*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));

            scenery.push( new SceneryObject(144, 1536, 864, 48, shapes));  
        }
        /*4.10*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));

            scenery.push( new SceneryObject(1200, 1536, 528, 48, shapes));  
        }
        /*4.11*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));

            scenery.push( new SceneryObject(1008, 1296, 48, 288, shapes));  
        }
        /*4.12*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));

            scenery.push( new SceneryObject(1200, 1296, 48, 288, shapes));  
        }

        chunks.push( new Chunk(5184, 0, chunkWidth, chunkHeight, scenery) );
    }

    /*CHUNK 5*/
    {
    let scenery = [];
        /*5.1*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));

            scenery.push( new SceneryObject(0, 144, 192, 48, shapes) );
        }
        /*5.2*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));

            scenery.push( new SceneryObject(336, 144, 960, 48, shapes) );
        }
        /*5.3*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",960,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1008,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1056,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1104,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1152,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1200,0,48,48));

            scenery.push( new SceneryObject(384, 336, 1248, 48, shapes) );
        }
        /*5.4*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));

            scenery.push( new SceneryObject(0, 384, 192, 48, shapes) );
        }
        /*5.5*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

            scenery.push( new SceneryObject(336, 192, 48, 192, shapes));  
        }
        /*5.6*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));

            scenery.push( new SceneryObject(432, 192, 48, 192, shapes));  
        }
        /*5.2*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));

            scenery.push( new SceneryObject(336, 576, 960, 48, shapes) );
        }
       


        chunks.push( new Chunk(0, 1584, chunkWidth, chunkHeight, scenery) ); 
    }

    /*CHUNK 6*/
    {
        let scenery = [];
        /*6.1*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));

            scenery.push( new SceneryObject(0, 192, 192, 48, shapes) );
        }
        /*6.2*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48)); 
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));

            scenery.push( new SceneryObject(336, 192, 912, 48, shapes) );
        }
        /*6.3*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));

            scenery.push( new SceneryObject(1248, 336, 480, 48, shapes) );
        }
        /*6.4*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));

            scenery.push( new SceneryObject(1200, 0, 48, 384, shapes) );
        }
        /*6.5*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));

            scenery.push( new SceneryObject(192, 432, 528, 48, shapes) );
        }
        /*6.6*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));

            scenery.push( new SceneryObject(192, 672, 336, 48, shapes) );
        }
        /*6.7*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,432,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,480,48,48));

            scenery.push( new SceneryObject(144, 240, 48, 528, shapes) );
        }
        /*6.8*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,432,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,480,48,48));

            scenery.push( new SceneryObject(720, 432, 48, 528, shapes) );
        }
        /*6.9*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));

            scenery.push( new SceneryObject(192, 912, 528, 48, shapes) );
        }
        /*6.10*/
        {
            let shapes = [];

            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48)); 
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            
            scenery.push( new SceneryObject(0, 1152, 768, 48, shapes) );
        }
        /*6.11*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));

            scenery.push( new SceneryObject(912, 576, 768, 48, shapes) );
        }
        /*6.12*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48)); 
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,432,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,480,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,528,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,576,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,624,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,672,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,720,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,768,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,816,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,864,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,912,48,48));

            scenery.push( new SceneryObject(912, 624, 48, 960, shapes) );
        }
        /*6.13*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));

            scenery.push( new SceneryObject(1200, 624, 48, 240, shapes) );
        }
        /*6.14*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));

            scenery.push( new SceneryObject(1104, 816, 96, 48, shapes) );
        }
        /*6.15*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));

            scenery.push( new SceneryObject(912, 1056, 768, 48, shapes) );
        }
         /*6.16*/
        {
            let shapes = [];

            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48)); 
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            
            scenery.push( new SceneryObject(0, 1344, 768, 48, shapes) );
        }
        /*6.17*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));

            scenery.push( new SceneryObject(720, 1344, 48, 48, shapes) );
        }
        /*6.18*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));

            scenery.push( new SceneryObject(0, 1344, 48, 240, shapes) );
        }
        chunks.push( new Chunk(1728, 1584, chunkWidth, chunkHeight, scenery) ); 
    }
    /*CHUNK 7*/
    {
        let scenery = [];
        {
            /*7.1*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
    
                scenery.push( new SceneryObject(624, 48, 912, 48, shapes) );
            }
            /*7.2*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
    
                scenery.push( new SceneryObject(1008, 288, 528, 48, shapes) );
            }
            /*7.3*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));
    
                scenery.push( new SceneryObject(768, 480, 960, 48, shapes) );
            }
            /*7.4*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));
    
                scenery.push( new SceneryObject(432, 720, 960, 48, shapes) );
            }
            /*7.5*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
    
                scenery.push( new SceneryObject(960, 960, 768, 48, shapes) );
            }
            /*7.6*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
    
                scenery.push( new SceneryObject(1536, 48, 48, 288, shapes) );
            }
            /*7.7*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,432,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,480,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,528,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,576,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,624,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,672,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,720,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,768,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,816,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,864,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,912,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,960,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,1008,48,48));
    
                scenery.push( new SceneryObject(432, 48, 48, 1056, shapes) );
            }
            /*7.8*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));

                scenery.push( new SceneryObject(48, 760, 384, 48, shapes) );
            }
            /*7.9*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));

                scenery.push( new SceneryObject(288, 288, 480, 48, shapes) );
            }
            /*7.11*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
    
                scenery.push( new SceneryObject(624, 1152, 720, 48, shapes) );
            }
            /*7.10*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
    
                scenery.push( new SceneryObject(1344, 1152, 48, 192, shapes) );
            }
            /*7.12*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
    
                scenery.push( new SceneryObject(144, 1344, 912, 48, shapes) );
            }
            /*7.13*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
                shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
    
                scenery.push( new SceneryObject(1056, 1344, 48, 240, shapes) );
            }
            /*7.14*/
            {
                let shapes = [];
                shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
                shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
    
                scenery.push( new SceneryObject(1344, 1344, 384, 48, shapes) );
            }
        }

        chunks.push( new Chunk(3456, 1584, chunkWidth, chunkHeight, scenery) );
    }
    /* CHUNCK 8 */
    {
        let scenery = [];
        /*8.1*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));

            scenery.push( new SceneryObject(48, 720, 912, 48, shapes) );
        }
        /*8.2*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));

            scenery.push( new SceneryObject(240, 480, 624, 48, shapes) );
        }
         /*8.3*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",960,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1008,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1056,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1104,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1152,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1200,0,48,48));

            scenery.push( new SceneryObject(480, 144, 1248, 48, shapes) );
        }
         /*8.4*/
         {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));

            scenery.push( new SceneryObject(1104, 576, 624, 48, shapes) );
        }
         /*8.5*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,336,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,384,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,432,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,480,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,528,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,576,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));

            scenery.push( new SceneryObject(0, 144, 48, 624, shapes) );
        }
        /*8.6*/
         {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,240,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,288,48,48));

            scenery.push( new SceneryObject(240, 144, 48, 336, shapes) );
        }
        /*8.7*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));

            scenery.push( new SceneryObject(0, 1152, 384, 48, shapes) );
        }
        /*8.8*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,576,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",960,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1008,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1056,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1104,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1152,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1200,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1248,0,48,48));

            scenery.push( new SceneryObject(240, 960, 1296, 48, shapes) );
        }
        /*8.9*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",576,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",624,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",672,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",720,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",768,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",816,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",864,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",912,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",960,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1008,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1056,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1104,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1152,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",1200,0,48,48));

            scenery.push( new SceneryObject(480, 1152, 1248, 48, shapes) );
        }
        /*8.10*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));

            scenery.push( new SceneryObject(1536, 960, 48, 240, shapes) );
        }
        /*8.11*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",240,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",288,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",336,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",384,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",432,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",480,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",528,0,48,48));

            scenery.push( new SceneryObject(48, 1344, 576, 48, shapes) );
        }
        /*8.12*/
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",48,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",96,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",144,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",192,0,48,48));

            scenery.push( new SceneryObject(816, 1392, 240, 48, shapes) );
        }
        /*8.13 */
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));

            scenery.push( new SceneryObject(0, 1152, 48, 240, shapes) );
        }
        /*8.14 */
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));

            scenery.push( new SceneryObject(1056, 1392, 48, 240, shapes) );
        }
        /*8.15 */
        {
            let shapes = [];
            shapes.push( new Img("./assets/textures/Block.png",0,0,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,48,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,96,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,144,48,48));
            shapes.push( new Img("./assets/textures/Block.png",0,192,48,48));

            scenery.push( new SceneryObject(1296, 1392, 48, 240, shapes) );
        }

        chunks.push( new Chunk(5184, 1584, chunkWidth, chunkHeight, scenery) );
    }

    /*
        Medida interna(CHUNK):  1728 - largura e 1584 - altura
        Coloquei um pixel de diferença para cada chunk */
    return new GameMap(6916, 3160, chunks, "purple");
}
