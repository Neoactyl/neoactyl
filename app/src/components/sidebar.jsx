import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/assets/logo.png';
import Title from '../components/title';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';  


const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col h-screen w-[250px] border-r border-zinc-800 bg-zinc-900">
        <div className="w-full h-18 bg-zinc-900 flex flex-col items-start justify-center px-4 py-2">
            <img src={logo} alt="logo" className="w-[200px]" />
        </div>
        <div className="w-full h-[3px] bg-zinc-800"></div>
        <div className="w-full h-16 flex flex-col items-start justify-center px-2 py-[14px] mt-2">
        <label className="input bg-zinc-800 rounded-md">
            <svg className="h-[1em] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
            <input type="search" required placeholder="Search" className="bg-transparent text-white placeholder:text-zinc-500"/>
        </label>
        </div>
        <p className="text-white text-sm font-openSans px-4 py-2">General</p>
        <div className="w-full px-2 py-2">
            <ul>
                <li className="flex flex-col items-start justify-center text-white text-sm font-openSans gap-2">
                    <NavLink 
                        to="/dashboard" 
                        className={({ isActive }) => `
                            flex items-center gap-2 text-white text-sm font-openSans px-4 py-2 
                            hover:bg-zinc-800 rounded-md w-full transition-all duration-200
                            ${isActive ? 'bg-zinc-800 ' : ''}
                        `}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg> 
                        Dashboard
                    </NavLink>
                    <NavLink 
                        to="/newserver" 
                        className={({ isActive }) => `
                            flex items-center gap-2 text-white text-sm font-openSans px-4 py-2 
                            hover:bg-zinc-800 rounded-md w-full transition-all duration-200
                            ${isActive ? 'bg-zinc-800 ' : ''}
                        `}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>                       
                         Create Server
                    </NavLink>
                </li>
            </ul>
        </div>
        <p className="text-white text-sm font-openSans px-4 py-2">Economy</p>
        <div className="w-full px-2 py-2">
            <ul>
                <li className="flex flex-col items-start justify-center text-white text-sm font-openSans gap-2">
                    <a href="/dashboard" className="flex items-center gap-2 text-white text-sm font-openSans px-4 py-2 hover:bg-zinc-800 rounded-md w-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg> Store</a>
                    <a href="/dashboard" className="flex items-center gap-2 text-white text-sm font-openSans px-4 py-2 hover:bg-zinc-800 rounded-md w-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-timer"><line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/></svg> Afk earnings</a>
                    <a href="/dashboard" className="flex items-center gap-2 text-white text-sm font-openSans px-4 py-2 hover:bg-zinc-800 rounded-md w-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-cards"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"/></svg> Earn</a>
                </li>
            </ul>
        </div>
        <p className="text-white text-sm font-openSans px-4 py-2">Settings</p>
        <div className="w-full h-full px-2 py-2">
            <ul>
                <li className="flex flex-col items-start justify-center text-white text-sm font-openSans gap-2">
                    <a href="/dashboard" className="flex items-center gap-2 text-white text-sm font-openSans px-4 py-2 hover:bg-zinc-800 rounded-md w-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg> Account</a>
                    <a href="/dashboard" className="flex items-center gap-2 text-white text-sm font-openSans px-4 py-2 hover:bg-zinc-800 rounded-md w-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg> Admin</a>
                </li>
            </ul>
        </div>
        <div className="w-full h-[4px] bg-zinc-800"></div>
        <div className="flex flex-col items-start justify-end w-full p-4">
            <div className="flex items-center justify-between w-full bg-zinc-900/50 rounded-xl p-3.5 hover:bg-zinc-800/40 transition-all duration-300 border border-zinc-800/50">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/></svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-zinc-500 text-xs font-medium">Balance</span>
                        <span className="text-white text-sm font-semibold">0 Coins</span>
                    </div>
                </div>
                <button className="px-3.5 py-1.5 bg-blue-500/10 hover:bg-blue-500/15 rounded-lg transition-all duration-300 border border-blue-500/20">
                    <span className="text-blue-400 text-xs font-medium">Get More</span>
                </button>
            </div>
        </div>
    </nav>

  );
};

export default Sidebar;