import Header from "@/components/layout/Header";
import ContactsPageContent from "@/components/sections/ContactsPage";
import Footer from "@/components/layout/Footer";

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main>
        <ContactsPageContent />
      </main>
      <Footer />
    </>
  );
}
