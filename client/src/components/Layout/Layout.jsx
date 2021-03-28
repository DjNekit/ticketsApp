import { Navbar } from "../Navbar"

export const Layout = ({ children }) => {
	return (
        <div>
            <Navbar />
            <div class='container mt-3'>
                {children}  
            </div> 
        </div>
	)
}
