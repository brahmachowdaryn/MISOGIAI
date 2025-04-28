mport { useState, useEffect } from "react";
import { useEcoActions } from "@/hooks/useEcoActions";
import ActionCard from "./ActionCard";
import { toast } from "@/hooks/use-toast";

interface ActionLoggerProps {
  userId: string;
}

export default function ActionLogger({ userId }: ActionLoggerProps) {
  const { ecoActions, todayLogged, logAction } = useEcoActions(userId);

  const handleLogAction = (actionId: string, notes?: string) => {
    const result = logAction(actionId, notes);
    
    if (result.success) {
      toast({
        title: "Action Logged!",
        description: "Thank you for your contribution to a greener planet.",
      });
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to log action",
        variant: "destructive",
      });
    }
    
    return result;
  };

  if (todayLogged) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-medium text-green-800">Great job today!</h3>
        <p className="text-green-600 mt-2">
          You've already logged your eco-action for today. Come back tomorrow to continue your streak!
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Log Today's Action</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecoActions.map((action) => (
          <ActionCard
            key={action.id}
            action={action}
            onLog={handleLogAction}
          />
        ))}
      </div>
    </div>
  );
}
