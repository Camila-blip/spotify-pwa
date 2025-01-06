import { render } from "@testing-library/react";
import ContentTitle from "./title";
import Description from "./description";
import Container from "./container";
import { Title } from ".";
describe("Title component", () => {
    it("renders the title text correctly", () => {
        const { getByText } = render(<ContentTitle title="Test Title" />);
        expect(getByText("Test Title")).toBeInTheDocument();
    });
});

describe("Description component", () => {
    it("renders the description text correctly", () => {
        const { getByText } = render(
            <Description description="Test Description" />
        );
        expect(getByText("Test Description")).toBeInTheDocument();
    });
});

describe("Container component", () => {
    it("renders children correctly", () => {
        const { getByText } = render(
            <Container>
                <div>Test Child</div>
            </Container>
        );
        expect(getByText("Test Child")).toBeInTheDocument();
    });

    it("applies bottom prop correctly", () => {
        const { container } = render(
            <Container bottom="20px">
                <div>Test Child</div>
            </Container>
        );
        expect(container.firstChild).toHaveStyle("bottom: 20px");
    });
});

describe("Title components", () => {
    it("renders the ContentTitle component correctly", () => {
        const { getByText } = render(<Title.H1 title="Test Title" />);
        expect(getByText("Test Title")).toBeInTheDocument();
    });

    it("renders the ContentDescription component correctly", () => {
        const { getByText } = render(
            <Title.Description description="Test Description" />
        );
        expect(getByText("Test Description")).toBeInTheDocument();
    });

    it("renders children in the ContentContainer component correctly", () => {
        const { getByText } = render(
            <Title.Container>
                <div>Test Child</div>
            </Title.Container>
        );
        expect(getByText("Test Child")).toBeInTheDocument();
    });

    it("applies bottom prop correctly in the ContentContainer component", () => {
        const { container } = render(
            <Title.Container bottom="20px">
                <div>Test Child</div>
            </Title.Container>
        );
        expect(container.firstChild).toHaveStyle("bottom: 20px");
    });
});
