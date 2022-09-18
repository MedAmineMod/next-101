import Link from "next/link"

const Header = () => {
    return (
        <ul>
            <li>
                <Link href={"/"}>
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href={"/Contact"}>
                    <a>Contact</a>
                </Link>
            </li>
            <li>
                <Link href={"/About"}>
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href={"/Products"}>
                    <a>Products</a>
                </Link>
            </li>
        </ul>
    )
}


export default Header
