import Editor from "@monaco-editor/react";

function CodeEditor({ language, value, onChange }) {
  return (
    <Editor
      height="400px"
      defaultLanguage={language}
      defaultValue={value || ""}
      onChange={onChange}
      options={{
        minimap: { enabled: false },
        fontSize: 16,
        wordWrap: "on",
      }}
    />
  );
}

export default CodeEditor;
