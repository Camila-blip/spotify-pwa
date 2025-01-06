import { render } from "@testing-library/react";
import Home from "./index";
import { useMusicStore } from "context/Music.context";
import { useGetUser } from "hooks/useMusicData";

jest.mock("context/Music.context");
jest.mock("hooks/useMusicData");

describe("Home component", () => {
    it("should call setUser with listUser on mount", () => {
        const mockSetUser = jest.fn();
        const mockListUser = [{ id: 1, name: "User1" }];

        (useMusicStore as unknown as jest.Mock).mockReturnValue({
            setUser: mockSetUser
        });
        (useGetUser as jest.Mock).mockReturnValue({ listUser: mockListUser });

        render(<Home />);

        expect(mockSetUser).toHaveBeenCalledWith(mockListUser);
    });
});
