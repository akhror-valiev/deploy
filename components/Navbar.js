import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
	const { data: session } = useSession();

	return (
		<nav className={styles.header}>
			<h1 className={styles.logo}>
				<a href="#">NextAuth</a>
			</h1>
			<ul className={`main-nav `}>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/dataset">
						<a>Data Set</a>
					</Link>
				</li>

				{!session && (
					<li>
						<Link href="/api/auth/signin">
							<a
								onClick={(e) => {
									e.preventDefault();
									signIn("github");
								}}
							>
								Sign In
							</a>
						</Link>
					</li>
				)}

				{session && (
					<li>
						<Link href="/api/auth/signout">
							<a
								onClick={(e) => {
									e.preventDefault();
									signOut();
								}}
							>
								Sign Out
							</a>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Navbar;
