import { useEffect } from 'react';

const Popular = ({ setPage }) => {

    useEffect(() => {
        //ensures page is set to popular when navigation is through other channels apart from button clicking such as navigating back 
        setPage("popular")
    }, [])

    return (
        <div>Popular</div>
    )
}

export default Popular