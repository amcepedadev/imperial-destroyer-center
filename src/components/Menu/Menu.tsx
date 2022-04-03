import { until, useMediaQuery } from "../../hooks/media";
import './Menu.scss';
import {AiOutlineBell} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';

export default function Menu() {
  const isMobile = useMediaQuery(until.mobile);
  const isTablet = useMediaQuery(until.tablet) && !isMobile;
  const isDesktop = !isMobile && !isTablet;

  return <div className="MenuMainContainer">
    <div>Imperial destroyers center</div>
    <div className="MenuRightContainer"><AiOutlineBell className="MenuBellIcon" /><FaUser className="MenuUserIcon"/></div>
    </div>;
}