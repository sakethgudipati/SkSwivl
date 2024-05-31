import Navbar from "../Navbar/index"
import "./index.css"


const HomeRoute = () => (
    <>
        <Navbar />
        <div className="home-container">
            <div>
                <h1 className="home-head">
                    Hello! I'm <span className="head-highlight">Saketh Gudipati</span> let me walk you through my <span className="head-highlight">SAKETHSWIVL</span> todo application. I hope you like it!
                </h1>
                <button className="get-started-button">Get Started</button>
            </div>
            <img src="https://res.cloudinary.com/defacaof3/image/upload/v1717160739/frontend-performance-checklist_1_wd93go.webp" className="todo-image" alt="todo" />
        </div>
    </>
)

export default HomeRoute