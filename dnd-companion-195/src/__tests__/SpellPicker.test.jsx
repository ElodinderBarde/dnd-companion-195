import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import SpellPicker from "../components/SpellPicker";
import { vi, describe, it, expect, beforeEach } from "vitest";
import '@testing-library/jest-dom';


// Stubs für API-Calls
vi.mock("../services/characterAPI", () => ({
  getSpellsByClass: vi.fn(() => Promise.resolve([
    { index: "fire-bolt", name: "Fire Bolt", level: 0 },
    { index: "magic-missile", name: "Magic Missile", level: 1 }
  ])),
  getSpellDetail: vi.fn((index) => Promise.resolve({
    index,
    name: index === "fire-bolt" ? "Fire Bolt" : "Magic Missile",
    level: index === "fire-bolt" ? 0 : 1,
    range: index === "fire-bolt" ? "120 feet" : "60 feet",
    duration: "Instantaneous",
    desc: ["A bright streak flashes..."]
  }))
}));

describe("SpellPicker Komponente", () => {
  let dummyOnSelect;

  beforeEach(() => {
    dummyOnSelect = vi.fn();
  });

  it("lädt und zeigt Zauber an", async () => {
    render(<SpellPicker classIndex="wizard" characterLevel={1} onSelect={dummyOnSelect} />);
    expect(await screen.findByText("Fire Bolt")).toBeInTheDocument();
    expect(screen.getByText("Magic Missile")).toBeInTheDocument();
  });

  it("zeigt Details nach Klick auf Zauber", async () => {
    render(<SpellPicker classIndex="wizard" characterLevel={1} onSelect={dummyOnSelect} />);
    const spellButton = await screen.findByRole("button", { name: "Magic Missile" });
    fireEvent.click(spellButton);
    expect(await screen.findByText(/Reichweite:/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Magic Missile" })).toBeInTheDocument();
  });

  it("zeigt keine Zauber, wenn Level zu niedrig", () => {
    render(<SpellPicker classIndex="wizard" characterLevel={0} onSelect={dummyOnSelect} />);
    
    // Beide Zauber sind ab Level 1, also sollten sie **nicht** erscheinen
    expect(screen.queryByText("Fire Bolt")).not.toBeInTheDocument();
    expect(screen.queryByText("Magic Missile")).not.toBeInTheDocument();
  });
  

  it("ruft onSelect auf, wenn Zauber übernommen wird", async () => {
    render(<SpellPicker classIndex="wizard" characterLevel={1} onSelect={dummyOnSelect} />);
    const spellButton = await screen.findByRole("button", { name: "Magic Missile" });
    fireEvent.click(spellButton);
    const selectButton = await screen.findByText("Zauber übernehmen");
    fireEvent.click(selectButton);
    expect(dummyOnSelect).toHaveBeenCalledOnce();
    expect(dummyOnSelect.mock.calls[0][0].name).toBe("Magic Missile");
  });

  it("zeigt keine Liste, wenn classIndex oder Level fehlen", () => {
    render(<SpellPicker classIndex={null} characterLevel={null} onSelect={dummyOnSelect} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
