import Image from "next/image";
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Lets Go Party</h1>
      <Button variant="destructive" className="px-10">Button</Button>
    </main>
  );
}
