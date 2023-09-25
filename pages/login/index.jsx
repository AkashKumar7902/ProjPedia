import * as React from 'react';
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function Login() {
    const [isUser, setIsUser] = React.useState(true);
    const [user, setUser] = React.useState({
        name: "",
        password: "",
        email: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    React.useEffect(() => {
        if(user.name.length > 0 && user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    const setUserLogin = () => {
        setIsUser(true);
    }

    const setInstituteLogin = () => {
        setIsUser(false);
    }

    return (
        <div className="flex flex-col mx-auto mt-12 lg:w-1/4 w-1/2 bg-blue-200 rounded-lg">
            <div className="flex justify-center items-center border-b-2 border-blue-300 cursor-pointer">
                <div className={`w-1/2 flex justify-center p-4 items-center ${isUser ? 'bg-blue-300': ''}`} onClick={setUserLogin}>
                    <div>User</div>
                </div>
                <div className={`w-1/2 flex justify-center p-4 items-center ${!isUser ? 'bg-blue-300': ''}`} onClick={setInstituteLogin}>
                    <div>Institute</div>
                </div>
            </div>
            {isUser ? 
            (<>
                <div className="flex justify-center items-center p-3">
                    <input 
                        type="text"
                        placeholder="username" 
                        className="p-2 border-2 border-gray-300 rounded-lg w-3/4" 
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})}
                    />
                </div>
                <div className="flex justify-center items-center p-3">
                    <input 
                        type="text"
                        placeholder="email" 
                        className="p-2 border-2 border-gray-300 rounded-lg w-3/4" 
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                </div>
                <div className="flex justify-center items-center p-3">
                    <input 
                        type="text"
                        placeholder="password" 
                        className="p-2 border-2 border-gray-300 rounded-lg w-3/4" 
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                </div>
                <button onClick={onLogin} className="flex justify-center items-center p-3 bg-blue-300 rounded-lg">
                    Login
                </button>
                <div className="flex justify-center items-center p-2 text-slate-700">
                    <div>Not already a user ? <Link href="/signup" className='hover:underline'>Sign Up instead</Link></div>
                </div>
            </>
            ) : 
            (
                <>
                <div className="flex justify-center items-center p-3">
                    <input 
                        type="text"
                        placeholder="Institute name" 
                        className="p-2 border-2 border-gray-300 rounded-lg w-3/4" 
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})}
                    />
                </div>
                <div className="flex justify-center items-center p-3">
                    <input 
                        type="text"
                        placeholder="email" 
                        className="p-2 border-2 border-gray-300 rounded-lg w-3/4" 
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                </div>
                <div className="flex justify-center items-center p-3">
                    <input 
                        type="text"
                        placeholder="password" 
                        className="p-2 border-2 border-gray-300 rounded-lg w-3/4" 
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                </div>
                <button onClick={onLogin} className="flex justify-center items-center p-3 bg-blue-300 rounded-lg">
                    Login
                </button>
                <div className="flex justify-center items-center p-2 text-slate-700">
                    <div>Not already a user ? <Link href="/signup" className='hover:underline'>Sign Up instead</Link></div>
                </div>
            </>
            )}
            
        </div>
    );
}
