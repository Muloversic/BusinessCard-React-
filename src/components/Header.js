import myImg from '../img/me.jpg'
export default function Header() {
	return (
		<header className='header'>
			<img className='header__img' src={myImg} alt='me'/>
			<section className='header__info'>
				<div className='header__info-me'>
					<h2 className='header__person-name'>Oleh Nikulin</h2>
					<h3 className='header__person-position'>Frontend developer</h3>
					<a className='header__person-link' href='#'></a>
				</div>
				<div className='header__contacts'>
					<button className='header__btn header__btn--email'>Email</button>
					<button className='header__btn header__btn--linkedin'>LinkedIn</button>
				</div>
			</section>
		</header>
	)
}