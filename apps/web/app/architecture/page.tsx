import { Navbar } from '../../components/Navbar';
import { ArchitectureSection } from '../../components/ArchitectureSection';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Architecture & Principles — Taha Asadullah',
  description: 'First-principles systems engineering, concurrency patterns, and data integrity principles by Taha Asadullah.',
};

export default function ArchitecturePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F9F9F8' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 0' }}>
        <ArchitectureSection />
      </main>
      <Footer />
    </div>
  );
}
