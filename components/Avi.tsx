import { FaStar } from "react-icons/fa";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Avi() {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-1">
          <FaStar className="fill-yellow-200 stroke-black stroke-10" />
          <FaStar className="fill-yellow-200 stroke-black stroke-10" />
          <FaStar className="fill-yellow-200 stroke-black stroke-10" />
          <FaStar className="fill-yellow-200 stroke-black stroke-10" />
          <FaStar className="fill-yellow-200 stroke-black stroke-10" />
        </div>
        <CardTitle>Lorem, ipsLorem</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet r sit a, adipisicing elit. adipisicing
          voluptas, ullam dolorum ut quis dolesseesse ad ea!
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
