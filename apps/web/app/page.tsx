import { getDashboardOverview } from '../lib/api';
import { PortfolioClientView } from './PortfolioClientView';

// Revalidate data periodically
export const revalidate = 60;

export default async function PortfolioPage() {
  const overview = await getDashboardOverview();

  return <PortfolioClientView initialOverview={overview} />;
}
