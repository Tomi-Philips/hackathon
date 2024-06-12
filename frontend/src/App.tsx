import './App.css';
import Pages from './Pages/Pages';
import { BrowserRouter } from 'react-router-dom';
// import React, { useState } from 'react';
// import "@material-tailwind/react/tailwind.css";


const App: React.FC = () => {
    // const [users, setUsers] = useState([]);

    return (
        <BrowserRouter>
            <div>
				<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
					<div className="absolute bottom-0 left-0 right-0 top-[500px] bg-[radial-gradient(circle_700px_at_50%_200px,#c4b0ff,transparent)] blur-[100px]"></div>
					<div className="fixed bottom-auto -left-[150px] md:left-auto right-auto top-0 h-[700px] w-[500px] -translate-x-[50%] translate-y-[10%] rounded-full bg-[rgba(109,134,244,0.39)] opacity-70 blur-[50px]"></div>
					<div className="fixed bottom-auto left-auto -right-[400px] md:-right-60 top-0 h-[700px] w-[500px] rounded-full bg-[rgba(109,134,244,0.39)] translate-y-[10%] opacity-70 blur-[50px]"></div> 
				</div>

                <Pages/>
            </div>
        </BrowserRouter>
    );
};

export default App;
