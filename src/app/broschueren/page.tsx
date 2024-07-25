import { HoverEffect } from "@/components/ui/cardhoverwrapper";
import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navbar";

export const projects = [
  {
    title: "Künstliche Intelligenz",
    description:
      "Erhalten Sie eine Einführung zum Thema KI, den damit verbundenen Chancen und Risiken und wie KI-Systeme unsere Arbeitswelt verändern werden.  ",
    link: "https://drive.google.com/file/d/1CI5iahPj3sGfhDZMFdlYsyZtzn8y7c9l/view",
    src: "https://ki-leadership.org/1-1.jpeg",
  },
  {
    title: "Einführung von KI-Systemen im Unternehmen",
    description:
      "Erfahren Sie, wie gutes Change-Management den erfolgreichen Einsatz von Künstlicher Intelligenz in Unternehmen fördert, um Arbeitsprozesse effizienter zu gestalten. ",
    link: "https://www.plattform-lernende-systeme.de/aktuelles-newsreader/gutes-change-management-wie-ki-in-unternehmen-erfolgreich-wird.html",
    src: "https://ki-leadership.org/3-3.jpg",
  },
  {
    title: "Führung im Wandel: Herausforderungen und Chancen durch KI",
    description:
      "Erfahren Sie, wie Künstliche Intelligenz die Führungskräfte bei der Ausführung ihrer Aufgaben sowie bei der erfolgreichen Gestaltung von KI-Transformationsprozessen unterstützt. ",
    link: "https://www.plattform-lernende-systeme.de/files/Downloads/Publikationen/AG2_WP_Fuehrung_im_Wandel.pdf",
    src: "https://ki-leadership.org/3-3.jpg",
  },
  {
    title: "Kompetenzentwicklung für KI",
    description:
      "Entdecken Sie, wie Künstliche Intelligenz die Arbeitswelt transformiert, welche neuen Kompetenzen dafür erforderlich sind und wie Unternehmen ihre Mitarbeitenden darauf vorbereiten können. ",
    link: "https://www.plattform-lernende-systeme.de/files/Downloads/Publikationen/AG2_WP_Kompetenzentwicklung_KI.pdf",
    src: "https://ki-leadership.org/4-4.jpg",
  },
  {
    title: "Wie Mittelständler digitalisieren",
    description:
      "Erfahren Sie, wie kleine und mittlere Unternehmen durch Digitalisierungsmaßnahmen ihre Prozesse optimieren können und erhalten Sie praktische Tipps für die Umsetzung.  ",
    link: "https://digitalzentrum-berlin.de/wp-content/uploads/2021/09/best-practice-broschre-_gd-2017_web.pdf?x84163",
    src: "https://ki-leadership.org/5-5.PNG",
  },
  {
    title: "KI im Mittelstand",
    description:
      "Erhalten Sie Einblicke zu den Potenzialen von KI für Ihre Unternehmensprozesse und lernen Sie Praxisbeispiele für erfolgreiche KI-Anwendungen im Mittelstand kennen. ",
    link: "https://www.plattform-lernende-systeme.de/files/Downloads/Publikationen/PLS_Booklet_KMU.pdf",
    src: "https://ki-leadership.org/2-2.PNG",
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="text-4xl font-semibold text-white mt-[100px] md:px-8 px-2 text-left">
        Broschüren
      </div>
      <div className="bg-ki-main flex flex-col  justify-between min-h-screen  ">
        <HoverEffect items={projects} />
        <Footer />
      </div>
    </>
  );
}
