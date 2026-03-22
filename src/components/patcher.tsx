import { useState, useEffect } from "react";
import { Base64 } from "js-base64";
import axios from "axios";
import Background from "./background";
import { Sparkles } from "lucide-react";
import ModNav from "./newnavbar";
import ScrambledText from "./ReactBits/ScrambledText";
import { toast, Toaster } from "sonner";
import Start from "./slides/start";
import Patch from "./slides/patch";
import Editor from "./slides/editor";

interface HeaderType {
  [key: string]: string;
}

interface PatcherProps {
  logo?: string;
}

export default function Patcher(props: PatcherProps) {
  const [headers, setHeaders] = useState<HeaderType>({});
  const [timesOpen, setTimesOpen] = useState(0);
  const [curl, setCurl] = useState("");
  const [bgColor, setBgColor] = useState("#0000002f");
  const [backup, setBackup] = useState({});
  const [patched, setPatched] = useState<any>({});
  const [Visible, setVisible] = useState("start");
  const [isValid, setValid] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<Array<string>>([
    "Patching Started.",
  ]);
  const [isButtonDisabled, SetbuttonDisabled] = useState(false);

  let requestConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://playablesback.vercel.app/do-request/",
    headers: {
      "Content-Type": "application/json",
    },
    data: "",
  };

  function startPatch() {
    setVisible("patch");
    setBgColor("#0000002f");
  }

  function restore() {
    SetbuttonDisabled(true);
    const output: Array<string> = [...consoleOutput];
    output.push("Sending the original data to the server...");
    setConsoleOutput(output);

    const datatosend = Base64.encode(
      JSON.stringify({
        gameinfo: Base64.encode(JSON.stringify(backup)),
        gameheaders: headers,
      })
    );

    let data = JSON.stringify({
      encodeddata: datatosend,
    });

    requestConfig["data"] = data;

    axios
      .request(requestConfig)
      .then((response) => {
        const output: Array<string> = [...consoleOutput];
        output.push(JSON.stringify(response.data));
        output.push("Data was sent.");
        output.push("Validating restore...");
        if (JSON.stringify(response.data) === '{"status":200}') {
          output.push("Got a positive response OwO");
        } else {
          output.push(
            "Oops. It seems that your YouTube cookie has expired, try it again."
          );
        }
        output.push("🦊 Thank you for trusting in this fox :3 🦊");
        setConsoleOutput(output);
        SetbuttonDisabled(false);
      })
      .catch((error) => {
        output.push(error);
        output.push("Oops. We had an unknown browser error :(");
        output.push("🦊 Thank you for trusting in this fox :3 🦊");
        SetbuttonDisabled(false);
      });
  }

  function sendData() {
    SetbuttonDisabled(true);
    const output: Array<string> = [...consoleOutput]; // Inicializa output con el valor de consoleOutput
    output.push("Sending patched data to the server..."); // Agrega el valor de i a output
    setConsoleOutput(output); // Actualiza consoleOutput con el array completo
    const datatosend = Base64.encode(
      JSON.stringify({
        gameinfo: Base64.encode(JSON.stringify(patched)),
        gameheaders: headers,
      })
    );

    let data = JSON.stringify({
      encodeddata: datatosend,
    });

    requestConfig["data"] = data;

    axios
      .request(requestConfig)
      .then((response) => {
        const output: Array<string> = [...consoleOutput];
        output.push(JSON.stringify(response.data));
        output.push("Data was sent.");
        output.push("Validating patch...");
        if (JSON.stringify(response.data) === '{"status":200}') {
          output.push("Got a positive response OwO");
        } else {
          output.push(
            "Oops. It seems that your YouTube cookie expired, try it again."
          );
        }
        output.push("🦊 Thank you for trusting in this fox :3 🦊");
        setConsoleOutput(output);
        SetbuttonDisabled(false);
      })
      .catch((error) => {
        output.push(error);
        output.push("Oops. We had an unknown browser error :(");
        output.push("🦊 Thank you for trusting in this fox :3 🦊");
        SetbuttonDisabled(false);
      });
  }

  useEffect(() => {
    console.log(curl);
    console.log(headers);
  }, [curl, headers]);

  function parseData() {
    setTimesOpen(timesOpen + 1);
    const regex = /-H '([^:]+): ((?:(?!').)+)' /g;
    const regex2 = /--data-raw '(.*)'/g;

    const matches = curl.matchAll(regex);
    for (const match of matches) {
      setHeaders((prevHeaders) => ({
        ...prevHeaders,
        [match[1]]: match[2],
      }));
    }
    const savegame = curl.matchAll(regex2);
    let decoded = "";
    for (const match of savegame) {
      try {
        decoded = Base64.decode(match[1]);
      } catch {
        toast.error("Invalid encoding data!", { position: "bottom-center" });
        break;
      }

      try {
        let parsed = JSON.parse(decoded);
        setValid(true);
        setBackup(parsed);
        setPatched(parsed);
      } catch {
        setValid(false);
        toast.error("Invalid json data!", { position: "bottom-center" });
      }
    }
  }

  useEffect(() => {
    if (timesOpen >= 1) {
      if (
        isValid &&
        Object.keys(headers).length >= 1 &&
        patched !== undefined
      ) {
        toast.success("Data was found!", { position: "bottom-center" });
        setBgColor("#0d1117");
        setVisible("editor");
      }
    }
  }, [timesOpen]);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <ModNav />

      <div style={{ padding: "2.5em" }}></div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            className="shadow-[0px_4px_50px_27px_rgba(0,_0,_0,_0.3)] maincard rounded-sm backdrop-blur-xs mb-[40px]"
            style={{ backgroundColor: bgColor }}
          >
            <div className="flex items-center justify-center min-w-[50vw] bg-[#232b2baf] rounded-t-sm">
              <Sparkles
                className="mr-[1vw]"
                width="3vmax"
                height="3vmax"
                color="white"
              />
              {typeof props.logo == "undefined" && (
                <div>
                  <ScrambledText style={{fontSize:"3vmax"}}>
                    Advanced
                  </ScrambledText>
                </div>
              )}
              {typeof props.logo == "string" && (
                <img src={props.logo} width={130}></img>
              )}
              <Sparkles
                className="ml-[1vw]"
                width="3vmax"
                height="3vmax"
                color="white"
              />
            </div>
            {Visible == "start" && (
              <Start setCurl={setCurl} parseFunction={parseData} />
            )}
            {Visible == "editor" && (
              <Editor
                setPatched={setPatched}
                startPatch={startPatch}
                data={backup}
              />
            )}
            {Visible == "patch" && (
              <Patch
                ConsoleOutput={consoleOutput}
                ButtonStatus={isButtonDisabled}
                SendPatch={sendData}
                Restore={restore}
              />
            )}
          </div>
        </div>
      </div>
      <Toaster richColors theme="dark" />
      <Background />
    </div>
  );
}
