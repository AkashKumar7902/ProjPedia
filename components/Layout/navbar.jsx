import { CNavbar, CContainer, CNavbarBrand } from '@coreui/react';
import Link from 'next/Link';

import logo from '../../public/final.png'

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between px-2 bg-slate-300 pb-3">
            <Link href="/">
                <div className="flex flex-row gap-2">
                    <img src="https://cdn.discordapp.com/attachments/1053686321908023418/1155204080491307118/final.png" className="w-[35px] ml-[10px]" alt="logo" /> 
                    <div className="flex justify-center items-center">ProjPedia</div>     
                </div>
            </Link>
            <Link href="/login" className="flex justify-center items-center">
                <button className="outline-1 rounded-md p-1 mt-2 outline-black outline bg-slate-200 w-20">Login</button>
            </Link>
        </div>
    );
}