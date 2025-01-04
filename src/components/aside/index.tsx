import { ReactElement, useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}
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
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
    const [, setIsInstallable] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            console.log("dentrohandle");
            e.preventDefault();
            setDeferredPrompt(e);
            setIsInstallable(true);
        };
        console.log("effect");

        window.addEventListener("beforeinstallprompt", handler);

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
        };
    }, []);

    const handleInstallClick = async () => {
        console.log("aqui");
        console.log("deferredPrompt", deferredPrompt);
        if (deferredPrompt) {
            console.log("dentro");
            const promptEvent = deferredPrompt as BeforeInstallPromptEvent;
            promptEvent.prompt();
            const { outcome } = await promptEvent.userChoice;
            if (outcome === "accepted") {
                console.log("User accepted the install prompt");
            } else {
                console.log("User dismissed the install prompt");
            }
            setDeferredPrompt(null);
            setIsInstallable(false);
        }
    };

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
            <ButtonPWA onClick={handleInstallClick}>
                <GrommetIconsInstallOption />
                <span>Instalar PWA</span>
            </ButtonPWA>
        </AsideContent>
    );
}
