import React from 'react';
import {SidebarContainer,CloseIcon,Sidebarlink, SidebarMenu, SideBarRoute,SideBtnWrap, Icon} from './SidebarElements'

const Sidebar = ({isOpen, toogle}) => {
    return (
    
       <SidebarContainer isOpen={isOpen} onClick={toogle}>
       <Icon>
        <CloseIcon/>
       </Icon>
       <SidebarMenu>
       <Sidebarlink to = "/">Smoothies</Sidebarlink>
       <Sidebarlink to = "/">Acai Bowl</Sidebarlink>
       <Sidebarlink to = "/">Salad</Sidebarlink>
       </SidebarMenu>
       <SideBtnWrap>
       <SideBarRoute to = "/">Order Now</SideBarRoute>
       </SideBtnWrap>
       </SidebarContainer>
        
    );
};

export default Sidebar;
