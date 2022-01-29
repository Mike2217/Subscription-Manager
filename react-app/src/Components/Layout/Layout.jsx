import './Layout.css'
import Footer from 'react-app/src/Components/Footer/Footer.jsx'
import Header from 'react-app/src/Components/Header/Header.jsx'

const Layout = () => (
    <div className='layout'>
    <Header />
        {/* <div className="layout-children">
            {props.children}
        </div> */}
    <Footer />
    </div>
)

export default Layout
