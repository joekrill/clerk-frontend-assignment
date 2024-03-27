import { ColorSelect } from "./components/ColorSelect/ColorSelect";
import { ProfileCarousel } from "./components/ProfileCarousel/ProfileCarousel";
import { randomUserPages } from "./data";
import { useLocalStorageValue } from "./hooks/useLocalStorageValue/useLocalStorageValue";

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
  const [color, setColor] = useLocalStorageValue("profile_bg_color");

  return (
    <div className="flex h-dvh w-full flex-col items-center p-8 text-center">
      <h1 className="mb-4 text-4xl font-semibold sm:text-5xl">My Clerks</h1>
      <label className="mb-4 flex items-center justify-center gap-2">
        Card background color:
        <ColorSelect color={color ?? undefined} onColorChange={setColor} />
      </label>
      <div className="flex max-h-96 w-full flex-1">
        <ProfileCarousel
          profiles={testProfiles}
          backgroundColor={color ?? undefined}
        />
      </div>
    </div>
  );
}

export default App;
