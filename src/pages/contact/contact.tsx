import {PageContainer} from "../../components/page-container/page-container";
import "./contact.scss";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactContent = () => (
    <>
        <p className="page-subtitle underline">NOUS CONTACTER&nbsp;:</p>
        <p>
            <div className='block'>
                <div className="block-icon material">
                    <MailOutlineIcon/>
                </div>
                <div>
                    Par email&nbsp;: <br/>
                    <a href="mailto:emartinet@fidulis.fr">emartinet@fidulis.fr</a>
                </div>
            </div>
            <br/>
            <div className="block">
                <div className="block-icon material">
                    <PhoneIcon/>
                </div>
                <div>
                    Par téléphone&nbsp;: <br/>
                    <a href="tel:0481926076">04.81.92.60.76</a> (accueil&nbsp;: 8&nbsp;h&nbsp;30 à 17&nbsp;h)
                </div>
            </div>
            <br/>
        </p>
        <div className="page-subtitle underline">SE RENDRE AU CABINET&nbsp;:</div>
        <div>
            <a href="https://goo.gl/maps/wLzaH7SFe6pCxYe17">2, place Gailleton - 69002 Lyon</a>
            <br/>
            <br/>
            <div className="block">
                <div className="block-icon">
                    <img src={`${process.env.PUBLIC_URL}/img/parking.svg`}/>
                </div>
                <div className="block-content">
                    <span>En voiture&nbsp;:</span>
                    <ul>
                        <li><strong>Parking Gailleton (Garage Bellecour)</strong>, 5 place Gailleton - 69002 Lyon</li>
                    </ul>
                </div>
            </div>
            <br/>
            <div className="block">
                <div className="block-icon">
                    <img src={`${process.env.PUBLIC_URL}/img/transports.svg`}/>
                </div>
                <div className="block-content">
                    <span>En transports en commun&nbsp;:</span>
                    <ul>
                        <li>Bus&nbsp;: station <strong>Pont de l'Université</strong>, lignes 15, C10
                            ou <strong>Saint-Hélène</strong>,
                            ligne 51
                        </li>
                        <li>Métro&nbsp;: station <strong>Ampère</strong>, ligne A</li>
                        <li>Tramway&nbsp;: station <strong>Gare de Perrache</strong>, ligne K110, K240, T2</li>
                        <li>Train&nbsp;: <strong>Gare de Perrache</strong></li>
                    </ul>
                </div>
            </div>
            <br/>
            <div className="block">
                <div className="block-icon">
                    <img src={`${process.env.PUBLIC_URL}/img/bicycle.svg`}/>
                </div>
                <div className="access-content">
                    <span>Vélo v'&nbsp;:</span>
                    <ul>
                        <li><strong>Place Gailleton</strong></li>
                    </ul>
                </div>
            </div>
        </div>

    </>
)
export const ContactPage = () => (
    <PageContainer
        imgSrc={`${process.env.PUBLIC_URL}/img/map.jpg`}
        imgHref="https://goo.gl/maps/wLzaH7SFe6pCxYe17"
        className="img-contain"
        title='Contact et Accès'
        content={<ContactContent/>}
    />
);
