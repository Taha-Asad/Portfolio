import { Navbar } from '../../components/Navbar';
import { ContactSection } from '../../components/ContactSection';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Contact — Taha Asadullah',
  description: 'Get in touch with Taha Asadullah for systems engineering, backend architecture, and consulting engagements.',
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F9F9F8' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 0' }}>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
