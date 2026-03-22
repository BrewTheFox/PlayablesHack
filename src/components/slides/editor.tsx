import { JsonEditor, githubDarkTheme } from "json-edit-react";
import { Button } from "../ui/button";

interface SlideProps {
    setPatched: React.Dispatch<any>
    startPatch: Function
    data:{}
}

export default function Editor(props:SlideProps) {
  return (
    <div className="flex flex-col carditem">
      <div className="max-w-[100%] overflow-scroll">
        <JsonEditor
          rootName="game"
          collapse={2}
          maxWidth="1000%"
          className="mb-[5px] w-[100%] max-w-fit"
          theme={githubDarkTheme}
          onUpdate={(updateProps) => props.setPatched(updateProps.newData)}
          restrictTypeSelection
          restrictDelete
          data={props.data}
        />
      </div>
      <div className="mt-auto">
        <Button
          onClick={() => (props.startPatch())}
          className="rounded-xs font-bold text-red-100 bg-[#13161c] w-[100%]"
        >
          Patch!
        </Button>
      </div>
    </div>
  );
}
