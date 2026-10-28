import { Navbar } from '../../components/Navbar';
import { ExperienceSection } from '../../components/ExperienceSection';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Engineering Experience — Taha Asadullah',
  description: 'Chronological timeline of software engineering roles, commercial releases, and milestones by Taha Asadullah.',
};

export default function ExperiencePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F9F9F8' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 0' }}>
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}
