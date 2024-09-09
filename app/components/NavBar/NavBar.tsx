import Link from "next/link"
import React from "react"
import classes from "./NavBar.module.css"
const NavBar :React.FC = () => {

    return(
    <nav className={classes.mainNav} >
        <section  className={classes.sectionNav}>
             <Link className={classes.link} href={"#Home"}>Home</Link>
             <Link className={classes.link} href={"#About"}>About</Link>
             <Link className={classes.link} href={"#Projects"}>projects</Link>
        </section>
        <section  className={classes.sectionNav}>
             <Link className={classes.link} href={"#Technologies"}>Technologies</Link>
             <Link className={classes.link} href={"#Blogs"}>Blogs</Link>
             <Link className={classes.link} href={"#Contact"}>contact</Link>
        </section>
        
    </nav>
)
}

export default NavBar