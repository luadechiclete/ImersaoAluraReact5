function HomePage() {
    const estiloDasHomePages = { backgroundColor: "red" };
    return (
        <div style={estiloDasHomePages} > 
            <Menu />
            <Header />
            <Timeline />
        </div>
    )
  }
  
  export default HomePage

  function Menu() {
    return (
        <div>
            Menu
        </div>
    )
  }

  function Header() {
    return (
        <div>
            Header
        </div>
    )
  }

  function Timeline() {
    return (
        <div>
            Timeline
        </div>
    )
  }