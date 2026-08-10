function Navbar({ cartCount }) {

    return (

        <nav>
            <h2>My store</h2>
            <p>Cart: {cartCount}</p>
        </nav>
    )
}

export default Navbar;