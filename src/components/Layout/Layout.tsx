import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Layout.scss";

type Props = {
  children?: React.ReactNode;}
  ;

export default function Layout({ children }: Props)  {
  return <div className="LayoutMainContainer">
   {/*  <div style={{display: 'flex', flexDirection: 'row'}}>
    <Menu />
    <div> */}
    <Header/>
    {children}
   {/*  </div>
    </div> */}
    </div>;
}
