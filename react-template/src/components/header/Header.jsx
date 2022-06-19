import React, {useRef,useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'

const headerNav = [
    {
        display:'Home',
        path: '/'
    },
    {
        display:'Contact',
        path: '/contact'
    },
    {
        display:'Shop',
        path: '/shop'
    },
]
const Header = () => {
    const { pathname} = useLocation();
    const headerRef = useRef(null);
    const active = headerNav.findIndex( e => e.path === pathname);
    
    useEffect(() => {
        const shrinkHeader = () =>{
            if(document.body.scrollTop >100 || document.documentElement.scrollTop > 100){
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
            window.addEventListener('scroll',shrinkHeader)
            };
    }, [])
    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
            <div className="logo">
                {/* <img src={logo} alt='logo' style={{width:'50px'}}/> */}
                <Link to='/'>Page Name</Link>
            </div>
                {/* <div style={{display:'flex',alignItems:'center', justifyContent:'center', }}> */}
                    <ul className="header__nav">
                        {headerNav.map( (nav,index) => 
                            <li key={nav.display}>
                                <Link to={nav.path} className={`${index === active? 'active' : ''}`}>
                                    {nav.display}
                                </Link>
                            </li>
                         )}
                    </ul>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Header
