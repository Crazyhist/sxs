import logoImg from '../../assets/images/logo.jpg'

import styles from './header.module.css'

function Header() {
	return (
		<header className={styles.header}>
			<div className='max-w-[1440px] border-4 m-auto px-[120px]'>
				<div className={styles.header_row}>
					<div className={styles.header_logo}>
						<img src={logoImg} alt='SOSI' />
					</div>
					<nav className=''>
						{[
							['MAIN', '/dashboard'],
							['ABOUT', '/team'],
							['GAME FEATURES', '/projects'],
							['SYSTEM REQUIREMENTS', '/reports'],
							['QUOTES', '/quotes'],
						].map(([title, url]) => (
							<a
								href={url}
								className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:text-orange-500'
							>
								{title}
							</a>
						))}
					</nav>
					<div className={styles.header_navLink}></div>
				</div>
			</div>
		</header>
	)
}

export default Header
