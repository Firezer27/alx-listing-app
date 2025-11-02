import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function HomePage() {
  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">ALX Listing App</h1>

      <div className="flex justify-center mb-4">
        <Card
          title="Modern Apartment"
          description="A cozy apartment with 2 bedrooms and great city views."
          image="/assets/placeholder.jpg"
        />
      </div>

      <div className="flex justify-center">
        <Button
          label="Book Now"
          onClick={() => alert("Booking feature coming soon!")}
        />
      </div>
    </main>
  );
}
