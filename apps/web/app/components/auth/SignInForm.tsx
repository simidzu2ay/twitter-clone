"use client";

import { GithubIcon, XSquareIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import {
  Button,
  Input,
  Label,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "ui";

export default function SignInForm() {
  return (
    <AlertDialogContent>
      <AlertDialogHeader className="space-y-1">
        <div className="flex flex-row items-center justify-between text-2xl">
          <AlertDialogTitle>Login into an account</AlertDialogTitle>

          <AlertDialogCancel className="ml-0 bg-destructive">
            <XSquareIcon className="text-destructive-foreground" />
          </AlertDialogCancel>
        </div>
      </AlertDialogHeader>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 gap-6">
          <Button variant="outline">
            <GithubIcon className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-background text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email or Username</Label>
          <Input id="email" placeholder="m@example.com" type="email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </div>
      <AlertDialogFooter>
        <AlertDialogAction
          className="w-full"
          onClick={async () => {
            // TODO: take data from fields
            await signIn("credentials", {
              email: "",
              password: "",
            });
          }}
        >
          Log In
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
