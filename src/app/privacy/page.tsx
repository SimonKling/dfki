import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navbar";
import React, { FC } from "react";

interface IndexProps {}

const Index: FC<IndexProps> = ({}) => {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-t from-[#002c75] to-[#39a1ff] text-white">
        <NavBar />
        <div className="flex flex-col gap-y-2 max-w-7xl text-left pt-24 p-12 ">
          <div className="text-2xl font-semibold">Datenschutz</div>
          <p>
            Das DFKI (Deutsches Forschungszentrum für Künstliche Intelligenz
            GmbH) und seine Mitarbeiter/-innen setzen sich ziel- und
            risikoorientiert für die informationelle Selbstbestimmung und das
            Grundrecht auf Schutz personenbezogener Daten ein. In dieser
            Datenschutzerklärung informieren wir Sie über die Verarbeitung Ihrer
            personenbezogenen Daten bei Besuch und Benutzung unserer Webseite.
          </p>
          <div className="text-xl font-semibold">Verantwortlicher</div>
          <p>
            Deutsches Forschungszentrum für Künstliche Intelligenz GmbH (DFKI)
            Tel.: +49 631 20575 0; info@dfki.de; Impressum
          </p>
          <div className="text-xl font-semibold">Datenschutzbeauftragter</div>
          <p>Tel.: +49 631 20575 0; datenschutz@dfki.de</p>
          <div className="text-xl font-semibold">Zweck der Verarbeitung</div>
          <ul className="list-disc px-8">
            <li>
              Bereitstellung des Informationsangebotes im Rahmen der
              Öffentlichkeitsarbeit des DFKI
            </li>
            <li>
              Kontaktaufnahme und Korrespondenz mit Besuchern und Benutzern
            </li>
          </ul>
          <div className="text-xl font-semibold">
            Anonyme und geschützte Benutzung
          </div>
          <p>
            Der Besuch und die Benutzung unserer Webseite sind anonym.
            Personenbezogene Daten werden auf unserer Webseite nur im technisch
            notwendigen Umfang erhoben. Die verarbeiteten personenbezogenen
            Daten werden außer aufgrund konkreter gesetzlicher Verpflichtungen
            nicht an Dritte übermittelt oder in anderer Weise offengelegt. Wir
            binden innerhalb unseres Informationsangebots keine Inhalts- oder
            Serviceangebote von Drittanbietern ein. Bei der Benutzung unserer
            Webseite ist die Datenübertragung im Internet durch ein als sicher
            anerkanntes Verschlüsselungsverfahren gegen Kenntnisnahme Dritter
            geschützt und kann somit nicht auf einfache Weise beobachtet oder
            verfälscht werden kann.
          </p>
          <div className="text-xl font-semibold">Auskunft und Intervention</div>
          <p>
            Neben der Information in dieser Datenschutzerklärung haben Sie das
            Recht auf Auskunft über Ihre personenbezogenen Daten. Zur
            Gewährleistung einer fairen Verarbeitung bestehen für Sie die
            folgenden Interventionsrechte
          </p>
          <ul className="list-disc px-8">
            <li>
              Das Recht auf Berichtigung und Vervollständigung Ihrer
              personenbezogenen Daten
            </li>
            <li>Das Recht auf Löschung Ihrer personenbezogenen Daten</li>
            <li>
              Das Recht auf Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten
            </li>
            <li>
              Das Recht auf Widerspruch gegen die Verarbeitung Ihrer
              personenbezogenen Daten aus Gründen Ihrer besonderen Situation
            </li>
          </ul>
          <p>
            Für die Ausübung Ihrer Rechte wenden Sie sich bitte an unseren
            Datenschutzbeauftragten.
          </p>
          <div className="text-xl font-semibold">Recht auf Beschwerde</div>
          <p>
            Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde, wenn
            Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen
            Daten gegen gesetzliche Datenschutzvorschriften verstößt
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
