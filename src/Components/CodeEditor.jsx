import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiTrash2, FiRefreshCw, FiUpload, FiDownload } from "react-icons/fi";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools"; // For autocompletion
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your JavaScript code here");
  const [consoleOutput, setConsoleOutput] = useState("");
  const [editorTheme, setEditorTheme] = useState("monokai");
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const navigate = useNavigate();

  const handleRunCode = () => {
    const log = console.log;
    const logs = [];
    console.log = (...args) => {
      logs.push(args.join(" "));
    };

    let timeComplexity;
    let spaceComplexity;

    // Time Complexity Detection based on pattern matching for loops, recursion, and nested loops
    const loopPattern = /(for|while)\s*\(.*\)/g;
    const recursivePattern =
      /function\s+\w+\s*\(.*\)\s*{[^}]*\b\w+\s*\([^)]*\);/g;
    const nestedLoopPattern = /(for|while)[^{]*{[^}]*\1/g;

    // Space Complexity Detection based on variable allocation
    const spacePattern = /(let|const|var)\s+\w+\s*=/g;

    // Estimate Time Complexity
    if (nestedLoopPattern.test(code)) {
      timeComplexity = "O(n^2)"; // Nested loops indicate quadratic time complexity
    } else if (loopPattern.test(code)) {
      timeComplexity = "O(n)"; // Single loop indicates linear time complexity
    } else if (recursivePattern.test(code)) {
      timeComplexity = "O(log n)"; // Recursive functions often indicate logarithmic time complexity
    }

    // Estimate Space Complexity
    const variableCount = (code.match(spacePattern) || []).length;
    const recursiveCount = (code.match(recursivePattern) || []).length;

    if (recursiveCount > 0) {
      spaceComplexity = `O(${recursiveCount}n)`; // Recursive function implies stack space usage
    } else if (variableCount > 0) {
      spaceComplexity = `O(${variableCount})`; // Space depends on the number of variables
    }

    try {
      new Function(code)(); // Run the user's code

      let output = logs.join("\n");

      // Append time and space complexities only if they were calculated
      if (timeComplexity) {
        output += `\n\nTime Complexity: ${timeComplexity}`;
      } else {
        output += `\n\nTime Complexity: Could not be determined`;
      }

      if (spaceComplexity) {
        output += `\nSpace Complexity: ${spaceComplexity}`;
      } else {
        output += `\nSpace Complexity: Could not be determined`;
      }

      setConsoleOutput(output);
    } catch (error) {
      let output = `Error: ${error.message}`;

      // Append time and space complexities only if they were calculated
      if (timeComplexity) {
        output += `\n\nTime Complexity: ${timeComplexity}`;
      } else {
        output += `\n\nTime Complexity: Could not be determined`;
      }

      if (spaceComplexity) {
        output += `\nSpace Complexity: ${spaceComplexity}`;
      } else {
        output += `\nSpace Complexity: Could not be determined`;
      }

      setConsoleOutput(output);
    }

    console.log = log;
  };

  const handleClearConsole = () => {
    setConsoleOutput("");
  };

  const handleResetCode = () => {
    setCode("// Write your JavaScript code here");
  };

  const handleThemeChange = (event) => {
    setEditorTheme(event.target.value);
  };

  const handleImportCode = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCode(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleExportCode = () => {
    const blob = new Blob([code], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "code.js";
    a.click();
    URL.revokeObjectURL(url);
  };

  const glow = {
    boxShadow: "0 0 4px rgba(250, 100, 200, 1)",
  };

  // Debounce function to delay running the code after typing stops
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // Automatically run the code after typing stops (debounced)
  useEffect(() => {
    const runCodeDebounced = debounce(handleRunCode, 1000); // 1-second delay
    runCodeDebounced();
  }, [code]);

  return (
    <div
      className={`flex flex-col h-screen ${
        darkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-purple-900"
          : "bg-white"
      } overflow-hidden`}
    >
      <header className="p-4 flex flex-col md:flex-row justify-between items-center bg-opacity-90 backdrop-blur-md border-b-2 border-gray-800 shadow-lg gap-y-2">
        <h1 className="relative text-xl rounded bg-gradient-to-r from-slate-950 to-purple-900 p-2 font-bold text-white tracking-widest uppercase">
          CodeQuest Javascript IDE
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute w-56 h-56 rounded-full"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-20 blur-3xl"
              animate={{ scale: [1, 1.4, 1], rotate: [360, 180, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <motion.span
            className={`absolute left-0 bottom-0 w-full h-0.5 ${
              darkMode ? "bg-white" : "bg-cyan-500"
            } rounded-full`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, repeat: 5, ease: "easeInOut" }}
          />
        </h1>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`text-xl p-2 rounded ${
              darkMode
                ? "bg-gray-700 bg-opacity-70 text-white hover:bg-gray-700"
                : "bg-cyan-300 bg-opacity-80 text-gray-900 hover:bg-gray-300"
            } transition-colors`}
          >
            {darkMode ? (
              <FaSun className="text-yellow-300" />
            ) : (
              <FaMoon className="text-indigo-950" />
            )}
          </button>

          <select
            className="p-2 cursor-pointer bg-gradient-to-r from-purple-700 to-slate-900 text-white rounded shadow-md border border-t-purple-700 focus:outline-none"
            value={editorTheme}
            onChange={handleThemeChange}
            style={glow}
          >
            <option className="bg-purple-900" value="monokai">
              Monokai
            </option>
            <option className="bg-purple-900" value="github">
              GitHub
            </option>
            <option className="bg-purple-900" value="clouds_midnight">
              Clouds Midnight
            </option>
            <option className="bg-purple-900" value="solarized_dark">
              Solarized Dark
            </option>
          </select>
        </div>

        <motion.button
          className="w-full md:w-[10%] py-2 px-2 bg-gradient-to-br from-blue-800 to-purple-800 text-white font-extrabold text-xl rounded hover:from-blue-700 hover:to-purple-700 shadow-lg transform transition-transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "tween", stiffness: 100 }}
          onClick={() => navigate("/")}
        >
          Home
        </motion.button>
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        <div className="relative flex-1 flex flex-col bg-opacity-80 bg-gray-800 overflow- p-6">
          <AceEditor
            mode="javascript"
            theme={editorTheme}
            name="codeEditor"
            value={code}
            onChange={(newCode) => setCode(newCode)}
            editorProps={{ $blockScrolling: true }}
            className="w-full h-full border-2 border-gray-600 rounded-lg shadow-lg  "
            height="100%"
            width="100%"
            setOptions={{
              fontSize: "14px",
              showPrintMargin: false,
              wrap: true,
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
            }}
            enableLiveAutocompletion={true}
            enableBasicAutocompletion={true}
          />
          <motion.button
            onClick={handleResetCode}
            className="absolute bottom-8 right-8 p-4 bg-gradient-to-r from-purple-500 to-slate-800 border-2 border-opacity-70 border-t-purple-500 border-l-purple-500 text-white rounded shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-700 z-10"
          >
            <FiRefreshCw size={20} className="w-3 h-3" />
          </motion.button>

          <motion.button
            onClick={handleExportCode}
            className="absolute bottom-24 right-8 p-4 bg-gradient-to-r from-green-500 to-teal-800 border-2 border-opacity-70 border-t-green-500 border-l-green-500 text-white rounded shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-700 z-10"
          >
            <FiDownload size={20} className="w-3 h-3" />
          </motion.button>
          <label className="absolute bottom-40 right-8 p-4 bg-gradient-to-r from-blue-500 to-cyan-800 border-2 border-opacity-70 border-t-blue-500 border-l-blue-500 text-white rounded shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 z-10">
            <FiUpload size={20} className="w-3 h-3" />
            <input
              type="file"
              accept=".js"
              onChange={handleImportCode}
              className="hidden"
            />
          </label>
        </div>
        <div className="w-full md:w-1/3 flex flex-col p-6 min-h-[250px] md:min-h-[200px]">
          <div className="flex justify-between items-center mb-4">
            <h2
              className={`text-2xl font-medium font-mono p-3 ${
                darkMode ? "bg-gray-900 text-white" : "bg-white text-slate-950"
              } rounded-lg shadow-2xl`}
            >
              Console Output
            </h2>
            <motion.button
              onClick={handleClearConsole}
              className={`p-2 ${
                darkMode ? "bg-gray-900 text-white" : "bg-white text-slate-950"
              } rounded-full shadow-xl hover:bg-red-600 hover:text-white transition-all duration-300`}
              whileHover={{ scale: 1.1 }}
            >
              <FiTrash2 size={20} />
            </motion.button>
          </div>
          <div
            className={`flex-1 rounded-lg border-2 border-gray-700 p-4 overflow-auto shadow-lg ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-slate-950"
            }`}
          >
            <pre className="whitespace-pre-wrap">{consoleOutput}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
