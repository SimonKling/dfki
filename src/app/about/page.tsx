import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navbar";
import Link from "next/link";
import React, { FC } from "react";

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <>
      <div className="w-screen  bg-gradient-to-t from-[#002c75] to-[#39A1FF]">
        <NavBar />
        <div className="max-w-screen  text-white pt-24 p-12  ">
          <div className="text-2xl font-bold my-4">Impressum</div>
          <div className="w-full flex flex-col  gap-y-4 ">
            <div className="flex flex-col gap-y-4">
              <div className="text-xl font-semibold">
                Verantwortlicher Dienstanbieter
              </div>
              <p>
                Für die Inhalte der Domain www.ki-leadership.org ist aus Sicht
                des § 5 TMG verantwortlich:
              </p>
              <div className="text-xl font-semibold">
                Deutsches Forschungszentrum für Künstliche Intelligenz GmbH
                (DFKI)
              </div>
              <ul>
                <li>Geschäftsführung: Prof. Dr. Antonio Krüger</li>
                <li>Helmut Ditzer</li>
                <li>Trippstadter Str. 122</li>
                <li>67663 Kaiserslautern</li>
                <li>Tel.: +49 631 20575 0</li>
                <li>Fax: +49 631 20575 5030</li>
                <li>Email: info@dfki.de</li>
                <li>Registergericht: Amtsgericht Kaiserslautern</li>
                <li>Registernummer: HRB 2313</li>
                <li>ID-Nummer: DE 148 646 973</li>
              </ul>
              <div className="text-xl font-semibold">
                Redaktionsverantwortliche/r
              </div>
              <p>
                Redaktionsverantwortliche/r für die Domain www.ki-leadership.org
                des Deutschen Forschungszentrums für Künstliche Intelligenz GmbH
                (DFKI) auf der Domain im Sinne von § 18 Abs. 2 MStV ist:
              </p>
              <ul>
                <li>Dr. Sylke Piéch, Senior Research Manager</li>
                <li>Alt-Moabit 91 C</li>
                <li>10559 Berlin, Deutschland</li>
                <li>Telefon: +49 30 23895 1858</li>
                <li>Telefax: +49 30 23895 1858</li>
                <li>Email: sylke.piech@dfki.de</li>
              </ul>
              <p>Webadressen:</p>
              <ul className="flex gap-x-4">
                <li>
                  <Link className="hover:underline" href={"www.dfki.de"}>
                    www.dfki.de
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:underline" href={"www.edtec.de"}>
                    www.edtec.de
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2  ">
              <div className="text-xl font-semibold">
                Rechtliche Hinweise zur Haftung für eigene Inhalte
              </div>
              <p>
                Die Deutsches Forschungszentrum für Künstliche Intelligenz GmbH
                (DFKI) ist als Inhaltsanbieterin gemäß § 7 Abs. 1
                Telemediengesetz (TMG) für die eigenen Inhalte, die zur Nutzung
                bereitgehalten werden, nach den allgemeinen Gesetzen
                verantwortlich. Das DFKI ist um Korrektheit und Aktualität der
                auf dieser Internetpräsenz bereitgestellten Informationen
                bemüht. Dennoch ist ein vollständiger Ausschluss von Fehlern und
                Unklarheiten nicht möglich. Das DFKI übernimmt daher keine
                Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder
                Qualität der bereitgestellten Informationen. Für Schäden
                materieller oder ideeller Art, die durch die Nutzung oder
                Nichtnutzung der dargebotenen Informationen resp. durch die
                Nutzung fehlerhafter und unvollständiger Informationen
                unmittelbar oder mittelbar verursacht werden, haftet das DFKI
                nicht, sofern nicht nachweislich vorsätzliches oder grob
                fahrlässiges Verschulden vorliegt. Dies bezieht sich auch auf
                für zum Download bereitgestellte Software oder Daten. Dem DFKI
                ist es vorbehalten, Teile des Internetangebots oder das gesamte
                Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen,
                zu löschen oder die Veröffentlichung zeitweise oder endgültig
                einzustellen.
              </p>
              <div className="text-xl font-semibold">
                Rechtliche Hinweise für Verweise auf externe Webseiten
              </div>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
                ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                werden wir diese Inhalte umgehend entfernen. Unser Angebot
                enthält Links zu externen Webseiten Dritter. Für diese Inhalte
                der verlinkten externen Seiten ist stets der jeweilige Anbieter
                verantwortlich. Für die Inhalte der verlinkten Seiten können wir
                keine Gewähr übernehmen. Diese fremden Inhalte wurden vonseiten
                des DFKI bei der erstmaligen Link-Setzung daraufhin überprüft,
                ob etwaige Rechtsverstöße bestehen. Zum Zeitpunkt der
                Überprüfung waren keine Rechtsverstöße ersichtlich. Es ist
                jedoch nicht auszuschließen, dass die Inhalte im Nachhinein von
                den jeweiligen Anbietern verändert werden. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Sollten Sie
                der Ansicht sein, dass die verlinkten externen Seiten gegen
                geltendes Recht verstoßen oder sonst unangemessene Inhalte
                haben, so teilen Sie uns dies bitte direkt an: info@dfki.de mit.
                Sollte das DFKI feststellen oder einen Hinweis darauf erhalten,
                dass ein externes Angebot, auf das es verlinkt hat, eine zivil-
                oder strafrechtliche Verantwortlichkeit auslöst, wird das DFKI
                den Link auf dieses Angebot unverzüglich aufheben.
              </p>
              <div className="text-xl font-semibold">
                Rechtliche Hinweise zum Urheberrecht
              </div>
              <p>
                Das Layout der Homepage, die verwendeten Grafiken sowie die
                sonstigen Inhalte der Internetpräsenz des DFKI sind
                urheberrechtlich geschützt. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jedwede Art der Verwertung außerhalb der Grenzen
                des Urheberrechtes bedürfen der Zustimmung des DFKI (in
                Schriftform). Soweit die Inhalte auf dieser Seite nicht von DFKI
                erstellt wurden, werden die Urheberrechte Dritter beachtet.
                Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam
                werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen, wird DFKI derartige
                Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
