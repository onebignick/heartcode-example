import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Naruto from "@/app/assets/naruto2.jpg";

export default function AboutMe() {
  return (
    <div className="p-5">
        Hello world this is the about me route
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello I am nicholas
                </CardTitle>
                <CardDescription>
                    I like to code lots
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={Naruto} alt="1"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Nicholas
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
    </div>
  );
}