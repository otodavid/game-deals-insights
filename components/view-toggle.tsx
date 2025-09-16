import { Button } from "./ui/button";

export default function ViewToggle({
  view,
  setView,
}: {
  view: "grid" | "list";
  setView: (val: "grid" | "list") => void;
}) {
  return (
    <div className="flex gap-0">
      <Button
        variant={view === "grid" ? "default" : "secondary"}
        onClick={() => setView("grid")}
      >
        Grid
      </Button>
      <Button
        variant={view === "list" ? "default" : "secondary"}
        onClick={() => setView("list")}
      >
        List
      </Button>
    </div>
  );
}
