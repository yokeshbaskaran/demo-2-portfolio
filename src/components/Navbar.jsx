import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
        <nav className="mb-16 py-6 flex items-center justify-between ">
            <div className="flex flex-shrink-0 items-center text-4xl hover:text-purpled">
                PortFolio
            </div>
            <div className="m-8 flex items-center justify-center gap-5 text-2xl">
              <a href="#" className="flex items-center gap-1 "><AiFillHome/>Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#exper">Experience</a>
              <a href="#project">Projects</a>
            </div>
        </nav>
    </>
  )
}

export default Navbar