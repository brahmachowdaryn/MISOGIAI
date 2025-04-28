import { useState, useEffect } from "react";

  // Log a new eco-action
  const logAction = (actionId: string, notes?: string) => {
    if (!userId) return { success: false, error: "Not authenticated" };
    
    const today = new Date().toISOString().split('T')[0];
    
    // Check if user already logged an action today
    if (todayLogged) {
      return { success: false, error: "You've already logged an action today" };
    }
    
    const newAction: LoggedAction = {
      id: `action-${Date.now()}`,
      userId,
      actionId,
      date: new Date().toISOString(),
      notes
    };
    
    const updatedActions = [...loggedActions, newAction];
    setLoggedActions(updatedActions);
    setTodayLogged(true);
    
    // Save to local storage
    localStorage.setItem(`actions-${userId}`, JSON.stringify(updatedActions));
    
    // Update user points
    const action = ecoActions.find(a => a.id === actionId);
    if (action) {
      const userString = localStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        user.totalPoints = (user.totalPoints || 0) + action.ecoPoints;
        localStorage.setItem("user", JSON.stringify(user));
      }
    }
    
    return { success: true };
  };

  // Calculate total eco-points
  const calculateTotalPoints = () => {
    return loggedActions.reduce((total, loggedAction) => {
      const action = ecoActions.find(a => a.id === loggedAction.actionId);
      return total + (action?.ecoPoints || 0);
    }, 0);
  };

  return {
    ecoActions,
    loggedActions,
    isLoading,
    todayLogged,
    logAction,
    calculateTotalPoints
  };
};
