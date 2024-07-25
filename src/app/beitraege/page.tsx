import Beitraege from "@/components/ui/Beitraege";
import Footer from "@/components/ui/footer";
import erfolg from "../../../public/erfolgdurchhybrideteams.png";
import kitools from "../../../public/kitools.png";
import NavBar from "@/components/ui/navbar";
import leadershipimkontext from "../../../public/leadershipimkontext.png";
import kurskiundleadership from "../../../public/Kurs-KI-Leadership.png";
import { StaticImageData } from "next/image";

export const data = [
  {
    title: "Chancen und Herausforderungen von KI in der Arbeitswelt",
    description:
      "Entdecken Sie, wie die Zusammenarbeit von Mensch und Roboter zu höherer Produktivität führen und die menschliche Kreativität unterstützen kann.  ",
    url: "https://www.dfki.de/web/news/die-chancen-und-herausforderungen-liegen-darin-die-staerken-des-menschen-und-die-der-maschine-zusamm",
    imgUrl: erfolg,
    interview: true,
  },
  {
    title: "Erfolg durch hybride Teams",
    description:
      "Interview mit DFKI-Forscherin Dr. Sylke Piéch über KI in Arbeits- und Bildungsprozessen und welchen Herausforderungen sich Führungskräfte stellen müssen.  ",
    url: "https://www.ki-leadership.org/Beitrag%20-%20Erfolg%20durch%20hybride%20Teams%20-%20FORUM-Magazin.pdf",
    imgUrl: erfolg,
    interview: true,
  },
  {
    title: "Kurs:KI und Leadership",
    description:
      "Erfahren Sie, welche Vorteile der Einsatz von KI-Technologien für Führungskräfte bringt und worauf bei der Implementierung von KI-Tools zu achten ist.   ",
    url: "https://ki-leadership.org/Beitrag%20-%20Kurs_KI%20&%20Leadership%20-%20FORUM-Magazin.pdf",
    imgUrl: kurskiundleadership,
    interview: false,
  },
  {
    title:
      "Leadership im Kontext von Digitalisierung und Künstlicher Intelligenz",
    description:
      "Erfahren Sie, welche Führungskompetenzen einen Digital Leader auszeichnen und warum der situative Führungsstil als agiler Führungsansatz besonders zur Bewältigung der aktuellen und zukünftigen Führungsaufgaben zu empfehlen ist.  ",
    url: "https://ki-leadership.org/Beitrag%20-%20Leadership%20und%20KI%20-%20Sonderband_Zukunft%20der%20Arbeit.pdf",
    imgUrl: leadershipimkontext,
    interview: true,
  },
  {
    title: "KI-Tools für Führungskräfte",
    description:
      "Erhalten Sie eine Übersicht zu KI-Anwendungen in Unternehmen und welche KI-Tools Führungskräfte ihrer Arbeit unterstützen können. ",
    url: "https://ki-leadership.org/KI-Tools%20f%C3%BCr%20F%C3%BChrungskr%C3%A4fte.pdf",
    imgUrl: kitools,
    interview: false,
  },
  {
    title: "KI in der Arbeitswelt",
    description:
      "Dr. Sylke Piéch erklärt, wie Künstliche Intelligenz die Arbeitswelt transformiert und welche digitalen Kompetenzen künftig entscheidend sein werden.  ",
    url: "https://iba.online/newsroom/perspektiven/kuenstliche-intelligenz-in-der-arbeitswelt-interview-mit-dr-sylke-piech/",
    interview: true,
  },
  {
    title: "KI im Veränderungsmanagement",
    description:
      "Dr. Sylke Piéch erläutert die Schlüsselrolle von Führungskräften im erfolgreichen Technologietransfer und beleuchtet, wie KI-Tools das Human Resources Management optimieren können. ",
    url: "https://www.elearning-journal.com/2021/03/11/ki-im-veraenderungsmanagement/",
    interview: true,
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="text-4xl font-semibold text-white mt-[100px] md:px-8 px-2 text-left">
        Beiträge
      </div>
      <div className="grid grid-rows-6  2xl:grid-cols-2 2xl:grid-rows-4  justify-items-center gap-4 2xl:w-2/3 sm:mx-12 2xl:mx-auto my-8">
        {data.map((e, index) => (
          <Beitraege
            key={index}
            heading={e.title}
            description={e.description}
            url={e.url}
            imgurl={e.imgUrl}
            interview={e.interview}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
