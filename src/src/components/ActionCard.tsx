mport { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { EcoAction } from "@/types";
import { Recycle, Bike, Leaf } from "lucide-react";

interface ActionCardProps {
  action: EcoAction;
  onLog: (actionId: string, notes?: string) => { success: boolean; error?: string };
  disabled?: boolean;
}

export default function ActionCard({ action, onLog, disabled = false }: ActionCardProps) {
  const [notes, setNotes] = useState("");
  const [isLogging, setIsLogging] = useState(false);

  const handleLog = () => {
    setIsLogging(true);
    const result = onLog(action.id, notes);
    setIsLogging(false);
    
    if (result.success) {
      setNotes("");
    }
  };

  // Render the appropriate icon based on the action's icon property
  const renderIcon = () => {
    switch (action.icon) {
      case "recycle":
        return <Recycle className="h-5 w-5" />;
      case "bike":
        return <Bike className="h-5 w-5" />;
      case "leaf":
      default:
        return <Leaf className="h-5 w-5" />;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {renderIcon()}
            {action.name}
          </CardTitle>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            +{action.ecoPoints} pts
          </span>
        </div>
        <CardDescription>{action.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Add optional notes about your action..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
}
