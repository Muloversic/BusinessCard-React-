import twitter from '../img/Twitter Icon.svg'
import facebook from '../img/Facebook Icon.svg'
import instagram from '../img/Instagram Icon.svg'
import github from '../img/GitHub Icon.svg'
export default function Footer() {
	return (
		<footer className="footer">
			<ul className="footer__socials">
				<li className="footer__link"><a><img src={twitter}/></a></li>
				<li className="footer__link"><a><img src={facebook}/></a></li>
				<li className="footer__link"><a><img src={instagram}/></a></li>
				<li className="footer__link"><a><img src={github}/></a></li>
			</ul>
		</footer>
	)
}