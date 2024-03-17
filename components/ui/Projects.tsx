interface Project {
  title: string;
  time: string;
  image: string;
  description: string;
  githHub_link: string;
  live_link: string;
}
export const Projects: Project[] = [
  {
    title: "Kexus GYM",
    description:
      "Unleash your inner fitness enthusiast with GYM, the ultimate application designed for indoor exercise lovers! ",
    time: "2023",
    githHub_link: "https://github.com/emmdeveloper/kexus_gym_app",
    live_link: "https://kexus-gym-app.vercel.app/",
    image: "/projects/gymapp/Kexus_gym.png",
  },
  {
    title: "KMovies",
    description:
      "Dive into the world of cinema with Kmovies, your one-stop shop for all things movies!",
    time: "2023",
    githHub_link: "https://github.com/emmdeveloper/kexus_movie_app",
    live_link: "https://kexus-movie-app.vercel.app",
    image: "/projects/movieapp/Movie-App.png",
  },
  {
    title: "NinjaSports",
    description:
      "Rally your sports crew with NinjaSports! This dynamic app lets you instantly share and discover local sporting events happening around you. ",
    time: "2023",
    githHub_link: "https://github.com/emmdeveloper/kexus_gym_app",
    live_link: "https://event-locator.vercel.app",
    image: "/projects/sportlocator/NinjaSports.png",
  },
  {
    title: "MegStorm",
    description:
      "Your one-stop ecommerce store to purchase all your tech stuffs at an affordable price!. ",
    time: "2023",
    githHub_link: "https://github.com/emmdeveloper/ecommerce",
    live_link: "https://megstorm.vercel.app",
    image: "/projects/megstorm/megstorm.png",
  },
];
