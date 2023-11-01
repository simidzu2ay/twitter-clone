import { Button, buttonVariants } from "ui";

export default function Page(): JSX.Element {
  return (
    <main>
      <Button
        className={buttonVariants({
          variant: "default",
        })}
      >
        Some test text
      </Button>
    </main>
  );
}
