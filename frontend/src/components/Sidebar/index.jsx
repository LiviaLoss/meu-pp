import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  // FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  // FaRegCalendarAlt,
  // FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Página inicial" />
        <SidebarItem Icon={FaUserAlt} Text="Cadastro" />
        <SidebarItem Icon={FaUserAlt} Text="Cadastro para profissionais" />
        <SidebarItem Icon={FaUserAlt} Text="Login" />
        <SidebarItem Icon={FaEnvelope} Text="Ajuda aqui" />
        <SidebarItem Icon={FaIdCardAlt} Text="Psicólogos Online" />
        <SidebarItem Icon={FaRegFileAlt} Text="Feed" />
      </Content>
    </Container>
  )
}

export default Sidebar