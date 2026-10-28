import { Navbar } from '../../components/Navbar';
import { AboutSection } from '../../components/AboutSection';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'About — Taha Asadullah',
  description: 'Systems software engineer profile, technical stack, and core values of Taha Asadullah.',
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F9F9F8' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 0' }}>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
