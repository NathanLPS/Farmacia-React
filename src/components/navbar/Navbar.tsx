import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-blue-400 text-white border-black 
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Far+</Link>
                    <div className='flex gap-4'>
                    <Link to='/categorias' className="hover:text-green-300 font-bold">Categorias</Link>
                    <Link to='/cadastrarCategoria' className="hover:text-green-300 font-bold">Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar