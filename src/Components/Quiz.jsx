import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const mcqQuestions = [
  // Easy

  {
    question: "What is React?",
    options: [
      "A library for building user interfaces",
      "A database",
      "A backend framework",
    ],
    correctAnswers: ["A library for building user interfaces"],
    type: "single",
  },
  {
    question: "What is JSX?",
    options: [
      "A syntax extension for JavaScript",
      "A CSS library",
      "A type of JSON",
    ],
    correctAnswers: ["A syntax extension for JavaScript"],
    type: "single",
  },
  {
    question: "Which method is used to update the state in React?",
    options: ["setState", "updateState", "changeState"],
    correctAnswers: ["setState"],
    type: "single",
  },
  {
    question: "What does the `render` method do in a React component?",
    options: [
      "It defines the structure of the UI",
      "It initializes the component",
      "It handles state updates",
    ],
    correctAnswers: ["It defines the structure of the UI"],
    type: "single",
  },
  {
    question: "How do you create a functional component in React?",
    options: [
      "function ComponentName() {}",
      "class ComponentName extends React.Component {}",
      "const ComponentName = () => {}",
    ],
    correctAnswers: [
      "function ComponentName() {}",
      "const ComponentName = () => {}",
    ],
    type: "multiple",
  },
  {
    question: "What is the purpose of the `key` prop in React lists?",
    options: [
      "To uniquely identify elements in the list",
      "To define the style of elements",
      "To specify the element type",
    ],
    correctAnswers: ["To uniquely identify elements in the list"],
    type: "single",
  },
  {
    question:
      "What hook would you use to handle side effects in a functional component?",
    options: ["useState", "useEffect", "useReducer"],
    correctAnswers: ["useEffect"],
    type: "single",
  },
  {
    question: "How can you optimize performance in a React application?",
    options: [
      "Using PureComponent",
      "Using useEffect",
      "Using mapStateToProps",
    ],
    correctAnswers: ["Using PureComponent"],
    type: "single",
  },
  {
    question: "What is the purpose of `useMemo` hook in React?",
    options: [
      "To memoize expensive calculations",
      "To handle side effects",
      "To update state",
    ],
    correctAnswers: ["To memoize expensive calculations"],
    type: "single",
  },
  {
    question: "What is React's context API used for?",
    options: [
      "To pass data through the component tree without props",
      "To manage local state",
      "To handle routing",
    ],
    correctAnswers: ["To pass data through the component tree without props"],
    type: "single",
  },
  {
    question: "How do you handle events in React?",
    options: [
      "By using event handlers like `onClick`",
      "By directly manipulating the DOM",
      "By using setState",
    ],
    correctAnswers: ["By using event handlers like `onClick`"],
    type: "single",
  },
  {
    question: "What does `ReactDOM.render()` do?",
    options: [
      "Renders a React component into the DOM",
      "Updates the state of a React component",
      "Handles routing in a React application",
    ],
    correctAnswers: ["Renders a React component into the DOM"],
    type: "single",
  },
  {
    question: "How do you pass data between components in React?",
    options: ["By using props", "By using context", "By using local storage"],
    correctAnswers: ["By using props"],
    type: "single",
  },
  {
    question: "What is the purpose of the `useRef` hook?",
    options: [
      "To access DOM elements",
      "To handle side effects",
      "To memoize calculations",
    ],
    correctAnswers: ["To access DOM elements"],
    type: "single",
  },
  {
    question:
      "What is the default behavior of a React component's `componentDidMount` method?",
    options: [
      "It is called once after the component mounts",
      "It is called every time the component renders",
      "It is called when the component is updated",
    ],
    correctAnswers: ["It is called once after the component mounts"],
    type: "single",
  },
  {
    question: "What is the purpose of `React.StrictMode`?",
    options: [
      "To highlight potential problems in the application",
      "To optimize performance",
      "To provide global state management",
    ],
    correctAnswers: ["To highlight potential problems in the application"],
    type: "single",
  },
  {
    question: "How can you conditionally render a component in React?",
    options: [
      "Using conditional operators or ternary operators",
      "By directly manipulating the DOM",
      "By using `setState`",
    ],
    correctAnswers: ["Using conditional operators or ternary operators"],
    type: "single",
  },

  // Medium
  {
    question:
      "What is the difference between `componentDidMount` and `componentWillUnmount`?",
    options: [
      "`componentDidMount` is called after the component mounts; `componentWillUnmount` is called before the component unmounts",
      "`componentDidMount` is called before the component mounts; `componentWillUnmount` is called after the component unmounts",
      "`componentDidMount` is used for setting state; `componentWillUnmount` is used for rendering",
    ],
    correctAnswers: [
      "`componentDidMount` is called after the component mounts; `componentWillUnmount` is called before the component unmounts",
    ],
    type: "single",
  },
  {
    question: "What are controlled components in React?",
    options: [
      "Components where form data is handled by the state of the component",
      "Components where form data is handled by the DOM",
      "Components that are rendered conditionally",
    ],
    correctAnswers: [
      "Components where form data is handled by the state of the component",
    ],
    type: "single",
  },
  {
    question: "How can you prevent a component from re-rendering in React?",
    options: [
      "By using `React.memo` or `PureComponent`",
      "By using `useEffect` with an empty dependency array",
      "By using `useReducer`",
    ],
    correctAnswers: ["By using `React.memo` or `PureComponent`"],
    type: "single",
  },
  {
    question: "What is the difference between `useState` and `useReducer`?",
    options: [
      "`useState` is for local state management; `useReducer` is for complex state logic",
      "`useState` is for complex state logic; `useReducer` is for local state management",
      "`useState` is used for side effects; `useReducer` is used for form handling",
    ],
    correctAnswers: [
      "`useState` is for local state management; `useReducer` is for complex state logic",
    ],
    type: "single",
  },
  {
    question: "What is a Higher Order Component (HOC) in React?",
    options: [
      "A function that takes a component and returns a new component with additional props",
      "A component that renders other components",
      "A component that manages global state",
    ],
    correctAnswers: [
      "A function that takes a component and returns a new component with additional props",
    ],
    type: "single",
  },
  {
    question: "How do you handle errors in React?",
    options: [
      "By using Error Boundaries",
      "By using `try...catch` in `render` method",
      "By using `componentDidCatch` in lifecycle methods",
    ],
    correctAnswers: ["By using Error Boundaries"],
    type: "single",
  },
  {
    question: "What is the purpose of `React.Fragment`?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To handle routing",
      "To manage global state",
    ],
    correctAnswers: [
      "To group multiple elements without adding extra nodes to the DOM",
    ],
    type: "single",
  },
  {
    question:
      "What is the difference between `useEffect` and `useLayoutEffect`?",
    options: [
      "`useEffect` runs after painting; `useLayoutEffect` runs before painting",
      "`useEffect` runs before painting; `useLayoutEffect` runs after painting",
      "`useEffect` is used for data fetching; `useLayoutEffect` is used for side effects",
    ],
    correctAnswers: [
      "`useEffect` runs after painting; `useLayoutEffect` runs before painting",
    ],
    type: "single",
  },
  {
    question: "What is React's `useContext` hook used for?",
    options: [
      "To access the value of a context",
      "To handle form data",
      "To memoize functions",
    ],
    correctAnswers: ["To access the value of a context"],
    type: "single",
  },
  {
    question: "What is the `useCallback` hook used for in React?",
    options: [
      "To memoize functions",
      "To handle side effects",
      "To manage local state",
    ],
    correctAnswers: ["To memoize functions"],
    type: "single",
  },
  {
    question: "What is the purpose of `React.StrictMode`?",
    options: [
      "To identify potential problems in the application during development",
      "To optimize performance in production",
      "To provide a fallback UI in case of errors",
    ],
    correctAnswers: [
      "To identify potential problems in the application during development",
    ],
    type: "single",
  },
  {
    question: "What does the `useLayoutEffect` hook do?",
    options: [
      "It fires synchronously after all DOM mutations",
      "It fires asynchronously after all DOM mutations",
      "It handles side effects in functional components",
    ],
    correctAnswers: ["It fires synchronously after all DOM mutations"],
    type: "single",
  },
  {
    question: "How can you optimize React re-renders?",
    options: [
      "By using `React.memo`, `PureComponent`, and `useCallback`",
      "By using `setState`",
      "By using `useReducer`",
    ],
    correctAnswers: [
      "By using `React.memo`, `PureComponent`, and `useCallback`",
    ],
    type: "single",
  },
  {
    question: "What is `React.lazy` used for?",
    options: [
      "To enable dynamic imports for code-splitting",
      "To manage global state",
      "To handle form validation",
    ],
    correctAnswers: ["To enable dynamic imports for code-splitting"],
    type: "single",
  },
  {
    question: "What is `React.Suspense` used for?",
    options: [
      "To handle the loading state of components that are dynamically imported",
      "To manage global state",
      "To optimize rendering performance",
    ],
    correctAnswers: [
      "To handle the loading state of components that are dynamically imported",
    ],
    type: "single",
  },

  // Hard
  {
    question: "What are React's concurrency features and how do they work?",
    options: [
      "Features that allow React to pause and resume rendering to keep the UI responsive",
      "Features that optimize performance by reducing re-renders",
      "Features that handle global state management",
    ],
    correctAnswers: [
      "Features that allow React to pause and resume rendering to keep the UI responsive",
    ],
    type: "single",
  },
  {
    question: "How does React's reconciliation algorithm work?",
    options: [
      "It efficiently updates the DOM by comparing virtual DOM trees",
      "It manages the global state of the application",
      "It handles routing and navigation",
    ],
    correctAnswers: [
      "It efficiently updates the DOM by comparing virtual DOM trees",
    ],
    type: "single",
  },
  {
    question:
      "What are the key differences between React's `useEffect` and `useLayoutEffect`?",
    options: [
      "`useEffect` runs after DOM updates; `useLayoutEffect` runs before DOM updates",
      "`useEffect` is used for state management; `useLayoutEffect` is used for side effects",
      "`useEffect` is used in class components; `useLayoutEffect` is used in functional components",
    ],
    correctAnswers: [
      "`useEffect` runs after DOM updates; `useLayoutEffect` runs before DOM updates",
    ],
    type: "single",
  },
  {
    question:
      "What is the purpose of the `key` prop in React lists and why is it important?",
    options: [
      "It helps React identify which items have changed, are added, or are removed, optimizing rendering performance",
      "It sets the style of list items",
      "It specifies the type of list items",
    ],
    correctAnswers: [
      "It helps React identify which items have changed, are added, or are removed, optimizing rendering performance",
    ],
    type: "single",
  },
  {
    question:
      "What are the implications of React's virtual DOM in performance optimization?",
    options: [
      "The virtual DOM helps minimize direct DOM manipulation and optimize re-rendering by diffing and batching updates",
      "The virtual DOM improves global state management",
      "The virtual DOM optimizes network requests",
    ],
    correctAnswers: [
      "The virtual DOM helps minimize direct DOM manipulation and optimize re-rendering by diffing and batching updates",
    ],
    type: "single",
  },
  {
    question:
      "How does React's Context API compare to Redux for state management?",
    options: [
      "Context API is simpler and suitable for less complex state management; Redux is more powerful and suitable for larger applications",
      "Context API is used for routing; Redux is used for state management",
      "Context API and Redux are identical in functionality",
    ],
    correctAnswers: [
      "Context API is simpler and suitable for less complex state management; Redux is more powerful and suitable for larger applications",
    ],
    type: "single",
  },
  {
    question: "What are React Hooks and why were they introduced?",
    options: [
      "Hooks are functions that let you use state and other React features without writing a class. They were introduced to simplify component logic and reuse stateful logic.",
      "Hooks are used to handle routing",
      "Hooks are used to manage global state",
    ],
    correctAnswers: [
      "Hooks are functions that let you use state and other React features without writing a class. They were introduced to simplify component logic and reuse stateful logic.",
    ],
    type: "single",
  },
  {
    question:
      "What is `React.memo` and how is it different from `PureComponent`?",
    options: [
      "`React.memo` is used for functional components to prevent re-rendering; `PureComponent` is used for class components to achieve the same",
      "`React.memo` and `PureComponent` are identical in functionality",
      "`React.memo` is used for state management; `PureComponent` is used for effects",
    ],
    correctAnswers: [
      "`React.memo` is used for functional components to prevent re-rendering; `PureComponent` is used for class components to achieve the same",
    ],
    type: "single",
  },
  {
    question:
      "How does server-side rendering (SSR) differ from client-side rendering (CSR) in React?",
    options: [
      "SSR renders content on the server and sends HTML to the client, while CSR renders content in the browser.",
      "SSR and CSR are identical in functionality",
      "SSR is used for state management; CSR is used for effects",
    ],
    correctAnswers: [
      "SSR renders content on the server and sends HTML to the client, while CSR renders content in the browser.",
    ],
    type: "single",
  },
  {
    question: "What is the role of `ReactDOMServer` in server-side rendering?",
    options: [
      "It provides methods to render React components to static HTML on the server",
      "It handles global state management",
      "It manages routing and navigation",
    ],
    correctAnswers: [
      "It provides methods to render React components to static HTML on the server",
    ],
    type: "single",
  },
  {
    question:
      "What are the main considerations for managing large-scale state in React applications?",
    options: [
      "Choosing between Context API, Redux, MobX, or Zustand based on complexity and performance needs",
      "Managing state with local component state only",
      "Using hooks for state management only",
    ],
    correctAnswers: [
      "Choosing between Context API, Redux, MobX, or Zustand based on complexity and performance needs",
    ],
    type: "single",
  },
  {
    question: "What is the concept of 'lifting state up' in React?",
    options: [
      "Moving state to the closest common ancestor component to share it between child components",
      "Pushing state to a global store",
      "Handling state at the component level only",
    ],
    correctAnswers: [
      "Moving state to the closest common ancestor component to share it between child components",
    ],
    type: "single",
  },
  {
    question: "What are the advantages of using TypeScript with React?",
    options: [
      "Provides static type checking, improved IDE support, and better maintainability",
      "Improves performance by optimizing rendering",
      "Simplifies global state management",
    ],
    correctAnswers: [
      "Provides static type checking, improved IDE support, and better maintainability",
    ],
    type: "single",
  },
  {
    question: "What are React's Suspense boundaries used for?",
    options: [
      "To handle loading states and error handling for dynamically loaded components",
      "To manage global state",
      "To optimize performance for server-side rendering",
    ],
    correctAnswers: [
      "To handle loading states and error handling for dynamically loaded components",
    ],
    type: "single",
  },
  {
    question: "How do you implement code splitting in a React application?",
    options: [
      "By using dynamic imports and React's `lazy` and `Suspense`",
      "By using `setState`",
      "By using `useEffect`",
    ],
    correctAnswers: [
      "By using dynamic imports and React's `lazy` and `Suspense`",
    ],
    type: "single",
  },
  {
    question:
      "What are the implications of React's `useImperativeHandle` hook?",
    options: [
      "It allows you to customize the instance value exposed by `ref` in a functional component",
      "It handles side effects in functional components",
      "It memoizes expensive calculations",
    ],
    correctAnswers: [
      "It allows you to customize the instance value exposed by `ref` in a functional component",
    ],
    type: "single",
  },
  {
    question: "What is `React.memo` and when should you use it?",
    options: [
      "`React.memo` is a higher-order component that memoizes the result of a functional component to prevent unnecessary re-renders. Use it for performance optimization.",
      "`React.memo` is used for managing global state",
      "`React.memo` is used for routing",
    ],
    correctAnswers: [
      "`React.memo` is a higher-order component that memoizes the result of a functional component to prevent unnecessary re-renders. Use it for performance optimization.",
    ],
    type: "single",
  },
  {
    question:
      "What are the differences between `useEffect` with an empty dependency array and `componentDidMount`?",
    options: [
      "Both run once after the initial render, but `useEffect` can also handle updates if dependencies change",
      "`useEffect` runs every time the component renders, while `componentDidMount` only runs once",
      "`useEffect` is used for state management; `componentDidMount` is used for effects",
    ],
    correctAnswers: [
      "Both run once after the initial render, but `useEffect` can also handle updates if dependencies change",
    ],
    type: "single",
  },
];

