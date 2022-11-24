import { Link, Outlet } from "react-router-dom";
import './Layout.css'

function Layout() {

    return <>

        <nav>
            <Link to='/'>All</Link>
            <Link to='/images'>Images</Link>
            <Link to='/videos'>Videos</Link>
            <Link to='/counter'>CounterPage</Link>
            <Link to='/new-page'>My new page</Link>
            <Link to='/sign'>Sign Page</Link>
            <Link to='/Tabela'>Tabela page</Link>
        </nav>

        <div className='midle-section'>
            <aside>
                <Link to='/'>All</Link><br />
                <Link to='/images'>Images</Link><br />
                <Link to='/videos'>Videos</Link><br />
                <Link to='/new-page'>My new page</Link><br/>
                <Link to='/sign'>Sign Page</Link><br/>
                <Link to='/Tabela'>Tabela page</Link>
            </aside>

            <div className="content">
                <Outlet />
            </div>

        </div>

        <footer>Footer</footer>
    </>

}

export default Layout;