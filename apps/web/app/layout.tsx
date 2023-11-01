import "tailwindconfig/globals.css";
import Image from "next/image";
import type { Session } from "next-auth";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { UserIcon } from "lucide-react";
import { AlertDialog, AlertDialogTrigger } from "ui";
import { ThemeProvider } from "./theme-provider";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Provider from "./context/auth.provider";
import SignInForm from "./components/auth/SignInForm";

const inter = Inter({ subsets: ["latin"] });

function NavBar({ session }: { session: Session | null }) {
  const ProfilePicture = session?.user?.image ? (
    <Image
      className="rounded-full"
      alt="profile picture"
      height={48}
      src={session.user.image}
      width={48}
    />
  ) : (
    <div className="flex items-center justify-center w-12 rounded-full aspect-square bg-primary">
      <UserIcon />
    </div>
  );
  const ProfileAction = session?.user?.name ? (
    <span>{session.user.name}</span>
  ) : (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button type="button">SignIn</button>
      </AlertDialogTrigger>

      <SignInForm />
    </AlertDialog>
  );

  return (
    <nav className="flex items-center w-full px-3 py-1 md:flex-row md:justify-start md:items-center">
      <div className="flex items-center justify-center gap-2 ml-auto">
        {ProfilePicture}
        {ProfileAction}
      </div>
    </nav>
  );
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
            enableSystem
          >
            <NavBar session={session} />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
