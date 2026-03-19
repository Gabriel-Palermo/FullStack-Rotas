import { NavLink } from "../ui/nav-link";
import { Home, Package, Settings } from "lucide-react";

export function Sidebar() {
    return (
        <aside>
            <h1>Saas Core</h1>

            <nav>
                <NavLink href="/">
                    <Home className="w-5 h-5" size={20} /> Dashboard
                </NavLink>
                <NavLink href="/products">
                    <Package className="w-5 h-5" size={20} /> Produtos
                </NavLink>
                <NavLink href="/settings">
                    <Settings className="w-5 h-5" size={20} /> Configurações
                </NavLink>
            </nav>
        </aside>
    )
}