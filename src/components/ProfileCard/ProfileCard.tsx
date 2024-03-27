export interface ProfileCardProps {
  email: string;
  location: string;
  name: string;
  phoneNumber: string;
  pictureUrl: string;
}

export const ProfileCard = ({
  email,
  location,
  name,
  phoneNumber,
  pictureUrl,
}: ProfileCardProps) => (
  <article className="flex w-full max-w-sm flex-col items-center rounded-lg border border-gray-200 bg-white p-6 pb-10 text-center shadow">
    <img
      className="mb-6 size-24 min-h-24 min-w-24 rounded-full shadow-lg"
      src={pictureUrl}
    />
    <h2
      title={name}
      className="mb-1 w-full overflow-hidden text-ellipsis text-xl font-medium text-gray-900"
    >
      {name}
    </h2>
    <span
      title={location}
      className="mb-4 w-full overflow-hidden text-ellipsis text-sm text-gray-500"
    >
      {location}
    </span>
    <a
      className="mb-1 w-full overflow-hidden text-ellipsis text-sm font-medium text-blue-600 hover:underline"
      title={email}
      href={`mailto:${email}`}
    >
      {email}
    </a>
    <a
      className="w-full overflow-hidden text-ellipsis text-sm font-medium text-blue-600 hover:underline"
      title={email}
      href={`tel:${phoneNumber}`}
    >
      {phoneNumber}
    </a>
  </article>
);
