import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const CodeEditor = () => (
  <AceEditor
    placeholder="Placeholder Text"
    mode="java"
    theme="monokai"
    name="blah2"
    onLoad={() => {}}
    onChange={(e) => {
      console.log(e);
    }}
    fontSize={14}
    lineHeight={24}
    showPrintMargin={true}
    showGutter={true}
    highlightActiveLine={true}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      showLineNumbers: true,
      tabSize: 2,
    }}
  />
);

export default CodeEditor;
