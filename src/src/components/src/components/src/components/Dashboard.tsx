import { useAuthState } from "@/hooks/useAuthState";
import { useEcoActions } from "@/hooks/useEcoActions";
import ActionLogger from "./ActionLogger";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const { user } = useAuthState();
  const { calculateTotalPoints, loggedActions } = useEcoActions(user?.id || null);
  
  if (!user) {
    return <div>Please login to access your dashboard.</div>;
  }

  const totalPoints = user.totalPoints || 0;
  const actionsCount = loggedActions.length;
  const nextMilestone = Math.ceil(totalPoints / 10) * 10;
  const progress = (totalPoints / nextMilestone) * 100;

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">Your Eco Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Eco Points</CardTitle>
            <CardDescription>Your environmental impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-600">{totalPoints}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Actions Logged</CardTitle>
            <CardDescription>Your contribution count</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-600">{actionsCount}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Current Streak</CardTitle>
            <CardDescription>Days in a row</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-600">{user.streak || 0}</div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Progress to Next Milestone</CardTitle>
          <CardDescription>Keep going! You're making a difference</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>{totalPoints} points</span>
            <span>{nextMilestone} points</span>
          </div>
        </CardContent>
      </Card>
      
      <ActionLogger userId={user.id} />
    </div>
  );
}
