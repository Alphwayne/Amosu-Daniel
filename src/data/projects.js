// src/data/projects.js

export const projects = [
  // 🧪 BEGINNER PROJECTS
  {
    category: "Beginner",
    title: "Basketball Scoreboard",
    image: "basketball-mage.jpg",
    liveLink: "https://basketball-score-view.vercel.app/",
    description: "A digital scoreboard built to track basketball scores interactively.",
    tools: ["HTML", "CSS", "JavaScript"],
    codeSnippet: `interval = setInterval(() => 
       if (!isPaused) {
            timer++;
        const minutes = Math.floor(timer / 60);
      `,
  },
  
  {
    category: "Beginner",
    title: "Simple Calculator Test",
    image: "cal-mage.jpg",
    liveLink: "https://calculator-pink-two-86.vercel.app/",
    description: "A basic calculator performing fundamental arithmetic operations.",
    tools: ["HTML", "CSS", "JavaScript"],
    codeSnippet: `
    function calculate(a, b, op)
     {\n  return op === '+' ?
      a + b : a - b;\n}`,
  },

  
  {
    category: "Beginner",
    title: "Quiz Web App",
    image: "quiz-mage.jpg",
    liveLink: "https://quiz-pop-five.vercel.app/",
    description: "A simple interactive quiz app with score tracking and UI feedback.",
    tools: ["HTML", "CSS", "JavaScript"],
    codeSnippet: `
    const answer = 
    'B';\nif (selected === answer) 
    score++;`,
  },

  {
    category: "Beginner",
    title: "Recipe Finder Web App",
    image: "recipe-mage.jpg",
    liveLink: "https://recipe-finder-one-delta.vercel.app/",
    description: "Fetches recipes from an API based on user input for meal planning.",
    tools: ["HTML", "CSS", "JS", "Edamam API"],
    codeSnippet: `
    fetch('https://api.edamam.com/...').
    then(res =>
       res.json())`,
  },
  {
    category: "Beginner",
    title: "TED TRANQUIL THREADS",
    image: "ted-mage.jpg",
    liveLink: "https://ted-tranquil-threads.vercel.app/",
    description: "A prototype e-commerce brand site for modern clothing and fashion.",
    tools: ["HTML", "CSS", "JavaScript"],
    codeSnippet: `
    products.forEach(item => 
      renderProductCard(item));`,
  },

  {
    category: "Beginner",
    title: "To-Do List Web App",
    image: "list-mage.jpg",
    liveLink: "https://to-do-list-beryl-rho-99.vercel.app/",
    description: "A task tracking tool that lets users add, delete, and mark tasks.",
    tools: ["HTML", "CSS", "JavaScript"],
    codeSnippet: `
    tasks.push({ title:
     input.value, done: 
     false });`,
  },
  {
    category: "Beginner",
    title: "Weather Forecast Web App",
    image: "weather-mage.jpg",
    liveLink: "https://weather-forecast-seven-inky.vercel.app/",
    description: "A weather app that shows forecasts using OpenWeatherMap API.",
    tools: ["HTML", "CSS", "JS", "OpenWeather API"],
    codeSnippet: `
    fetch('api.openweathermap.org/data').
    then(...)`,
  },

  // 🚀 ADVANCED PROJECTS

  {
    category: "Advanced",
    title: "Food Fusion ",
    image: "fusion-mage.png",
    liveLink: "https://food-fusion-tau.vercel.app",
    description: "Display foods actively available at cafetrias and can be ordered.",
    tools: ["Html", "CSS Modules", "Javascript"],
    codeSnippet: `
    const foodItems = [
    { name: 'Sandwich', status: 'available', image: 'sandwich.jpg' },
    { name: 'Salad', status: 'soon', image: 'salad.jpg' },
    { name: 'Pizza', status: 'not-available', image: 'pizza.jpg' },
    // Add more food items as needed

    button.title = title;
    button.classList.add('status-button', color.toLowerCase());
    return button;
}
    })`,
  },


  {
    category: "Advanced",
    title: "SCSI (Smilenation Child Support Initiative)",
    image: "scs-mage.png",
    liveLink: "https://smilenation-sci.org",
    description: "A full-fledged donation and outreach platform for child support and welfare.",
    tools: ["React", "CSS Modules", "Firebase"],
    codeSnippet: `
    onDonate(amount) => firebase.push({ user, amount 
    document.addEventListener("DOMContentLoaded", 
    function () {
    const dropdownToggle = document.querySelector
        event.preventDefault(); // 
        Prevent default link action
        dropdownContent.classList.toggle("show");
    })`,
  },


  {
    category: "Advanced",
    title: "Roadman AI (Chatbot)",
    image: "roadman-mage.png",
    liveLink: "https://your-link.com",
    description: "A chatbot interface with conversational AI logic built in-browser.",
    tools: ["React", "node.js"],
    codeSnippet: `
    function getBotReply(userInput) 
    { return aiModel.process(userInput); 
     const recognition = new SpeechRecognition();
    recognition.lang = 'en-GB';
      console.log('Roadman AI is listening...')
       'Listening...' : 'Chat to Roadman...'}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter
        disabled={isListening || isLoading}
    }`,
  },



  {
    category: "Advanced",
    title: "KKON Coverage Checker",
    image: "kkon-mage.png",
    liveLink: "https://kkon-coverage-check.vercel.app/",
    description: "A geo-coverage checking tool that verifies service availability by coordinates.",
    tools: ["Node.js", "Turf.js", "Express"],
    codeSnippet: `
    turf.booleanPointInPolygon(userLocation, 
    router.post("/check-coverage", async (req, res) => {
  const { address, lat, lng } = req.body;
        if (turf.booleanPointInPolygon(userPoint,
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "SB-1.1"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          3.452876,
          6.425512000000001
    coverageArea)`
  },

  // NEW ADVANCED PROJECTS 
  {
    category: "Advanced",
    title: "Payment Refund Center",
    image: "payment-refund.png",
    liveLink: "https://payment-refund.fob.ng/",
    description: "Built a refund system where customers submit details and the data is sent to an API for processing, streamlining refund handling.",
    tools: ["React", "Node.js", "API integration"],
    codeSnippet: `
    function RefundForm() {
  const [details, setDetails] = useState({ name: "", email: "", amount: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/refund", details);
      alert("Refund request submitted!");
    } catch (err) {
      console.error(err);
      alert("Error submitting refund.");
    }
  };
    }`
  },

  {
  category: "Advanced",
  title: "KKONTECH New Website",
  image: "kkon-new-sitee.png",
  liveLink: "https://kkon-new-site.vercel.app/",
  description: "A modern rebuild of the KKONTech website featuring a sleek, responsive UI, a smart coverage checker that uses OpenStreetMap for address lookup and geocoding to match user coordinates against internal coverage data, plus an interactive blog with likes and comments. Designed for performance, scalability, and a smooth user experience.",
  tools: ["React", "Node.js", "Express", "Geocoding", "OpenStreetMap", "REST APIs"],
  codeSnippet: `
  const checkCoverage = async (address) => {
    // Convert address to coordinates
    const geoRes = await fetch
    const geoData = await geoRes.json();
    const { lat, lon } = geoData[0];

    // Check coordinates against internal coverage API
    const response = await fetch(\`/api/coverage?lat=\${lat}&lon=\${lon}\`);
    const data = await response.json();
    return data.isCovered ? "Service Available" : "Out of Coverage Area";
  };
  `
}


];