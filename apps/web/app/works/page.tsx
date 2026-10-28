import { Navbar } from '../../components/Navbar';
import { WorksSection } from '../../components/WorksSection';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Selected Works — Taha Asadullah',
  description: 'Featured engineering works, distributed systems, and desktop applications by Taha Asadullah.',
};

export default function WorksPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F9F9F8' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 0' }}>
        <WorksSection />
      </main>
      <Footer />
    </div>
  );
}
