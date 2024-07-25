import NavBar from "@/components/ui/navbar";
import PriceCards from "@/components/ui/pricecards";
import Footer from "@/components/ui/footer";

export default function Index() {
  const red =
    "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z";
  const blue =
    "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z";
  const data = [
    {
      title: "Mikrokurs",
      description:
        "Dieser Kurs umfasst die Module 1,2 und 6 des Gesamtkurses: KI & Leadership. Dadurch lernen Sie innerhalb kurzer Zeit zentrale Inhalte und Praxisanwendungen zur Thematik.",
      features: [
        {
          title: "Inviduelle Vorzüge mit unserem Mikrokurs",
          tag: blue,
        },
        {
          title:
            "KI-Begriffe & Anwendungen, Algorithmen, Advanced-Learning, Neuronale Netze",
          tag: blue,
        },
        {
          title: "Digital Leadership",
          tag: blue,
        },
        {
          title: "Neue Führungsansätze, Weiterbildung und KI-Strategien",
          tag: blue,
        },
        {
          title: "KI und Ethik, KI und DSGVO",
          tag: blue,
        },
      ],
      link: "Zum Kurs",
    },
    {
      title: "Gesamtkurs",
      description:
        "Der Komplett-Kurs umfasst 15 Module und bietet Ihnen eine umfassende Einführung in die Themen KI und Leadership. Sie erhalten einen Überblick über die wichtigsten KI-Begriffe und Anwendungen, Algorithmen, Advanced-Learning, Neuronale Netze und Digital Leadership.",
      features: [
        {
          title: "Fachspezifisches Wissen des Mikro-Kurses",
          tag: blue,
        },
        {
          title:
            "Vertiefendes KI-Wisse, Machine Learning, Deep Learning, Big Data",
          tag: blue,
        },
        {
          title: "KI und Teamarbeit, Mensch-Maschine-Kollaboration",
          tag: blue,
        },
        {
          title: "Agile Methoden: Design Thinking, Scrum",
          tag: blue,
        },
        {
          title: "Change-Management, Technologietransfer, KI-Strategie",
          tag: blue,
        },
      ],
      link: "Zum Kurs",
    },
    {
      title: "Selection-Kurs",
      description:
        "Selection Kurs ist ein individuell zusammengestellter Kurs, der auf die spezifischen Bedürfnisse Ihres Unternehmens zugeschnitten ist. Wir beraten Sie bei der Auswahl der Lernbeiträge und erstellen Ihren Kursaufbau inklusiven internen Mitgliederbereich. Darüber hinaus bieten wir Ihnen technischen Support.",
      features: [
        {
          title: "Fachspezifisches Wissen des Makro-Kurses",
          tag: blue,
        },
        {
          title: "Beratung bei der Auswahl der Lernbeiträge",
          tag: blue,
        },
        {
          title:
            "Erstellung Ihres Kursaufbaus inklusiven internen Mitgliederbereich",
          tag: blue,
        },
        {
          title: "Technischer Support",
          tag: blue,
        },
        {
          title: "Fachliche Begleitung: Vorträge, Calls, Workshops, Coaching",
          tag: red,
        },
      ],
      link: "Bei weiteren Fragen kontaktieren Sie uns bitte. ",
    },
    {
      title: "Selection-Kurs+",
      description:
        "Selection Kurs+ ist ein individuell zusammengestellter Kurs, der auf die spezifischen Bedürfnisse Ihres Unternehmens zugeschnitten ist. Wir beraten Sie bei der Auswahl der Lernbeiträge und erstellen Ihren Kursaufbau inklusiven internen Mitgliederbereich. Wir bieten Ihnen technischen Support und fachliche Begleitung durch Vorträge, Calls, Workshops und Coaching.",
      features: [
        {
          title: "Fachspezifisches Wissen des Makro-Kurses",
          tag: blue,
        },
        {
          title: "Beratung bei der Auswahl der Lernbeiträge",
          tag: blue,
        },
        {
          title:
            "Erstellung Ihres Kursaufbaus inklusiven internen Mitgliederbereich",
          tag: blue,
        },
        {
          title: "Technischer Support",
          tag: blue,
        },
        {
          title: "Fachliche Begleitung: Vorträge, Calls, Workshops, Coaching",
          tag: blue,
        },
      ],
      link: "Bei weiteren Fragen kontaktieren Sie uns bitte. ",
    },
  ];
  return (
    <>
      <div className="bg-ki-main ">
        <NavBar />

        <div className="container px-6 py-8 mb-8 pt-28 ">
          <h1 className="text-2xl font-semibold text-left text-white capitalize lg:text-3xl dark:text-white">
            Unsere Kursangebote
          </h1>
          <p className="max-w-2xl  mt-4 text-left text-xl  text-white xl:mt-6 dark:text-gray-300">
            Wählen Sie aus unseren Kursangeboten den passenden Kurs aus.
          </p>

          <PriceCards data={data} />
        </div>
        <Footer />
      </div>
    </>
  );
}
