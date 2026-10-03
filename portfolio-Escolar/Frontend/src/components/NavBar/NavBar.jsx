import "./NavBar.css"
function NavBar({ scroll }){
    return(
    <nav className="navBar" style={{
        transform: `translate(-50%, ${-scroll * 0.5}px)`
    }}>

        <button className="Logo">
            MN.
        </button>
        <div className="navLinks">
            <button>
                portfólio SESI
            </button>
            <button>
                portfólio SENAI
            </button>
        </div>
    </nav>
    )
}

export default NavBar