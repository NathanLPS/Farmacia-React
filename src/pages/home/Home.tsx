function Home() {

    return (
        <>
            <div id="container" className="
                flex 
                justify-center 
                bg-blue-400
                ">
                <div id="subcontainer" className="
                    container 
                    grid 
                    grid-cols-2 
                    text-white
                    ">
                    <div id="texto" className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        ">
                        <h2 className="
                            text-5xl
                            font-bold
                        ">Farmacia + Vida</h2>
                        <p className="text-xl">A cura das suas dores</p>

                        <div className="
                            flex 
                            justify-around 
                            gap-4
                            ">
                        </div>
                    </div>

                    <div id="imagem" className="
                        flex 
                        justify-center
                        ">
                        <img
                            src= 'https://ik.imagekit.io/id3pm8vmy/pg.jpg?updatedAt=1706704896932'
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home