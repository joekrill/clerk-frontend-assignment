import { useInfiniteQuery } from "@tanstack/react-query";

/**
 * The structure of an individual profile item returned by the API.
 */
interface FetchProfileItem {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  phone: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

/**
 * The structure of the response from the RandomeUser API
 */
interface FetchProfilesResult {
  results: FetchProfileItem[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

interface FetchProfilesOptions {
  pageParam: number;
  pageSize: number;
  seed: string;
}

const fetchProfiles = async ({
  seed,
  pageSize,
  pageParam,
}: FetchProfilesOptions) => {
  const url = new URL("https://randomuser.me/api/");
  url.searchParams.set("inc", "login,name,location,email,phone,picture");
  url.searchParams.set("page", String(pageParam));
  url.searchParams.set("results", String(pageSize));
  url.searchParams.set("seed", seed);
  const res = await fetch(url);
  return res.json() as unknown as FetchProfilesResult;
};

export const useProfilesQuery = ({
  seed = "clerk",
  pageSize = 10,
}: Partial<Omit<FetchProfilesOptions, "pageParam">> = {}) =>
  useInfiniteQuery({
    queryKey: ["profiles"],
    queryFn: ({ pageParam }) => fetchProfiles({ seed, pageSize, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.info.page + 1,
  });
