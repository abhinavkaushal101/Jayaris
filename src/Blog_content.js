import React from "react";
// import blogData from "../data/blogData.json"; // Import your JSON
import "./Blog_content.css";
import { Link, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import logoImage from './image/updatelogo.png';
import Footer from "./components/Footer";

const blogData = [
  {
    img: "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-4.png?w=683",
    title:
      "Hello Techies: Why Cybersecurity is the Unsung Hero of Modern Web Development",
    author: "jayaris_official",
    date: "2d ago",
    tags: [
      "artificial intelligence",
      "business",
      "digital marketing",
      "technology",
    ],
    sections: [
      {
        type: "paragraph",
        content:
          "When we talk about web and app development, the spotlight often falls on the visual brilliance of the interface, the <b>speed</b> of the application, or the <b>innovative features</b> that set it apart. We celebrate the creativity of front-end designs, the power of back-end systems, and the seamless functionality that makes users come back for more. But in this race for innovation, there's a silent protector working behind the scenes — <b>cybersecurity</b>.",
      },
      {
        type: "paragraph",
        content:
          "Cybersecurity rarely gets the attention it deserves, yet it is the <b>foundation on which trust is built</b>. A beautifully designed website is meaningless if it can't protect user data. A fast, responsive app loses its value the moment it becomes vulnerable to an attack. In the digital world, <b>trust is currency</b>, and without robust security, even the most advanced platforms can crumble overnight.",
      },
      {
        type: "heading",
        level: 2,
        content: "Why Cybersecurity Has Become More Crucial Than Ever",
      },
      {
        type: "paragraph",
        content:
          "The internet is growing at an unprecedented pace, and so are <b>cyber threats</b>. Hackers today aren't lone wolves trying to show off their skills; they are part of organized, sophisticated networks capable of breaching systems with precision. From phishing scams to ransomware attacks, even global tech giants with billion-dollar security infrastructures have faced breaches. If it can happen to them, it can happen to anyone.",
      },
      {
        type: "paragraph",
        content:
          "With every line of code we write, we open doors to possibilities — but also <b>potential vulnerabilities</b>. This is why modern developers must adopt a “<b>security-first</b>” mindset. We no longer have the luxury of adding security measures as an afterthought. Every architecture decision, database setup, and API integration must consider security at its core.",
      },
      {
        type: "heading",
        level: 2,
        content: "Cybersecurity Is More Than Just Encryption",
      },
      {
        type: "paragraph",
        content:
          "Many think cybersecurity is about adding a secure socket layer (SSL) certificate or ensuring a website shows that reassuring “lock icon” in the browser. While these steps are essential, cybersecurity runs far deeper; it involves creating a <b>resilient ecosystem</b> that can withstand internal errors, external attacks, and unforeseen technical flaws.",
      },
      {
        type: "paragraph",
        content:
          "It’s about protecting every layer — from the code itself to user sessions, server communications, and data storage. This includes implementing <b>multi-factor authentication</b>, <b>encrypted APIs</b>, <b>regular penetration testing</b>, and <b>proactive vulnerability assessments</b>. The ultimate goal is not just to react to threats but to <b>anticipate and prevent them</b>.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Role of Cybersecurity in User Trust",
      },
      {
        type: "paragraph",
        content:
          "For businesses, a breach isn’t just about the loss of data — it’s the loss of <b>credibility</b>. Users will not forgive a platform that compromises their personal information, no matter how well-designed or feature-rich it may be. Consider the e-commerce industry: a single incident of credit card theft or leaked customer details can result in <b>millions in damages</b> and permanent reputational harm.",
      },
      {
        type: "paragraph",
        content:
          "From fintech apps managing sensitive financial data to healthcare platforms safeguarding patient records, <b>security is the cornerstone of user trust</b>. It’s what transforms a good app into a trusted platform.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Jayaris Approach to Cybersecurity",
      },
      {
        type: "paragraph",
        content:
          "At Jayaris, we view cybersecurity not as a checklist, but as a <b>philosophy</b>. Every website, app, or digital ecosystem we create is built with <b>defense in mind</b>. Our team integrates modern security frameworks into every project stage — from concept and design to deployment and maintenance. We implement <b>state-of-the-art firewalls</b>, <b>advanced encryption protocols</b>, and <b>threat detection systems</b> to ensure our clients’ digital products are not just functional but fortified.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Final Word",
      },
      {
        type: "paragraph",
        content:
          "Cybersecurity is not just a technical measure; it’s a promise — a promise to protect users, data, and the integrity of the internet. It’s the backbone of every digital product that stands the test of time. At Jayaris, we’re committed to building solutions that don’t just work but <b>withstand the test of threats and trust</b>.",
      },
      {
        type: "paragraph",
        content:
          "So, Techies, here’s your challenge: the next time you start a project, <b>think like a guardian</b>. Ask yourself — is what you’re building secure enough to earn and maintain user trust? Because, in the digital age, <b>trust is everything</b>.",
      },
    ],
    relatedArticles: [
      {
        title: "Hello Techies: The Rise of Next-Gen Web Experiences",
        imageUrl:
          "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-1-1.png?w=1024",
      },
      {
        title:
          "Hello Techies: The Evolution of Web 3.0 – A New Digital Era",
        imageUrl:
          "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-3.png?w=683",
      },
    ],
  },
  {
    img: "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-3.png?w=683",
    title: "Hello Techies: The Evolution of Web 3.0 – A New Digital Era",
    author: "jayaris_official",
    date: "2d ago",
    tags: [
      "artificial intelligence",
      "business",
      "digital marketing",
      "technology",
    ],
    sections: [
      {
        type: "paragraph",
        content:
          "The internet is undergoing a profound transformation, and we’re standing on the threshold of a new digital era — Web 3.0. Unlike Web 2.0, which brought us social media, apps, and user-generated content, Web 3.0 is poised to redefine the very foundation of how we interact online. It’s not simply about better technology or faster performance; it’s about creating an internet that is decentralized, intelligent, and user-controlled.",
      },
      {
        type: "paragraph",
        content:
          "In the world of Web 2.0, major corporations and tech giants have owned and controlled data, shaping digital monopolies where users were often reduced to mere products. Web 3.0 is a complete reversal of that model, empowering individuals to own their data, their digital assets, and even their online identities. At the heart of this revolution lies blockchain technology — a transparent, tamper-proof digital ledger that removes the need for centralized intermediaries. This shift gives developers and techies like us an exciting opportunity to build decentralized applications (dApps) that prioritize security, trust, and user control.",
      },
      {
        type: "heading",
        level: 2,
        content: "",
      },
      {
        type: "paragraph",
        content:
          "Another groundbreaking innovation in Web 3.0 is the rise of smart contracts. These are self-executing agreements where terms are embedded directly in code, eliminating the need for middlemen. For developers, learning blockchain-based programming languages like Solidity is becoming as crucial as mastering JavaScript once was. Imagine a digital environment where processes like payments, content ownership, or access control happen automatically and securely, with no room for disputes — that’s the power of Web 3.0.",
      },
      {
        type: "paragraph",
        content:
          "But blockchain is just one part of this shift. Artificial Intelligence (AI) and immersive technologies like Virtual Reality (VR) and Augmented Reality (AR) are converging to create a more personalized and engaging internet experience. AI is set to make digital platforms smarter, capable of adapting to individual users’ needs in real time, while the Metaverse promises a 3D, immersive version of the web, where we don’t just browse but live and interact.",
      },
      {
        type: "heading",
        level: 2,
        content: "",
      },
      {
        type: "paragraph",
        content:
          "At Jayaris, we see Web 3.0 not as a passing trend but as a fundamental transformation of the digital world. We’re already working on concepts that merge blockchain and AI with robust web and app solutions. Our vision is to build platforms that are ready for the next generation of the internet — platforms where security, ownership, and user experience are central.",
      },
      {
        type: "paragraph",
        content:
          "Techies, this is the time to gear up. The digital future belongs to those who are willing to embrace decentralization and master the technologies shaping Web 3.0. Learning blockchain, experimenting with smart contracts, and understanding AI-driven ecosystems will set you apart in the tech world of tomorrow. At Jayaris, we believe this is not just the future — it’s the present unfolding before us. The only question is: are you ready to build with us?.",
      },
      {
        type: "heading",
        level: 2,
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "heading",
        level: 2,
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "heading",
        level: 2,
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
    ],
   relatedArticles: [
      {
        title: "Hello Techies: The Rise of Next-Gen Web Experiences",
        imageUrl:
          "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-1-1.png?w=1024",
      },
      {
        title:
          "Hello Techies: The Evolution of Web 3.0 – A New Digital Era",
        imageUrl:
          "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-3.png?w=683",
      },
    ],
  },
  {
    img: "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-2.png?w=1024",
    title: "Hello Techies: Why AI Will Revolutionize Web & App Development",
    author: "jayaris_official",
    date: "2d ago",
    tags: [
      "artificial intelligence",
      "business",
      "digital marketing",
      "technology",
    ],
    sections: [
      {
        type: "paragraph",
        content:
          "The world of web and app development is undergoing one of the most exciting transformations in its history. While coding has always been at the heart of innovation, the rise of Artificial Intelligence (AI) is redefining the way developers approach their craft. It’s no longer just about writing cleaner code or building functional interfaces — it’s about creating <b> intelligent, self-learning systems</b> that adapt to user needs in real time.",
      },
      {
        type: "paragraph",
        content:
          "AI is already reshaping how developers work. Tools like GitHub Copilot and AI-based design platforms are making it possible to accelerate the coding process by suggesting improvements, detecting bugs, and even generating fully functional code snippets based on natural language prompts. Instead of spending hours fixing repetitive errors or structuring standard templates, developers now have more time to focus on creativity, design thinking, and solving complex problems. In essence,<b> AI is becoming a trusted co-pilot for the modern techie.</b>",
      },
      {
        type: "heading",
        level: 2,
        content: "",
      },
      {
        type: "paragraph",
        content:
          "But AI’s impact doesn’t stop at development efficiency. It’s revolutionizing <b>user experience (UX)</b> by enabling highly personalized, data-driven digital interactions. Think of platforms like Netflix, where recommendations are tailored specifically to your preferences, or Spotify, where playlists are curated to match your mood and habits. This level of real-time personalization is no longer limited to big tech giants — thanks to AI frameworks and APIs, developers can now bring this experience to almost any web or mobile application.",
      },
      {
        type: "paragraph",
        content:
          "Security is another area where AI is proving indispensable. Traditional firewalls and security measures are no longer sufficient against evolving cyber threats. AI-powered systems can analyze unusual patterns, predict potential vulnerabilities, and respond to attacks in milliseconds. For developers, this means building smarter, more resilient applications that can defend themselves even when human intervention isn’t possible.",
      },
      {
        type: "heading",
        level: 2,
        content: "",
      },
      {
        type: "paragraph",
        content:
          "There is, of course, a lot of buzz around low-code and no-code platforms, which claim to simplify app development for non-programmers. While these tools are useful for small-scale projects, the real magic happens when techies with strong coding skills combine their expertise with <b>AI-powered systems. AI isn’t replacing developers; it’s amplifying their capabilities.</b> Those who understand the logic and structure of code will always have a competitive edge because AI can generate solutions, but it takes a skilled developer to make them efficient, scalable, and reliable.",
      },
      {
        type: "paragraph",
        content:
          "At <b>Jayaris,</b> we see AI as the foundation of the next era of web and app development. Our approach already integrates AI-driven UI/UX testing, predictive performance optimization, and automated debugging to ensure that every product we deliver is faster, smarter, and future-ready. For us, AI isn’t just a tool — it’s a partner in innovation, helping us bring clients’ visions to life with unparalleled precision.",
      },
      {
        type: "heading",
        level: 2,
        content: "",
      },
      {
        type: "paragraph",
        content:
          "To all the techies reading this: <b>AI is here to empower you, not replace you.</b> The developers who embrace AI today will not only stay relevant but also become pioneers of tomorrow’s digital products. The future belongs to those who are ready to blend human creativity with machine intelligence — and that future starts now.",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "heading",
        level: 2,
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "heading",
        level: 2,
        content: "The Final Word",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
    ],
   relatedArticles: [
      {
        title: "Hello Techies: The Rise of Next-Gen Web Experiences",
        imageUrl:
          "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-1-1.png?w=1024",
      },
      {
        title:
          "Hello Techies: The Evolution of Web 3.0 – A New Digital Era",
        imageUrl:
          "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-3.png?w=683",
      },
    ],
  },
  {
    img: "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-1-1.png?w=1024",
    title: "Hello Techies: The Rise of Next-Gen Web Experiences",
    author: "jayaris_official",
    date: "2d ago",
    tags: [
      "artificial intelligence",
      "business",
      "digital marketing",
      "technology",
    ],
    sections: [
      {
        type: "paragraph",
        content:
          "The digital landscape is evolving faster than ever, and Techies like you are at the heart of this transformation. Web development is no longer just about websites — it’s about creating immersive, next-gen experiences that captivate users and drive real-world impact.",
      },
      {
        type: "paragraph",
        content:
          "Users no longer want static pages; they crave interactive, dynamic, and personalized experiences. Features like real-time updates, AI-driven content, and voice-enabled interfaces are becoming the new normal. At Jayaris, we believe that every web solution should feel alive, intuitive, and tailored for the user — because that’s what truly drives engagement.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Power of Progressive Web Apps (PWAs)",
      },
      {
        type: "paragraph",
        content:
          "PWAs are game changers. They combine the best of web and mobile apps, offering fast loading speeds, offline access, and a native app-like feel — without forcing users to download anything. For techies, mastering PWAs is like holding the key to the future of mobile-first businesses.",
      },
      {
        type: "paragraph",
        content:
          "Platforms like Webflow or Bubble promise speed, but true innovation requires techies who understand code at its core. Low-code solutions can be efficient for small projects, but custom-built systems give businesses the freedom to scale, optimize, and innovate — and that’s where developers shine.",
      },
      {
        type: "heading",
        level: 2,
        content: "Security-First Mindset",
      },
      {
        type: "paragraph",
        content:
          "In 2025, a site’s success is not just about how it looks or performs, but how secure it is. From SSL certificates to advanced firewalls and encrypted APIs, cybersecurity is now a fundamental part of every techie’s job.",
      },
      {
        type: "paragraph",
        content:
          "At Jayaris, we build global-standard web and app solutions with cutting-edge frameworks, scalable architecture, and a design-first philosophy. Our goal is simple:",
      },
      {
        type: "heading",
        level: 2,
        content:
          "“To help businesses and techies create digital products that don’t just work, but WOW.”",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "heading",
        level: 2,
        content: "Final Word for Techies",
      },
      {
        type: "paragraph",
        content:
          "The future is yours to build. Embrace new tools, focus on speed, security, and seamless design — and remember that technology is only as powerful as the minds shaping it. Let’s lead this revolution, one code at a time.",
      },
      {
        type: "heading",
        level: 2,
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
    ],
   relatedArticles: [
      {
        title: "Hello Techies: The Rise of Next-Gen Web Experiences",
        imageUrl:
          "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-1-1.png?w=1024",
      },
      {
        title:
          "Hello Techies: The Evolution of Web 3.0 – A New Digital Era",
        imageUrl:
          "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-3.png?w=683",
      },
    ],
  },
  {
    img: "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris.png?w=1024",
    title:
      "The Future of Web & App Development: Why Techies Must Embrace Innovation",
    author: "jayaris_official",
    date: "2d ago",
    tags: [
      "artificial intelligence",
      "business",
      "digital marketing",
      "technology",
    ],
    sections: [
      {
        type: "paragraph",
        content:
          "In today’s digital-first world, web and app development is no longer just about coding—it’s about engineering seamless user experiences that blend design, performance, and intelligence. At Jayaris, we believe that every line of code we write has the power to transform businesses, shape brands, and bring ideas to life.",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "heading",
        level: 2,
        content: "Why Innovation is Non-Negotiable",
      },
      {
        type: "paragraph",
        content:
          "Technology is evolving at lightning speed. Frameworks that were cutting-edge yesterday might already feel outdated today. For techies like us, staying ahead means embracing:",
      },
      {
        type: "paragraph",
        content: `<b>Scalable Architectures:</b> Building solutions that adapt to future growth. <br/>
            <b>Intuitive UI/UX:</b> Because even the best code fails without a user-friendly experience.<br/>
            <b>AI-Driven Development:</b> Automating repetitive tasks and leveraging intelligent design systems.`,
      },
      {
        type: "heading",
        level: 2,
        content: "The Jayaris Approach",
      },
      {
        type: "paragraph",
        content:
          "At Jayaris, we don’t just develop websites or apps — we engineer digital ecosystems. Every project we take on is a challenge to push the limits of creativity and technology. Whether it’s building a robust e-commerce platform, designing interactive dashboards, or creating futuristic mobile apps, our mission is clear:",
      },
      {
        type: "paragraph",
        content:
          "“Empower businesses and delight users with code that speaks innovation.”",
      },
      {
        type: "heading",
        level: 2,
        content: "What Techies Should Focus On Next",
      },
      {
        type: "paragraph",
        content: `For tech enthusiasts looking to upskill, here’s where you should invest your energy:`,
      },
      {
        type: "paragraph",
        content: `<b>AI & Machine Learning Integration – </b> Be it chatbots or predictive analytics, AI is the backbone of modern apps.<br/>
        <b>Cross-Platform Frameworks –</b> Tools like Flutter and React Native can significantly reduce development time.<br/>
        <b>Cybersecurity & Web Protection –</b> A great product is incomplete if it’s not secure.<br/>
        <b>Performance Optimization –</b> Because speed isn’t just a feature, it’s the foundation of user experience.`,
      },
      {
        type: "heading",
        level: 2,
        content: "Final Thoughts",
      },
      {
        type: "paragraph",
        content:
          "Techies, the future belongs to those who innovate fearlessly. At Jayaris, we’re committed to building the digital future — one code at a time. Whether you’re a fellow developer, a business owner, or a curious tech enthusiast, let’s shape the future of technology together.",
      },
      {
        type: "heading",
        level: 2,
        content: "",
      },
      {
        type: "paragraph",
        content:
          "",
      },
      {
        type: "paragraph",
        content:
          "",
      },
    ],
 relatedArticles: [
      {
        title: "Hello Techies: The Rise of Next-Gen Web Experiences",
        imageUrl:
          "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-1-1.png?w=1024",
      },
      {
        title:
          "Hello Techies: The Evolution of Web 3.0 – A New Digital Era",
        imageUrl:
          "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-3.png?w=683",
      },
    ],
  },
];

function Blog_content() {
  const { BlogContent } = useParams();
  const blog = blogData[BlogContent];
  if (!blog) {
    return <div>Not Found</div>;
  }
  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    <br/>

    <div className="app-container">
      {/* Sidebar - Left Section */}
      <div className="sidebar">
        <div className="sidebar-header">
          <span className="reader-icon"></span>
          <h2 className="reader-title">Reader</h2>
        </div>
        <p className="sidebar-subtitle">Keep up with your interests</p>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#">
                <span className="icon"></span> Recent
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"></span> Discover
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"></span> Likes
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"></span> Conversations
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"></span> Lists
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon"></span> Tags
              </a>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <a href="#">
            <span className="icon"></span> Manage Subscriptions
          </a>
        </div>
      </div>

      {/* Main Content - Right Section */}
      <div className="main-content">
        <div className="header-bar">
          <Link to="/">
            <button className="back-button">← Back</button>
          </Link>
          <div className="header-actions">
            <span className="reader-icon-top"></span>
            <span className="question-mark-icon"></span>
            <span className="bell-icon"></span>
            <span className="user-avatar">@jayarisofficial</span>
          </div>
        </div>

        {/* Loop through multiple blog objects */}
        {/* {blogData.map((blog, blogIndex) => ( */}
        <div className="blog-post">
          {/* Blog Header */}
          <div className="post-meta">
            <img
              src={logoImage}
              alt="Logo"
              className="channel-logo"
            />
            <div className="author-info">
              <span className="author-name">{blog.author}</span>
              <span className="post-date">{blog.date}</span>
              <div className="subscribe-button">+ Subscribe</div>
            </div>
          </div>

          {/* Blog Title */}
          <h1 className="post-title">{blog.title}</h1>

          {/* Tags */}
          <div className="tags-container">
            {/* {blog.tags.map((tag, index) => ( */}
            <span className="tag">{blog.tags}</span>
            {/* ))} */}
          </div>

          {/* Main Image */}
          <img src={blog.img} alt="Main Blog" className="main-blog-image" />

          {/* Blog Sections */}
          <div className="post-body">
            {blog.sections.map((section, index) => {
              if (section.type === "paragraph") {
                return (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  ></p>
                );
              } else if (section.type === "heading") {
                const HeadingTag = `h${section.level}`;
                return <HeadingTag key={index}>{section.content}</HeadingTag>;
              }
              return null;
            })}
          </div>

          {/* Actions */}
          <div className="post-actions">
            <span className="action-item">
              <span className="icon"></span> Share
            </span>
            <span className="action-item">
              <span className="icon"></span> Comment{" "}
              <span className="count">1</span>
            </span>
            <span className="action-item">
              <span className="icon"></span>
            </span>
          </div>

          {/* Comments */}
          <div className="comments-section">
            <p className="no-comments">NO COMMENTS — add the first</p>
            <a href="#" className="follow-conversation">
              Follow conversation
            </a>
            <div className="add-comment">
              <span className="comment-avatar"></span>
              <input type="text" placeholder="Add a comment..." />
            </div>
          </div>

          {/* Related Articles */}
          <div className="more-in-jayaris">
            <h2>MORE IN JAYARIS</h2>
            <div className="related-articles">
              {blog.relatedArticles.map((article, index) => (
                <div key={index} className="article-card">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="article-image"
                  />
                  <p className="article-category">JAYARIS</p>
                  <h3 className="article-title">{article.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Blog_content;
