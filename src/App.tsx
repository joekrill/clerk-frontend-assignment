import "./App.css";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <div className="flex h-screen w-full flex-col items-stretch">
      <h1 className="my-8 text-5xl font-semibold">My Clerks</h1>
      <div className="mx-auto my-4 flex-1 items-center">
        <ProfileCard
          name="Karl Johnson"
          email="karl.johnson@example.com"
          location="New York, New York, United States"
          phoneNumber="(268) 420-4900"
          pictureUrl="https://randomuser.me/api/portraits/med/men/6.jpg"
        />
      </div>
    </div>
  );
}

export default App;
