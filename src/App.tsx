import { useMemo } from "react";
import { ColorSelect } from "./components/ColorSelect/ColorSelect";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import {
  ProfileCarousel,
  ProfileWithId,
} from "./components/ProfileCarousel/ProfileCarousel";
import { useLocalStorageValue } from "./hooks/useLocalStorageValue/useLocalStorageValue";
import { useProfilesQuery } from "./hooks/useProfilesQuery/useProfilesQuery";

interface AppProps {
  /**
   * Determines how soon to preload the next page of profiles. When there are
   * less than or equal to this nunmber of profiles available to scroll to the
   * right, the next page will be loaded.
   */
  loadNextPageBuffer: number;
}

function App({ loadNextPageBuffer = 5 }: AppProps) {
  const [color, setColor] = useLocalStorageValue("profile_bg_color");
  const result = useProfilesQuery();

  // Combines and transforms the results of all current profiles query pages
  // into a single array with a structure matching the properties needed
  // by the `ProfileCard` component.
  const profiles = useMemo(
    () =>
      result.data?.pages.reduce((all, page) => {
        page.results.forEach(
          ({ name, phone, picture, login, email, location }) => {
            all.push({
              email,
              id: login.uuid,
              location: [location.city, location.state, location.country]
                .filter((v) => !!v)
                .join(","),
              phoneNumber: phone,
              pictureUrl: picture.medium,
              name: [name.title, name.first, name.last]
                .filter((v) => !!v)
                .join(" "),
            });
          },
        );
        return all;
      }, [] as ProfileWithId[]) ?? [],
    [result.data],
  );

  return (
    <div className="flex h-dvh w-full flex-col items-center p-8 text-center">
      <h1 className="mb-4 text-4xl font-semibold sm:text-5xl">My Clerks</h1>
      <div
        aria-busy={result.isFetching}
        className={`fixed right-10 top-5 size-8 transition-opacity duration-500 ${result.isFetching ? "opacity-100" : "opacity-0"}`}
      >
        <LoadingSpinner color={color} />
      </div>
      <label className="mb-4 flex items-center justify-center gap-2">
        Card background color:
        <ColorSelect color={color ?? undefined} onColorChange={setColor} />
      </label>
      <div className="flex max-h-96 w-full flex-1">
        <ProfileCarousel
          profiles={profiles}
          backgroundColor={color ?? undefined}
          onViewChange={(_, endIndex) => {
            if (result.isFetchingNextPage || !result.hasNextPage) {
              return;
            }
            if (endIndex + loadNextPageBuffer >= profiles.length) {
              void result.fetchNextPage();
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
