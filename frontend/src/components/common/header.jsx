import TopBar from './topBar.jsx'
import NavBar from './navBar.jsx';

const Header = ({page}) => {
    return (
        <div className="header mx-auto flex flex-col w-screen">
            <TopBar />
            <NavBar page={page} />
        </div>
    )
}

export default Header