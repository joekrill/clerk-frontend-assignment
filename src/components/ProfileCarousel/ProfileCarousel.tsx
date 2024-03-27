import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProfileCard, ProfileCardProps } from "../ProfileCard/ProfileCard";

export type ProfileWithId = ProfileCardProps & { id: string };

export interface ProfileCarouselProps {
  profiles: ProfileWithId[];
}

export const ProfileCarousel = ({ profiles }: ProfileCarouselProps) => {
  return (
    <Swiper
      breakpoints={{
        600: { slidesPerView: 2 },
        850: { slidesPerView: 3 },
        1000: { slidesPerView: 4 },
        1400: { slidesPerView: 5 },
        1800: { slidesPerView: 6 },
      }}
      navigation={true}
      modules={[A11y, Keyboard, Navigation]}
      spaceBetween={20}
      slidesPerView={1}
    >
      {profiles.map(({ id, ...profile }) => (
        <SwiperSlide key={id} className="flex justify-center">
          <ProfileCard {...profile} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
