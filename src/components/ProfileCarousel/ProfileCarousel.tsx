import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import { A11y, Keyboard, Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProfileCard, ProfileCardProps } from "../ProfileCard/ProfileCard";

export type ProfileWithId = Omit<ProfileCardProps, "backgroundColor"> & {
  id: string;
};

export interface ProfileCarouselProps {
  backgroundColor: ProfileCardProps["backgroundColor"];

  /**
   * Called when the profiles being displayed changes (by page or number)
   * @param startIndex The index of the first profile being shown
   * @param endIndex The index of the last profile being shown.
   */
  onViewChange: (startIndex: number, endIndex: number) => void;

  profiles: ProfileWithId[];
}

export const ProfileCarousel = ({
  backgroundColor,
  onViewChange,
  profiles,
}: ProfileCarouselProps) => {
  return (
    <>
      <Swiper
        breakpoints={{
          600: { slidesPerView: 2 },
          850: { slidesPerView: 3 },
          1000: { slidesPerView: 4 },
          1400: { slidesPerView: 5 },
          1800: { slidesPerView: 6 },
        }}
        navigation={true}
        modules={[A11y, Keyboard, Navigation, Virtual]}
        spaceBetween={20}
        slidesPerView={1}
        virtual
        onSlideChange={(swiper) => {
          onViewChange(swiper.virtual.from, swiper.virtual.to);
        }}
        onResize={(swiper) => {
          onViewChange(swiper.virtual.from, swiper.virtual.to);
        }}
      >
        {profiles.map(({ id, ...profile }, index) => (
          <SwiperSlide
            key={id}
            className="flex justify-center"
            virtualIndex={index}
          >
            <ProfileCard backgroundColor={backgroundColor} {...profile} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
