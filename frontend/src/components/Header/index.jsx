import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar/index'

const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <Container>
            <FaBars onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar} />}
        </Container>

        
            {/* <Header> */}
                {/* <Logo>
                    <img src={Logo} alt='formas geometricas' title='geometrica' />
                </Logo> */}
            {/* </Header> */}
            </>
    )
}

export default Header