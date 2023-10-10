function Header(){
    return(
        <header>
            <nav>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" weight="40px" height="40px"></img>
            <ul>
            </ul>

            </nav>
        </header>

    )
}
function Footer(){
    return(
        <footer> React makes it painless to create interactive UIs</footer>

    )
}
function MainContent(){
    return(
        <div>
            <h2>Parent-child component</h2>
            <p>about raect</p>
            <ul>
            <li>react is composable</li>
              <li> react is declarative</li>
            <li> its actively maintained by skilled people</li>
            </ul>

        </div>
    )
}
function Page(){
    return(
        <div>
        <Header/>
        <Footer/>
        <MainContent/>
        </div>
    )
}

ReactDOM.render(<Page/>,document.getElementById("demo"))
