import TopBar from './topBar.jsx'
import NavBar from './navBar.jsx';

const Header = () => {
    return (
        <div className="header mx-auto flex flex-col w-screen">
            <TopBar />
            <NavBar />
        </div>
    )
}

export default Header