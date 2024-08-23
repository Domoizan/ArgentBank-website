import HeadNav from "../../components/HeadNav"


const NavBar = ()=>{
  return(
  <>
    <HeadNav lnks=
    {[{
      lnk:"/Sign_in",
      txt:"Sign In",
      icone:"fa fa-user-circle",
    }]}
    />
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label
            >
          </div>
          {/*
          <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <a href="./user.html" className="sign-in-button">Sign in</a>
          {
          /*<!-- SHOULD BE THE BUTTON BELOW -->
          <!-{- <button className="sign-in-button">Sign In</button> -->
          <!--  -->
          */}
        </form>
      </section>
    </main>
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  </>)
}

export default NavBar