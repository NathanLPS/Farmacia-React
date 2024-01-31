import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-blue-400 text-white border-black 
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Far+</Link>
                    <div className='flex gap-4'>
                        <div className='hover:underline'>Produtos</div>
                        <div className='hover:underline'>Categoria</div>
                        <div className='hover:underline'>Cadastrar categoria</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar