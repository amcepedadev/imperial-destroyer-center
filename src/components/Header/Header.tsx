import { until, useMediaQuery } from "../../hooks/media";
import './Header.scss';
import {AiOutlineBell} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';

export default function Header() {
  const isMobile = useMediaQuery(until.mobile);
  const isTablet = useMediaQuery(until.tablet) && !isMobile;
  const isDesktop = !isMobile && !isTablet;

  return <div className="HeaderMainContainer">
    <div>Imperial destroyers center</div>
    <div className="HeaderRightContainer"><AiOutlineBell className="HeaderBellIcon" /><FaUser className="HeaderUserIcon"/></div>
    </div>;
}