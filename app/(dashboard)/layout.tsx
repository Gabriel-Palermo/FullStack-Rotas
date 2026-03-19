import { Sidebar } from '../components/layout/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Sidebar/>
            <main>
                {children}
            </main>
        </div>
    );
}