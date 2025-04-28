import { useState } from "react";
        });
      }
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {authType === "login" ? "Login to GreenSteps" : "Create Your GreenSteps Account"}
        </CardTitle>
        <CardDescription>
          {authType === "login" 
            ? "Track your sustainable habits and see your impact" 
            : "Join the community of eco-conscious individuals"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Processing..." : authType === "login" ? "Login" : "Register"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        {authType === "login" ? (
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="/register" className="text-primary font-medium">
              Register here
            </a>
          </p>
        ) : (
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-primary font-medium">
              Login here
            </a>
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
