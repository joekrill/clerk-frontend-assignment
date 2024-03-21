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
  <article className="flex max-w-sm flex-col items-center rounded-lg border border-gray-200 bg-white p-6 pb-10 shadow">
    <img className="mb-6 size-24 rounded-full shadow-lg" src={pictureUrl} />
    <h2 className="mb-1 text-xl font-medium text-gray-900">{name}</h2>
    <span className="mb-4 text-sm text-gray-500 ">{location}</span>
    <a
      className="mb-1 text-sm font-medium text-blue-600 hover:underline "
      href={`mailto:${email}`}
    >
      {email}
    </a>
    <a
      className="text-sm font-medium text-blue-600 hover:underline"
      href={`tel:${phoneNumber}`}
    >
      {phoneNumber}
    </a>
  </article>
);
