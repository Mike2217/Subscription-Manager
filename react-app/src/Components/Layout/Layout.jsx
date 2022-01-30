import './Layout.css'
import Footer  from '../Footer/Footer'
import Header from '../Header/Header'


const Layout = (props) => (
    <div className='layout'>
    <Header />
        <div className="layout-children">
            {props.children}
        </div>
    <Footer />
    </div>
)

export default Layout
