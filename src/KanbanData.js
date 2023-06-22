import { v4 as uuidv4 } from "uuid";

// import "" from "../../../../Recruitment/india."""

export const ToDoData = [
  {
    id: "1",
    Status: "To-do",
    priority: "Low",
    title: "Brainstorming",
    content:"Brainstorming brings team members' diverse experience into play. ",
    due_Date: "25-May-2020",
    comments:12,
    files:0,
  },
  {
    id: "2",
    Status: "To-do",
    priority: "High",
    title: "Research",
    content:"User research helps you to create an optimal product for users.",
    due_Date: "26-May-2020",
    comments:10,
    files:3,
  },
  {
    id: "3",
    Status: "To-do",
    priority: "High",
    title: "Wireframes",
    content:"Low fidelity wireframes include the most basic content and visuals.",
    due_Date: "27-May-2020",
    comments:12,
    files:0,
  },
  {
    id: "4",
    Status: "To-do",
    priority: "Low",
    title: "Handle Door Specs",
    content:"Low fidelity wireframes include the most basic content and visuals.",
    due_Date: "27-May-2020",
    comments:12,
    files:0,
  },
];
export const OnProgressData = [
  {
    id: "5",
    Status: "In Progress",
    priority: "Low",
    title: "Onboarding Illustrations",
    content:"",
    imageUrl:'./contentImg/image1.png',
    due_Date: "23-Aug-2020",
    comments:14,
    files:0,
  },
  {
    id: "6",
    Status: "In Progress",
    priority: "Low",
    title: "Moodboard",
    content:"",
    imageUrl:'./contentImg/image2.png',
    due_Date: "05-Jan-2021",
    comments:9,
    files:10,
  },
];
export const DoneData = [
  {
    id: "7",
    Status: "Done",
    priority: "Completed",
    title: "Mobile App Design",
    content:"",
    imageUrl:'./contentImg/image3.png',
    due_Date: "23-Aug-2020",
    comments:12,
    files:15,
  },
  {
    id: "8",
    Status: "Done",
    priority: "Completed",
    title: "Design System",
    content:"It just needs to adapt the UI from what you did before ",
    due_Date: "05-Jan-2021",
    comments:12,
    files:15,
  },
];

export const columnsFromBackend = {
  [uuidv4()]: {
    title: "To Do",
    items: ToDoData,
  },
  [uuidv4()]: {
    title: "On Progress",
    items: OnProgressData,
  },
  [uuidv4()]: {
    title: "Done",
    items: DoneData,
  },
};
// Note id of each card of each col must be diff otherwise it will not work