const QUESTIONS_PER_PAGE = 10;

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Quiz = () => {
  const [answers, setAnswers] = useState(Array(mcqQuestions.length).fill([]));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(30* 60);
  const [showAlert, setShowAlert] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [timeWarning, setTimeWarning] = useState(false); // For time warning color
  const [showTimeExceededMessage, setShowTimeExceededMessage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (timeRemaining <= 0) {
      setShowTimeExceededMessage(true);
    } else if (timeRemaining <= 5 * 60) {
      setTimeWarning(true); // Set warning if time is less than or equal to 5 minutes
    } else {
      setTimeWarning(false);
    }

    if (timeRemaining > 0 && quizStarted && !submitted) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeRemaining, quizStarted, submitted]);

  const handleCheckboxChange = (questionIndex, option, type) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      if (type === "single") {
        updatedAnswers[questionIndex] = [option];
      } else {
        if (updatedAnswers[questionIndex].includes(option)) {
          updatedAnswers[questionIndex] = updatedAnswers[questionIndex].filter(
            (item) => item !== option
          );
        } else {
          updatedAnswers[questionIndex] = [
            ...updatedAnswers[questionIndex],
            option,
          ];
        }
      }
      return updatedAnswers;
    });
  };

  const handleSubmit = () => {
    if (answers.some((answer) => answer.length === 0)) {
      setShowModal(true);
      return;
    }
    setShowModal(false);
    setShowAlert(false);

    let newScore = 0;
    mcqQuestions.forEach((question, index) => {
      if (
        answers[index].sort().join() === question.correctAnswers.sort().join()
      ) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleReattempt = () => {
    setAnswers(Array(mcqQuestions.length).fill([]));
    setSubmitted(false);
    setScore(0);
    setTimeRemaining(30 * 60);
    setQuizStarted(false);
    setCurrentPage(1); // Reset to first page
    setShowModal(false);
  };

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  // Pagination Logic
  const totalPages = Math.ceil(mcqQuestions.length / QUESTIONS_PER_PAGE);
  const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
  const endIndex = startIndex + QUESTIONS_PER_PAGE;
  const questionsToDisplay = mcqQuestions.slice(startIndex, endIndex);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <header className="flex justify-between items-center p-4 sticky top-0 z-10">
        <div
          className={`fixed top-4 left-16 p-2   rounded text-sm font-medium ${
            darkMode ? "bg-gray-700 bg-opacity-70" : "bg-cyan-300 bg-opacity-80"
          } ${timeWarning ? "text-red-500" : ""}`}
        >
          Timer : {quizStarted ? formatTime(timeRemaining) : "30:00"}
        </div>
        <button
          onClick={toggleTheme}
          className={`text-xl p-2 rounded ${
            darkMode
              ? "bg-gray-700 bg-opacity-70  text-white hover:bg-gray-700"
              : "bg-cyan-300 bg-opacity-80 text-gray-900 hover:bg-gray-300"
          } transition-colors`}
        >
          {darkMode ? (
            <FaSun className="text-yellow-300" />
          ) : (
            <FaMoon className="text-indigo-950" />
          )}
        </button>
      </header>

      <motion.div
        className="flex-grow flex flex-col items-center justify-center p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="w-full max-w-4xl p-8 bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 1.5 }}
        >
          <motion.h1
            className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1.5 }}
          >
            CodeQuest React Quiz
          </motion.h1>

          <div className="flex justify-center items-center gap-4">
            {!quizStarted && !submitted && (
              <motion.button
                onClick={() => setQuizStarted(true)}
                className="w-[30%] py-4 px-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-extrabold text-xl rounded-full hover:from-green-600 hover:to-teal-600 shadow-lg transform transition-transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "tween", stiffness: 100 }}
              >
                Start Quiz
              </motion.button>
            )}

            <motion.button
              className="w-[30%] py-4 px-4 bg-gradient-to-br from-blue-800 to-purple-800 text-white font-extrabold text-xl rounded-full hover:from-blue-700 hover:to-purple-700 shadow-lg transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "tween", stiffness: 100 }}
              onClick={() => navigate("/")}
            >
              Home
            </motion.button>
          </div>

          {quizStarted &&
            questionsToDisplay.map((question, index) => (
              <motion.div
                key={index + startIndex} // Adjust key with the page offset
                className={`mb-8 p-8 mt-7 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
                  darkMode
                    ? "bg-gradient-to-r from-gray-800  to-gray-800 hover:bg-green-400"
                    : "bg-gray-200 text-slate-950 hover:bg-gray-300"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6">
                  {index + 1 + startIndex}. {question.question}
                </h2>
                {question.options.map((option, optionIndex) => {
                  const isChecked =
                    answers[index + startIndex].includes(option);
                  const isCorrect = question.correctAnswers.includes(option);
                  const isWrong = submitted && !isCorrect && isChecked;
                  return (
                    <div
                      key={optionIndex}
                      className={`flex items-center mb-4 cursor-pointer group relative ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <input
                        type={question.type === "single" ? "radio" : "checkbox"}
                        id={`q${index}-o${optionIndex}`}
                        name={question.type === "single" ? `q${index}` : ""}
                        checked={isChecked}
                        onChange={() =>
                          handleCheckboxChange(
                            index + startIndex,
                            option,
                            question.type
                          )
                        }
                        className={`mr-4 transform scale-150 cursor-pointer group-hover:bg-pink-500 transition-all duration-200 ${
                          isWrong ? "border-2 border-red-500" : ""
                        }`}
                        disabled={submitted}
                      />
                      <label
                        htmlFor={`q${index}-o${optionIndex}`}
                        className={`text-lg ${isWrong ? "text-red-500" : ""}`}
                      >
                        {option}
                      </label>
                    </div>
                  );
                })}
                {submitted && (
                  <p className="mt-4 text-emerald-400">
                    Correct Answer: {question.correctAnswers.join(", ")}
                  </p>
                )}
              </motion.div>
            ))}

          {/* Pagination Controls */}
          {quizStarted && (
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="py-2 px-4 hover:bg-blue-500 bg-slate-800 text-white rounded-full disabled:bg-gray-400"
                disabled={currentPage === 1}
              >
                <CgChevronLeft size={25} />
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="py-2 px-4  hover:bg-blue-500 bg-slate-800 text-white rounded-full disabled:bg-gray-400"
                disabled={currentPage === totalPages}
              >
                <CgChevronRight size={25} />
              </button>
            </div>
          )}

          {quizStarted && (
            <motion.div className="text-center">
              {!submitted ? (
                <motion.button
                  onClick={handleSubmit}
                  className="mt-4 w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-extrabold text-xl rounded-full hover:from-blue-600 hover:to-purple-600 shadow-lg transform transition-transform hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                >
                  Submit Answers
                </motion.button>
              ) : (
                <div className="mt-8 text-center">
                  <h2
                    className={`text-4xl font-bold ${
                      darkMode ? "text-white" : "text-slate-950"
                    }`}
                  >
                    Your Score: {score} / {mcqQuestions.length}
                  </h2>
                  <motion.button
                    onClick={handleReattempt}
                    className="mt-4 w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-extrabold text-xl rounded-full hover:from-orange-600 hover:to-red-600 shadow-lg transform transition-transform hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    Reattempt Quiz
                  </motion.button>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <motion.div
            className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg w-96 h-48 max-w-sm"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h2 className="text-xl text-black  font-bold mb-4 ">Reminder</h2>
            <p className="text-red-400">
              Please answer all questions before submitting.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {showTimeExceededMessage && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <motion.div
            className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg w-96 h-52 max-w-sm"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h2 className="text-xl text-red-500 font-bold mb-4">
              Time Limit Exceeded
            </h2>
            <p className="text-red-700">
              Go and study hard, Don't cheat yourself!
            </p>
            <button
              onClick={() => setShowTimeExceededMessage(false)}
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
