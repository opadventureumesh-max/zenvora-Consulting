import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FileText } from "lucide-react";

interface PrivacyPolicyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const privacyDocuments = [
  { name: "Privacy Policy", file: "/documents/privacy-policy.pdf" },
  { name: "Cookie Policy", file: "/documents/cookie-policy.pdf" },
  { name: "Data Protection Policy", file: "/documents/data-protection-policy.pdf" },
  { name: "Refund Policy", file: "/documents/refund-policy.pdf" },
];

const PrivacyPolicyDialog = ({ open, onOpenChange }: PrivacyPolicyDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">Our Policies</DialogTitle>
          <DialogDescription>Select a document to view</DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 mt-2">
          {privacyDocuments.map((doc) => (
            <a
              key={doc.file}
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent hover:border-gold/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <FileText className="w-5 h-5 text-primary group-hover:text-gold transition-colors" />
              </div>
              <span className="font-medium text-foreground group-hover:text-gold transition-colors">
                {doc.name}
              </span>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
