import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './sidebar.scss';

const sidebarNavItems = [
  {
    display: "Preferred Payment",
    icon: <i className="bx bx-home"></i>,
    to: "/",
    section: "",
  },
  {
    display: "Credit & Debit Cards",
    icon: <i className="bx bx-star"></i>,
    to: "/creditdebitcard",
    section: "creditdebitcard",
  },
  {
    display: "Wallet",
    icon: <i className="bx bx-calendar"></i>,
    to: "/wallet",
    section: "wallet",
  },
  {
    display: "Upi",
    icon: <i className="bx bx-receipt"></i>,
    to: "/upi",
    section: "upi",
  },
  {
    display: "Other",
    icon: <i className="bx bx-receipt"></i>,
    to: "/other",
    section: "other",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="">
      <div ref={sidebarRef} className="">
        <div
          ref={indicatorRef}
          className=""
        ></div>
        {sidebarNavItems.map((item, index) => (
          <NavLink to={item.to} key={index}>
            <div className={`${activeIndex === index ? "active" : ""}`}>
              <ul className="nav flex-column mt-4 text-decoration-none">
                <li className="nav-item">
                  <a className="fs-5">
                    {item.icon}  {item.display}
                  </a>
                </li>
              </ul>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
