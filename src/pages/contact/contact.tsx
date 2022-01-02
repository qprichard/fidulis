import {PageContainer} from "../../components/page-container/page-container";
import "./contact.scss";

const ContactContent = () => (
    <>
        <p className="page-subtitle">NOUS CONTACTER:</p>
        <p>
            Par téléphone: <br/>
            <a href="tel:0481926076">04.81.92.60.76</a> <br/>
            <br/>
            Horaires du standard: du lundi au vendredi de 8h30 à 17h
            <br/>
            <br/>
            Par email: <br/>
            <a href="mailto:emartinet@fidulis.fr">emartinet@fidulis.fr</a>
            <br/>
        </p>
        <br/>
        <p className="page-subtitle">SE RENDRE AU CABINET:</p>
        <p>
            <a href="https://goo.gl/maps/wLzaH7SFe6pCxYe17">2, place Gailleton - 69002 Lyon</a>
            <br/>
            <br/>
            En transports en commun: <br/>
            <ul>
                <li>Bus: station <strong>Pont de l'Université</strong>, lignes 15, C10 ou <strong>Saint-Hélène</strong>, ligne 51</li>
                <li>Métro: station <strong>Ampère</strong>, ligne A</li>
                <li>Tramway: station <strong>Gare de Perrache</strong>, ligne K110, K240, T2</li>
                <li>Train: <strong>Gare de Perrache</strong></li>
            </ul>
            <br/>
            <br/>

            Vélo v': station <strong>Place Gailleton</strong>
            <br/>
            <br/>

            En voiture: <br/>
            <strong>Parking Gailleton (Garage Bellecour)</strong>, 5 place Gailleton
        </p>

    </>
)
export const ContactPage = () => (
    <PageContainer
        imgSrc={`${process.env.PUBLIC_URL}/img/map.jpg`}
        imgHref="https://goo.gl/maps/wLzaH7SFe6pCxYe17"
        title='Contact et Accès'
        content={<ContactContent/>}
    />
    );
