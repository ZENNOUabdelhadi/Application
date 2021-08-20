import { Button, Layout, Menu } from 'antd';
import { Dropdown, message } from 'antd';
import { Image } from 'antd';
import logo from '../img/logo.PNG'
import { HomeOutlined,GlobalOutlined,FolderOutlined,SettingOutlined} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import ReactDOM from 'react-dom'
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Avatar from 'antd/lib/avatar/avatar';
import Home from '../page/Home';
import Contact from '../page/Contact';
import About from '../page/About';
import Cours from '../page/COURS/Cours';
import Mathématique from '../page/COURS/Mathématique/Mathématique';
import Physique from '../page/COURS/Phisique/Physique';
import Informatique from '../page/COURS/Informatique/Informatique';
import Chimie from '../page/COURS/Chimie/Chimie';
import Géologie from '../page/COURS/Géologie/Géologie';
import Biologie from '../page/COURS/Biologie/Biologie';
const { Content, Footer, Sider } = Layout; 




function Navbar(props) {


  
  return (
    <div className="Navbar">
       <Layout>
        
  

    <Sider
      style={{
        overflow: 'auto',
        height: '550vh',
        position: 'fixed',
        width: '300px',
        left: 0,
        width:"1000px",
        maxWidth: '300px'
      }}
    >



      <Menu  theme="dark" mode="inline" defaultSelectedKeys={['4']} mode="vertical">
      <div className="logo" style={{height: "60px"}} >
      <img src={logo} style={{height:"67px",backgroundPositionY:"center"}} />
      </div>

        <Menu.Item key="1" icon={< HomeOutlined />}><Link  to="/Home"></Link>HOME  </Menu.Item>
        <Link  to="/Cours"><SubMenu key="sub1" icon={<FolderOutlined />} title="COURS"> 
      <Menu.Item key="2" icon={<FolderOutlined />}><Link  to="/Mathématique"></Link>Mathématique</Menu.Item>
      <Menu.Item key="3" icon={<FolderOutlined />}><Link  to="/Physique"></Link>Physique</Menu.Item>
      <Menu.Item key="4" icon={<FolderOutlined />}><Link  to="/informatique"></Link>Informatique</Menu.Item>
      <Menu.Item key="5" icon={<FolderOutlined />}><Link  to="/Chimie"></Link>Chimie</Menu.Item>
      <Menu.Item key="6" icon={<FolderOutlined />}><Link  to="/Géologie"></Link>Géologie</Menu.Item>
      <Menu.Item key="7" icon={<FolderOutlined />}><Link  to="/Biologie"></Link> Biologie</Menu.Item>
     
    </SubMenu></Link>
        <Menu.Item key="6" icon={<GlobalOutlined />}> <Link  to="/About"></Link>  ABOUT ME </Menu.Item>
        <Menu.Item key="7" icon={<GlobalOutlined />}> <Link  to="/Contact"></Link>  CONTACT ME  </Menu.Item>
        <Menu.Item key="8" icon={<SettingOutlined />}> <Link  to="/About"></Link>  SETTING </Menu.Item>
       
      </Menu>
      </Sider>
   
    <Layout className="site-layout" className="l">

      <Content style={{ margin: '24px 16px 0', overflow: 'initial', width: "980px",
    marginLeft: "203px" }}>
        

        <Switch>
        <Route path="/Home" exact component={Home} />
        <Route path="/About" exact component={About}/> 
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Cours" exact component={Cours}/> 
        <Route path="/Mathématique" exact component={Mathématique}/> 
        <Route path="/Physique" exact component={Physique}/> 
        <Route path="/Informatique" exact component={Informatique}/> 
        <Route path="/Chimie" exact component={Chimie}/> 
        <Route path="/Géologie" exact component={Géologie}/> 
        <Route path="/Biologie" exact component={Biologie}/> 
        </Switch>
         
    
      </Content>
      <Footer style={{ textAlign: 'center' }}>ZENNOU <span style={{color:"red"}}></span> ©2021 - Tous les droits sont réservés</Footer>
    </Layout>
   
   
    </Layout>
    </div>
  );
}

export default Navbar;