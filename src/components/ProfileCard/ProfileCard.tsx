import tinyColor from "tinycolor2";

export interface ProfileCardProps {
  backgroundColor?: string;
  email: string;
  location: string;
  name: string;
  phoneNumber: string;
  pictureUrl: string;
}

// Possible text colors to choose from for accessibility (tailwinds "neutral" colors)
const TEXT_COLORS = [
  "#fafafa",
  "#f5f5f5",
  "#e5e5e5",
  "#d4d4d4",
  "#a3a3a3",
  "#737373",
  "#525252",
  "#404040",
  "#262626",
  "#171717",
  "#0a0a0a",
];

// Possible link colors to choose from for a11y (all blues (>= 200) from tailwindcss)
const LINK_COLORS = [
  "#bfdbfe",
  "#93c5fd",
  "#60a5fa",
  "#3b82f6",
  "#2563eb",
  "#1d4ed8",
  "#1e40af",
  "#1e3a8a",
  "#172554",
];

export const ProfileCard = ({
  backgroundColor,
  email,
  location,
  name,
  phoneNumber,
  pictureUrl,
}: ProfileCardProps) => {
  const linkColor = backgroundColor
    ? tinyColor.mostReadable(backgroundColor, LINK_COLORS).toHexString()
    : LINK_COLORS[6];

  return (
    <article
      style={{
        backgroundColor,
        color: backgroundColor
          ? tinyColor.mostReadable(backgroundColor, TEXT_COLORS).toHexString()
          : TEXT_COLORS[9],
      }}
      className="flex w-full max-w-sm flex-col items-center rounded-lg border border-gray-200 p-6 pb-10 text-center shadow"
    >
      <img
        className="mb-6 size-24 min-h-24 min-w-24 rounded-full shadow-lg"
        src={pictureUrl}
      />
      <h2
        title={name}
        className="mb-1 w-full overflow-hidden text-ellipsis text-xl font-medium"
      >
        {name}
      </h2>
      <span
        title={location}
        className="mb-4 w-full overflow-hidden text-ellipsis text-sm"
      >
        {location}
      </span>
      <a
        style={{ color: linkColor }}
        className="mb-1 w-full overflow-hidden text-ellipsis text-sm font-medium hover:underline"
        title={email}
        href={`mailto:${email}`}
      >
        {email}
      </a>
      <a
        style={{ color: linkColor }}
        className="w-full overflow-hidden text-ellipsis text-sm font-medium hover:underline"
        title={email}
        href={`tel:${phoneNumber}`}
      >
        {phoneNumber}
      </a>
    </article>
  );
};
