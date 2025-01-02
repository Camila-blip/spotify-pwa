import { ReactElement } from "react";
import { listMenu } from "./listMenu";
import {
    AsideContent,
    ButtonPWA,
    Content,
    MenuOption,
    SidebarMenuItem,
    Title
} from "./style";
import Logo from "assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { GrommetIconsInstallOption } from "assets/icons";
type typeListMenu = {
    icon: ReactElement;
    title: string;
    url: string;
};

export default function Aside() {
    const router = useNavigate();
    const location = useLocation();
    const handleRoute = (route: string) => {
        router(`/${route}`);
    };

    return (
        <AsideContent>
            <Content>
                <img src={Logo} alt="Logo" />
                <SidebarMenuItem>
                    {listMenu.map((item: typeListMenu, id: number) => {
                        return (
                            <MenuOption
                                key={id}
                                onClick={() => handleRoute(item.url)}
                                active={
                                    location.pathname.replace("/", "") ===
                                    item.url
                                }
                            >
                                {item.icon}
                                <Title>{item.title}</Title>
                            </MenuOption>
                        );
                    })}
                </SidebarMenuItem>
            </Content>
            <ButtonPWA>
                <GrommetIconsInstallOption />
                Instalar PWA
            </ButtonPWA>
        </AsideContent>
    );
}
