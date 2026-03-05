import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhatsAppChatbot from "@/components/WhatsAppChatbot";
import ContactSection from "@/components/ContactSection";
import { TooltipProvider } from "@/components/ui/tooltip";

// Mock the Lucide icons because they can cause issues in Vitest/RTL environments
vi.mock("lucide-react", async () => {
  const actual = await vi.importActual("lucide-react");
  return {
    ...actual,
    MessageCircle: () => <div data-testid="message-circle-icon" />,
    Menu: () => <div data-testid="menu-icon" />,
    X: () => <div data-testid="x-icon" />,
    Printer: () => <div data-testid="printer-icon" />,
    Layers: () => <div data-testid="layers-icon" />,
    Box: () => <div data-testid="box-icon" />,
    Cog: () => <div data-testid="cog-icon" />,
    Shapes: () => <div data-testid="shapes-icon" />,
    Zap: () => <div data-testid="zap-icon" />,
    Paintbrush: () => <div data-testid="paintbrush-icon" />,
    PackageCheck: () => <div data-testid="packagecheck-icon" />,
    Mail: () => <div data-testid="mail-icon" />,
    Phone: () => <div data-testid="phone-icon" />,
    MapPin: () => <div data-testid="mappin-icon" />,
    ArrowLeft: () => <div data-testid="arrowleft-icon" />,
  };
});

const renderWithRouter = (ui: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <TooltipProvider>
        {ui}
      </TooltipProvider>
    </BrowserRouter>
  );
};

describe("VCAN 3D UI Updates", () => {
  describe("Navbar", () => {
    it("should display VCAN 3D text in black without a logo", () => {
      renderWithRouter(<Navbar />);
      const brand = screen.getByText(/VCAN 3D/i);
      expect(brand).toBeInTheDocument();
      // Check for black text class
      const brandLink = brand.closest("a");
      expect(brandLink).toHaveClass("text-black");
      // Logo should not be present (previous implementation had an img tag)
      const logo = screen.queryByAltText(/VCAN 3D Logo/i);
      expect(logo).toBeNull();
    });
  });

  describe("HeroSection", () => {
    it("should have resized logo and correctly positioned buttons", () => {
      renderWithRouter(<HeroSection />);
      const logo = screen.getByAltText(/VCAN 3D Logo/i);
      expect(logo).toHaveClass("w-[35%]");
      
      const buttonContainer = screen.getByText(/Get a Quote/i).closest("div");
      expect(buttonContainer).toHaveClass("-top-6");
    });
  });

  describe("ServicesSection", () => {
    it("should render service cards as links to their detail pages", () => {
      renderWithRouter(<ServicesSection />);
      const fdmLink = screen.getByText(/FDM Printing/i).closest("a");
      expect(fdmLink).toHaveAttribute("href", "/service/fdm-3d-printing");
      
      const mouldMakingLink = screen.getByText(/Mould Making/i).closest("a");
      expect(mouldMakingLink).toHaveAttribute("href", "/service/model-making-finishing");
    });
  });

  describe("ContactSection", () => {
    it("should display the updated address and both email IDs", () => {
      renderWithRouter(<ContactSection />);
      expect(screen.getByText(/support@vcan3d.com/i)).toBeInTheDocument();
      expect(screen.getByText(/sales@vcan3d.com/i)).toBeInTheDocument();
      expect(screen.getByText(/No.458\/9,Situated Vetri Karan nagar, Nandambakkam, Kundrathur, 600069/i)).toBeInTheDocument();
    });
  });

  describe("WhatsAppChatbot", () => {
    it("should display the correct WhatsApp number and have the correct link", () => {
      renderWithRouter(<WhatsAppChatbot />);
      expect(screen.getByText(/9342553090/i)).toBeInTheDocument();
      const botLink = screen.getByRole("link", { name: /Chat on WhatsApp/i });
      expect(botLink).toHaveAttribute("href", expect.stringContaining("9342553090"));
    });
  });
});
