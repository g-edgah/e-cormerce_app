import { useState } from 'react';
import Header from '../common/header.jsx';
import Footer from '../common/footer.jsx';
import Home from '../../pages/home.jsx'

const UserLayout = () => {
    const [page, setPage] = useState("home")

    return (
        <>
            <Header page="home" />
            <Home className='' />
            <Footer />
        </>
    )
}

export default UserLayout