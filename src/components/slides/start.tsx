
import { Button } from "../ui/button";

interface SlideProps {
    setCurl: React.Dispatch<React.SetStateAction<string>>
    parseFunction: Function
}

export default function Start(props:SlideProps) {
      function clearBox(id: string) {
    let input = document.getElementById(id) as HTMLInputElement;
    if (input != null) {
      input.value = "";
      props.setCurl("");
    }
  }
  return (
    <div className="carditem flex flex-col">
      <div className="h-[85%] flex justify-center">
        <textarea
          id="curl-cmd"
          placeholder="Curl command here..."
          style={{ resize: "none" }}
          onChange={(text) => props.setCurl(text.target.value)}
          className="mt-[2vh] h-[90%] w-[80%] text-white rounded-sm"
        />
      </div>
      <div className="mt-auto gap-[8vw] mb-[2vh] flex justify-center">
        <Button
          onClick={() => props.parseFunction()}
          className="bg-[#00aaff]"
        >
          Read
        </Button>

        <Button className="outline-2px text-red-100 outline-white" variant={"outline"}>
          Tutorial
        </Button>

        <Button
          onClick={() => clearBox("curl-cmd")}
          className="text-red-900"
          variant={"outline"}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}
