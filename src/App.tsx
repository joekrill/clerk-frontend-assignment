import { ProfileCarousel } from "./components/ProfileCarousel/ProfileCarousel";
import { randomUserPages } from "./data";

const testProfiles = randomUserPages[0].results.map(
  ({ name, email, location, phone, picture, login }) => ({
    id: login.uuid,
    name: `${name.title} ${name.first} ${name.last}`,
    email,
    location: `${location.city}, ${location.state}, ${location.country}`,
    phoneNumber: phone,
    pictureUrl: picture.medium,
  }),
);

function App() {
  return (
    <div className="flex h-dvh w-full flex-col items-stretch p-8">
      <h1 className="mb-8 text-4xl font-semibold sm:text-5xl">My Clerks</h1>
      <div className="flex max-h-96 w-full flex-1">
        <ProfileCarousel profiles={testProfiles} />
      </div>
    </div>
  );
}

export default App;
