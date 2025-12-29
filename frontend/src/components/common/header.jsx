import TopBar from './topBar.jsx'
import NavBar from './navBar.jsx';
import CartDrawer from './cartDrawer.jsx';

const Header = () => {
    return (
        <div classNmae="header mx-auto flex items-center justify-center">
            <TopBar />
            <NavBar />
            <CartDrawer />
        </div>
    )
}

export default Header