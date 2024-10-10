import { FlipWords } from "@/components/ui/flip-words";

export default async function Home() {
  const words: string[] = ["ice", "weed", "alcohol"]
  
  return (
    <div className="">
      <div className="flex flex-col justify-center h-dvh ">
        <p className="font-bold text-5xl text-center">
          Do you want to do
          <FlipWords words={words}/>
        </p>
        <p className="text-sm text-center">Then you are at the right place</p>
      </div>
      <div className="text-xl text-center h-dvh">Do OF instead</div>
    </div>
  );
}
