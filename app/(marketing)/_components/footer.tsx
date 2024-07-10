import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto px-4 py-2 border-t border-gray-300 flex items-center justify-between">
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost" className="opacity-60">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost" className="opacity-60">
            Terms Of Service
          </Button>
        </div>
      </div>
    </footer>
  );
};
