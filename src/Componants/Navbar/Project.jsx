import "./Project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // ← React GitHub Icon

const projects = [
  {
    title: "Number Shifting Game",
    description: [
      "A console-based logic puzzle built using C++",
      "Practices number manipulation and logical loops",
    ],
    image: "number-shift.png",
    tags: ["C++"],
    github: "https://github.com/sanikadesai76/CPP-Project",
  },
  {
    title: "YouTube Clone",
    description: [
      "Frontend-only YouTube clone using HTML, CSS, & JavaScript",
      "Responsive UI with homepage and video layout",
    ],
    image: "youtube-clone.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sanikadesai76/Youtube-Clone",
  },
  {
    title: "Emotion Detection Web App",
    description: [
      "Detects emotions using a Python ML model",
      "Provide Letter with Solutions",
    ],
    image: "emotion-detect.png",
    tags: ["ReactJS", "Spring Boot", "Python"],
    github: "https://github.com/sanikadesai76/Hackthone_Team_Coders",
  },
  {
    title: "File Storage & Sharing App",
    description: [
      "Serverless web application for secure file upload and sharing",
      "Built with AWS S3, Lambda, API Gateway, and Cognito",
      "Features secure file storage with pre-signed URLs for downloads",
    ],
    image: "https://www.proofhub.com/articles/wp-content/uploads/2024/02/14-Best-File-Sharing-Apps-for-Businesses-in-2024.jpg",
    tags: ["AWS S3", "AWS Lambda", "API Gateway", "AWS Cognito", "JavaScript"],
    github: "https://github.com/sanikadesai76/File-Storage.git",
    liveDemo: "https://your-live-demo-url.com", // Add your actual live demo URL here
  },
];

const Project = () => {
  const resolvePublicAsset = (assetPath) => {
    if (!assetPath) return import.meta.env.BASE_URL + "vite.svg";
    if (/^https?:\/\//i.test(assetPath)) return assetPath; // absolute URL
    return assetPath.startsWith("/")
      ? assetPath
      : import.meta.env.BASE_URL + assetPath;
  };

  // Convert an SVG file from public/ into a PNG data URL via canvas
  const convertSvgToPngDataUrl = async (svgPublicPath, width = 740, height = 400) => {
    try {
      const response = await fetch(resolvePublicAsset(svgPublicPath));
      const svgText = await response.text();
      const svgBlob = new Blob([svgText], { type: "image/svg+xml" });
      const svgUrl = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.crossOrigin = "anonymous";
      const dataUrl = await new Promise((resolve, reject) => {
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            URL.revokeObjectURL(svgUrl);
            reject(new Error("Canvas context unavailable"));
            return;
          }
          ctx.fillStyle = "#0d1117";
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          const url = canvas.toDataURL("image/png");
          URL.revokeObjectURL(svgUrl);
          resolve(url);
        };
        img.onerror = reject;
        img.src = svgUrl;
      });
      return dataUrl;
    } catch (e) {
      return resolvePublicAsset("vite.svg");
    }
  };
  return (
    <section className="projects-section">
      <h2 className="project-title">Technical Projects</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img
              src={resolvePublicAsset(proj.image)}
              alt={proj.title}
              className="project-image"
              onError={async (e) => {
                const imgEl = e.currentTarget;
                // First fallback: try SVG directly
                if (!imgEl.dataset.triedSvg) {
                  imgEl.dataset.triedSvg = "1";
                  imgEl.src = resolvePublicAsset("file-storage.svg");
                  return;
                }
                // Second fallback: generate PNG from SVG via canvas
                if (!imgEl.dataset.triedCanvas) {
                  imgEl.dataset.triedCanvas = "1";
                  const url = await convertSvgToPngDataUrl("file-storage.svg", 740, 400);
                  imgEl.src = url;
                  return;
                }
                // Final fallback
                imgEl.onerror = null;
                imgEl.src = resolvePublicAsset("vite.svg");
              }}
            />
            <h3>{proj.title}</h3>
            <ul className="project-desc">
              {proj.description.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            <div className="project-tags">
              {proj.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-buttons">
              <a
                href={proj.github}
                className="code-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18} /> Code
              </a>
              {proj.liveDemo && (
                <a
                  href={proj.liveDemo}
                  className="demo-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
