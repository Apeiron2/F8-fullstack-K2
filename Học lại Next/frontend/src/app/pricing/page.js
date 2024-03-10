export async function generateMetadata({ params }) {
  return {
    title: "Pricing",
    description: "Upgrade your Mindmaps Flow account",
  };
}

// Define the pricing plans of the web mindmap app
const plans = [
  {
    name: "Free",
    price: "$0/month",
    features: [
      "Create and manage 3 mindmaps",
      "Design and customize mindmaps",
      "Export mindmaps to PDF",
      "Share mindmaps via email",
    ],
    icon: "fas fa-hand-holding-heart",
  },
  {
    name: "Pro",
    price: "$9.99/month",
    features: [
      "Create and manage 10 mindmaps",
      "Design and customize mindmaps",
      "Export mindmaps to multiple formats",
      "Share mindmaps via multiple channels",
      "Sync mindmaps with cloud",
    ],
    icon: "fas fa-rocket",
  },
  {
    name: "Premium",
    price: "$19.99/month",
    features: [
      "Create and manage unlimited mindmaps",
      "Design and customize mindmaps",
      "Export mindmaps to multiple formats",
      "Share mindmaps via multiple channels",
      "Sync mindmaps with cloud",
      "Priority support 24/7",
    ],
    icon: "fas fa-crown",
  },
];

// Define the component for the pricing page
export default function Pricing() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-4">Pricing</h1>
        <p className="text-center my-4">
          Choose the plan that suits your needs and start creating amazing
          mindmaps today.
        </p>
        <div className="row">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card card-pricing">
                <div className="card-header">
                  <i className={plan.icon}></i>
                  <h5 className="card-title">{plan.name}</h5>
                  <p className="card-text">{plan.price}</p>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="list-group-item">
                        <i className="fas fa-check"></i> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-primary btn-block">Choose</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
