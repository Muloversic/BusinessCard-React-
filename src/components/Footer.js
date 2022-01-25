import twitter from '../img/Twitter Icon.svg'
import facebook from '../img/Facebook Icon.svg'
import instagram from '../img/Instagram Icon.svg'
import github from '../img/GitHub Icon.svg'
export default function Footer() {
	return (
		<footer className="footer">
			<ul className="footer__socials">
				<li className="footer__link"><a href='#'><img src={twitter}/></a></li>
				<li className="footer__link"><a href='#'><img src={facebook}/></a></li>
				<li className="footer__link"><a href='https://www.instagram.com/muloversic/' target='_blank'><img src={instagram}/></a></li>
				<li className="footer__link"><a href='https://github.com/Muloversic' target='_blank'><img src={github}/></a></li>
			</ul>
		</footer>
	)
}