import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu} from "./ui/resizable-navbar"
import { useState } from "react";

export default function ModNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const items = [
        { name: 'Home', link: "/" },
        { name: 'TOTM', link: '/tomb-of-the-mask' },
        { name: 'State.io', link: '/State.io' },
        { name: 'Slice it all', link: '/slice-it-all' },
        { name: 'Draw Climber', link: '/Draw-Climber' },
        { name: 'Advanced', link: "/advanced"}
    ]

  return (
  <div className="relative w-full">
    <div style={{padding:"0.5rem"}}></div>
    <Navbar>
      <div className="backdrop-blur-xs rounded-3xl ml-[10vw] mr-[10vw]">
      <NavBody>
        <a href="/" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black">
          <span className="font-bold text-black dark:text-white">Patcher</span>
        </a>
        <NavItems items={items}/>
      </NavBody>
      </div>
      <MobileNav>
        <MobileNavHeader>
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}/>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {items.map((item, index) => (
            <a key={`mobile-link-${index}`}
            href={item.link}
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300">
              <span className="block">{item.name}</span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  </div>
  )
}