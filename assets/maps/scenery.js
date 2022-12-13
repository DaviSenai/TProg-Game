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
        // Mobs
        let mobs = [];
        mobs.push( new Bat(600, 220) );
        mobs.push( new Mushroom(150, 450) );
        // mobs.push( new Relic(450, 450) );
        mobs.push( new Key(450, 450) );
        mobs.push( new TempleDoor(250, 450) );
        
        // Scenery
        let scenery = [];
        {
            let shapes = [];
            shapes.push( new Rectangle(0, 0, 100, 100, "#444444", [20]) );
            shapes.push( new Rectangle(10, 10, 80, 80, "#777777", [20]) );

            scenery.push( new SceneryObject(350, 220, 100, 100, shapes) );
        }
        // {
        //     let shapes = [];
        //     shapes.push( new Rectangle(0, 0, 100, 100, "#444444", [20]) );
        //     shapes.push( new Rectangle(10, 10, 80, 80, "#777777", [20]) );

        //     scenery.push( new SceneryObject(750, 220, 100, 100, shapes) );
        // }
        {
            let shapes = [];
            shapes.push( new Rectangle(0, 0, cWidth, 200, "green") );
            
            scenery.push( new SceneryObject(0, cHeight - 270, cWidth, 200, shapes) );
        }
        chunks.push( new Chunk(0, 0, cWidth, cHeight, scenery, mobs) );
    }
    {
        // Mobs
        let mobs = [];
        mobs.push( new Mummy(350, 350) );
        mobs.push( new Bat(600, 220) );
        
        // Scenery
        let scenery = [];
        // {
        //     let shapes = [];
        //     shapes.push( new Rectangle(0, 0, 100, 100, "#444444", [20]) );
        //     shapes.push( new Rectangle(10, 10, 80, 80, "#777777", [20]) );

        //     scenery.push( new SceneryObject(350, 220, 100, 100, shapes) );
        // }
        {
            let shapes = [];
            shapes.push( new Rectangle(0, 0, 100, 100, "#444444", [20]) );
            shapes.push( new Rectangle(10, 10, 80, 80, "#777777", [20]) );

            scenery.push( new SceneryObject(750, 220, 100, 100, shapes) );
        }
        {
            let shapes = [];
            shapes.push( new Rectangle(0, 0, 100, 20, "#444444", [20]) );

            scenery.push( new SceneryObject(150, 480, 100, 20, shapes) );
        }
        // {
        //     let shapes = [];
        //     shapes.push( new Rectangle(0, 0, 100, 20, "#444444", [20]) );

        //     scenery.push( new SceneryObject(1150, 480, 100, 20, shapes) );
        // }
        {
            let shapes = [];
            shapes.push( new Rectangle(0, 0, cWidth, 200, "green") );
            
            scenery.push( new SceneryObject(0, cHeight - 270, cWidth, 200, shapes) );
        }
        chunks.push( new Chunk(cWidth, 0, cWidth, cHeight, scenery, mobs) );
    }

    let bgX = cWidth - (cWidth + visionFieldSize)/2 - visionFieldSize/2;
    let bgY = 0
    let bgWidth = 6916 / 8 + (cWidth - visionFieldSize)/2
    let bgHeight = 6916 / 8 + (cWidth - visionFieldSize)/2
    let background = new Img("./assets/maps/background/forest.png", bgX, bgY, bgWidth, bgHeight);

    return new GameMap(2*cWidth, cHeight, chunks, "gray", background);
}


function getDarkPitch() {
	let shapes = [];
	shapes.push( new Rectangle(0, 0, cWidth, (cHeight - visionFieldSize) / 2, "#000000") );
	shapes.push( new Rectangle(0, cHeight - (cHeight - visionFieldSize) / 2, cWidth, (cHeight - visionFieldSize) / 2, "#000000") );
	shapes.push( new Rectangle(0, (cHeight - visionFieldSize) / 2, (cWidth - visionFieldSize) / 2, visionFieldSize, "#000000") );
	shapes.push( new Rectangle(cWidth - (cWidth - visionFieldSize) / 2, (cHeight - visionFieldSize) / 2, (cWidth - visionFieldSize) / 2, visionFieldSize, "#000000") );
	let circle = new Rectangle((cWidth - visionFieldSize) / 2 - visionFieldSize/8, (cHeight - visionFieldSize) / 2 - visionFieldSize/8, visionFieldSize + visionFieldSize/4, visionFieldSize + visionFieldSize/4, "#000000", [visionFieldSize])
	circle.fill(false);
	circle.lineWidth(visionFieldSize/4);
	shapes.push( circle );

	return new SceneryObject(0, 0, 0, 0, shapes);
}

function getLifeBar() {
    return new SceneryObject(cWidth - 160, 20, 145, 30, []);
}
