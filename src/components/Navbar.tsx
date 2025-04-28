import { NavLink , Link} from 'react-router-dom';
import logo from "../assets/LOGO-ALAMAL.png"
export const Navbar = () => {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-xl h-[90%] backdrop-blur">
          <img src={logo} className="w-full max-w-[100px] h-[100%]" />
        </NavLink>
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-[#121212]' : 'text-[#71717a]'  }    text-sm font-medium transition-colors hover:text-primary `}>
            Home
          </NavLink>
          <NavLink
            to="/properties"
            className={({ isActive }) =>  `${isActive ? 'text-[#121212]' : 'text-[#71717a]'  }    text-sm font-medium transition-colors hover:text-primary `}          >
            Properties
          </NavLink>
          <NavLink
            to="/agents"
            className={({ isActive }) => `${isActive ? 'text-[#121212]' : 'text-[#71717a]'  }    text-sm font-medium transition-colors hover:text-primary `}          >
            Agents
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? 'text-[#121212]' : 'text-[#71717a]'  }    text-sm font-medium transition-colors hover:text-primary `}          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${isActive ? 'text-[#121212]' : 'text-[#71717a]'  }    text-sm font-medium transition-colors hover:text-primary `}          >
            Contact
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <Link to="/login" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
