import {PageContainer} from "../../components/page-container/page-container";
import "./contact.scss";

const ContactContent = () => (
    <>
        <p className="page-subtitle">NOUS CONTACTER:</p>
        <p>
            Par email: <br/>
            <a href="mailto:emartinet@fidulis.fr">emartinet@fidulis.fr</a>
            <br/>
            <br/>
            Par téléphone: <br/>
            <a href="tel:0481926076">04.81.92.60.76</a> (standard: 8h30 à 17h) <br/>
            <br/>
        </p>
        <div className="page-subtitle">SE RENDRE AU CABINET:</div>
        <div>
            <a href="https://goo.gl/maps/wLzaH7SFe6pCxYe17">2, place Gailleton - 69002 Lyon</a>
            <br/>
            <br/>
            <div className="access-block">
                <div className="access-icon">
                    <img src={`${process.env.PUBLIC_URL}/img/parking.svg`}/>
                </div>
                <div className="access-content">
                    <span>En voiture:</span>
                    <ul>
                        <li><strong>Parking Gailleton (Garage Bellecour)</strong>, 5 place Gailleton - 69002 Lyon</li>
                    </ul>
                </div>
            </div>
            <br/>
            <div className="access-block">
                <div className="access-icon">
                    <img src={`${process.env.PUBLIC_URL}/img/transports.svg`}/>
                </div>
                <div className="access-content">
                    <span>En transports en commun:</span>
                    <ul>
                        <li>Bus: station <strong>Pont de l'Université</strong>, lignes 15, C10
                            ou <strong>Saint-Hélène</strong>,
                            ligne 51
                        </li>
                        <li>Métro: station <strong>Ampère</strong>, ligne A</li>
                        <li>Tramway: station <strong>Gare de Perrache</strong>, ligne K110, K240, T2</li>
                        <li>Train: <strong>Gare de Perrache</strong></li>
                    </ul>
                </div>
            </div>
            <br/>
            <div className="access-block">
                <div className="access-icon">
                    <img src={`${process.env.PUBLIC_URL}/img/bicycle.svg`}/>
                </div>
                <div className="access-content">
                    <span>Vélo v':</span>
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
