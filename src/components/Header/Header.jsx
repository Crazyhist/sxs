import styles from './header.module.css'

function Header() {
	return (
		<>
			<header>
				<a className={styles.header} href=''>
					{' '}
					Hello{' '}
				</a>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</header>
		</>
	)
}

export default Header
