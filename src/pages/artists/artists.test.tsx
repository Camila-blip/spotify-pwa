import { render, screen } from "@testing-library/react";
import { QueryClient } from "@tanstack/react-query";
import Artists from ".";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import {
    ReactNode,
    ReactPortal,
    ReactElement,
    JSXElementConstructor
} from "react";
import { JSX } from "react/jsx-runtime";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { MemoryRouter } from "react-router-dom";

type UIElement =
    | string
    | number
    | bigint
    | boolean
    | Iterable<ReactNode>
    | Promise<
          | string
          | number
          | bigint
          | boolean
          | ReactPortal
          | ReactElement<unknown, string | JSXElementConstructor<unknown>>
          | Iterable<ReactNode>
          | null
          | undefined
      >
    | JSX.Element
    | null
    | undefined;

describe("Artists Component", () => {
    const queryClient = new QueryClient();
    const persister = createSyncStoragePersister({
        storage: window.localStorage
    });

    const renderWithClient = (ui: UIElement) => {
        return render(
            <PersistQueryClientProvider
                client={queryClient}
                persistOptions={{ persister }}
            >
                {ui}
            </PersistQueryClientProvider>
        );
    };
    renderWithClient(
        <MemoryRouter>
            <Artists />
        </MemoryRouter>
    );
    it("renders the title and description", () => {
        expect(screen.getByText("Top Artistas")).toBeInTheDocument();
        expect(
            screen.getByText("Aqui você encontra seus artistas preferidos")
        ).toBeInTheDocument();
    });
});
