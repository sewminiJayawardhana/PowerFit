import logo from './logo1.png'    
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'  
import about_img from './about_img.png'
import gallery_1 from './gallery_1.jpg'
import gallery_2 from './gallery_2.jpg'
import gallery_3 from './gallery_3.png'
import gallery_4 from './gallery_4.jpg'
import gallery_5 from './gallery_5.png'
import gallery_6 from './gallery_6.png'
import gallery_7 from './gallery_7.png'
import gallery_8 from './gallery_8.png'  
import gallery_9 from './gallery_9.jpg' 
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
   // logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    about_img,
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
    gallery_9,
    left_arrow,
    right_arrow,
}

export const programsData = [
    {
      title: "Strength & Muscle Building",
      description: "Ideal for individuals aiming to build muscle, lift weights, and gain strength.",
      image: gallery_6
    },
    {
      title: "Weight Loss & Fat Burn",
      description: "High-intensity workouts, cardio training, and circuits for burning calories.",
      image: gallery_5
    },
    {
      title: "Functional & CrossFit Training",
      description: "Engage in full-body exercises to boost stamina, agility, and overall endurance.",
      image: gallery_3
    },
    {
      title: "Yoga & Flexibility",
      description: "Practice yoga to improve balance, enhance mobility, reduce stress, and cultivate mindfulness daily.",
      image: gallery_7
    },
    {
      title: "Personal Training & Customized Plans",
      description: "One-on-one coaching, diet plans, and tailored workouts.",
      image: gallery_8
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Dinesh Gamage",
        location: "Kaduwela",
        image: profile_img_1,
        alt: "Portrait of Gamage",
        rating: 5,
        text: "I achieved my fitness goals faster than I imagined. The trainers are amazing!I've been to a few gyms, but none compare to this one. The cleanliness and upkeep of the facility are outstanding, and they're always adding new classes and equipment to keep things fresh. "
    },
    {
        name: "Richard Nelson",
        location: "Homagama",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "This gym has everything you could ask for. The atmosphere is incredibly positive and motivating, the community of members is supportive and friendly, and the equipment is state-of-the-art.Highly recommend for anyone"
    },
    {
        name: "Nimesh Fernando",
        location: "Kottawa",
        image: profile_img_3,
        alt: "Portrait of Fernando",
        rating: 5,
        text: "I love this place! The trainers are not just knowledgeable, they're truly passionate about what they do and it shows. They helped me push past my limits in a way I never thought possible, and I hit my fitness goals way ahead of schedule. "
    }
];