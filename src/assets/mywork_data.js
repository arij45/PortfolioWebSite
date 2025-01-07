import CiCdPipeline from '../assets/CicdImage.png'
import ChicShopMobileApplication from '../assets/ChicShopApplication.jpg'
import MapPositionMobileApplication from '../assets/MapPosition.jpg'
import BarberShopImage from '../assets/BarberShopImage.jpg'

const mywork_data = [

  {
    w_img: BarberShopImage,
    w_title: "BarberShop Mobile Application",
    w_desc: 'Contributed to the development of various interfaces for the BarberShop mobile application as a flutter freelancer, focusing on the frontend based on Figma mockups. The application is designed to manage the barber shop sector by digitizing its processes. My work involved developing the modules for sign-in, sign-up, profile creation, reservation, and payment. Additionally, I integrated backend APIs and tested the functionality of the application to ensure seamless operation and a reliable user experience.',
    w_tags: ['Android Studio', 'Flutter', 'Figma', 'API', 'Agile Scrum', 'Trello'],
    w_github: 'https://github.com/arij45/BarberShopMobileApplication',
  }, 

  {
    w_img: ChicShopMobileApplication,
    w_title: "ChicShop Mobile Application",
    w_desc: 'Develop the user interfaces for both the admin and client sides of the application. The admin interface will allow for efficient management of users, products, and orders, while the client interface will focus on providing a seamless shopping experience. Additionally, implement a module for sending and verifying SMS messages using One-Time Passwords (OTP), enhancing security during user registration, login, and transactions. In the user section, customers will be able to filter and sort products by categories such as price, rating, or popularity, and will be able to complete their purchases securely.',
    w_tags: ['Android Studio', 'Flutter', 'Firebase'],
    w_github: 'https://github.com/arij45/ShicShopMobileApplication',
  },

  {
    w_img: MapPositionMobileApplication,
    w_title: "StaySafe Mobile Application",
    w_desc: 'Designed and developed a mobile application to help detect cities affected by COVID-19. The application includes modules for sign-in and sign-up, as well as the integration of the Google Maps API to mark all affected cities. It also allows users to determine the status of their citits by tapping the longitude and latitude of a specific zone',
    w_tags: ['Android Studio', 'Java', 'Firebase', 'Api Google Maps'],
    w_github: 'https://github.com/arij45/StaySafeMobileApplication/tree/master',
  },
    {
        w_img: CiCdPipeline,
        w_title: 'CI/CD for a Web Application ',
        w_desc: 'Create and implement automated tests using the PHPUnit framework to ensure that all components of the application are working as expected and to prevent future regressions. Next, set up a Docker image for the application, configuring it with Docker Compose for seamless orchestration of services. Integrate the application with Azure for enhanced cloud deployment. After building the Docker image, upload it to both Docker Hub and Azure Container Registry to make it accessible for deployment and version control. Finally, deploy the application on Azure, ensuring that it runs smoothly in the cloud environment with proper scalability and security configurations.',
        w_tags: ['Symfony', 'PhpMyAdmin', 'Github', 'Jenkins', 'Docker', 'Azure'],
        w_github: 'https://github.com/arij45/CI-CD-for-WebApplication',
      },
  

    ];

  export default mywork_data;