import { Button } from "../ui/button";


interface SlideProps {
    ConsoleOutput: Array<String>
    ButtonStatus: boolean
    SendPatch: Function
    Restore: Function
}

export default function Patch(props:SlideProps) {
  return (
    <div className="carditem flex flex-col">
      <div className="min-h-[40vh] overflow-scroll">
        {props.ConsoleOutput.map((output, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index % 2 == 0 ? "#1a1a1a6f" : "#ffffff00",
            }}
          >
            <h1 className="break-words">
              <span className="font-semibold text-green-400">
                you@brewthefox.dev #{" "}
              </span>
              <span className="text-green-100">{output}</span>
            </h1>
          </div>
        ))}
      </div>
      <div className="mt-auto flex justify-center gap-[8vw]">
        <Button disabled={props.ButtonStatus} className="bg-[#00aaff]" onClick={() => (props.SendPatch())}>
          Send!
        </Button>
        <Button disabled={props.ButtonStatus} className="bg-[#00FF00]" variant={"outline"} onClick={() => (props.Restore())}>
          Restore
        </Button>
      </div>
    </div>
  );
}
