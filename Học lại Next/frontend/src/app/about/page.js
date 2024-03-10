import Link from "next/link";
export async function generateMetadata({ params }) {
  return {
    title: "About",
    description: "About Mindmaps Flow's Team",
  };
}

// Define the component for the About page
export default function About() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-4">About</h1>
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src="/images/profile.jpg"
              alt="Profile picture"
              width={600}
              className="rounded-3"
            />
          </div>
          <div className="col-md-6 mb-4" style={{ textAlign: "justify" }}>
            <h2>Hi, I'm Apeiron</h2>
            <p>
              I'm a web developer and a mind mapping enthusiast. I created this
              web mindmap app to help people organize their thoughts, ideas, and
              projects in a visual way.
            </p>
            <p>
              I believe that mind mapping is a powerful tool for learning,
              brainstorming, problem-solving, and planning. It can also boost
              your creativity, memory, and productivity.
            </p>
            <p>
              With this web mindmap app, you can create and manage mindmaps
              online, without installing any software or signing up for any
              service. You can also customize your mindmaps with various colors,
              shapes, icons, and media. You can export your mindmaps to
              different formats and share them with others.
            </p>
            <p>
              I hope you enjoy using this web mindmap app as much as I enjoyed
              creating it. If you have any feedback, questions, or suggestions,
              please feel free to contact me.
            </p>
            <Link href="/contact" className="btn btn-outline-primary">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
