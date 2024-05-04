import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <main className={"w-screen h-screen scroll-smooth"}>
      <Dashboard limit={10} offset={10} sort={""} filter={undefined} />
    </main>
  );
}
