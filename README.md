# PFA Project - Nikez Store

![image](https://github.com/s4iTen/PFA_Project/assets/108961283/dd3fab5d-c1ca-419b-8a31-89f51d0169ea)


### The team consists of:

Yahya Chouk: Student at Holberton School Tunis, a Future Full Stack developer In this project i handles Firebase integration, database management, 3D modeling, front-end design, the 3D implementation and the functionality.

Moez Abdelkefi: Student at Holberton School Tunis, a Future Full Stack developer In this project i'm the Responsible for front-end design, Sanity integration, and Stripe payment integration.

Our project timeline spans over 2 months, starting from May 2023 . Our team collaborates closely to design, develop, and launch Nike Shoes eCommerce. To ensure a successful and timely delivery, each team member will contribute to their respective roles.

### Target Audience:

The Nike Shoes eCommerce website is created for sneaker enthusiasts, sports enthusiasts, and anyone who loves Nike shoes. We aim to cater to a wide range of customers, from casual buyers to avid collectors, providing them with a platform to explore, customize, and purchase their favorite Nike shoes from the comfort of their homes.

#### Yahya's Focus:

As an integral member of the team, my primary focus was on creating and implementing 3D models for the website. Specifically, my role involved designing and developing interactive 3D models that allowed users to customize colors. I was responsible for establishing a database to store the hex code color values associated with each model, ensuring seamless integration with the website's functionalities. Additionally, I took charge of implementing authentication measures to ensure secure access to the customization features, providing users with a personalized and immersive experience.

#### Yahya's Story:

This endeavor holds personal significance to me, as it encompasses more than just a business venture. My deep-rooted passion for sneakers, particularly Nike shoes, has always instilled within me a sense of empowerment and identity. Beyond being mere footwear, they have become a medium for self-expression and a representation of my individuality.
Driven by this passion, my aim was to establish an eCommerce platform that not only showcases the remarkable array of Nike shoes but also encapsulates the essence of self-expression and personal style. I firmly believe that everyone should have the opportunity to discover that ideal pair of shoes that resonates with their true self, instilling confidence and a feeling of uniqueness. This project serves as a means for me to share my fervor with others and foster an inclusive community where individuals can effortlessly find their perfect fit.

#### Moez's Focus:

As a member of the team, my personal focus was on the frontend development of the website. I was responsible for implementing the user interface design, Sanity integration, and Stripe payment implementation, My goal was to create a visually appealing and user-friendly interface that enhances the overall shopping experience for our users.

#### Moez's Story:

This project is more than just a business endeavor for me, there was one thing that always gave me a sense of empowerment and identity - my love for sneakers, particularly Nike shoes. They were more than just footwear; they became a form of self-expression and a symbol of my individuality.
Through this project, I wanted to create an eCommerce platform that not only showcases the incredible range of Nike shoes but also captures the essence of self-expression and personal style. I believe that everyone should have the opportunity to find that perfect pair of shoes that truly resonates with them and makes them feel confident and unique. This project is my way of sharing that passion with others and creating an inclusive community where everyone can find their perfect fit.


### Technologies Used:

For the frontend development of our project, we employed the powerful combination of React.js and Three.js. React.js served as our frontend framework, providing a robust and efficient environment for building dynamic and interactive user interfaces. Three.js, on the other hand, enabled us to incorporate captivating 3D models seamlessly into the website, enhancing the overall visual experience for our users.
To store and manage our extensive collection of 3D models, we utilized Firestore, a flexible and scalable NoSQL database offered by Firebase. With Firestore, we created a structured schema to define the necessary fields and data types for storing model images, names, prices, tags, and other relevant details. Its Restful API allowed us to easily fetch and manipulate content, providing a seamless integration between the frontend and the database.
In terms of external services, we integrated Stripe for secure payment processing. By incorporating Stripe into our platform, we ensured a smooth and secure checkout process for our users. Stripe's reliable and user-friendly interface provided a straightforward solution for handling payment transactions, enhancing the overall user experience.
Furthermore, we leveraged Sanity as a content management system for storing our products. Utilizing Sanity, we defined schemas that structured the storage of various product attributes such as images, names, prices, tags, and additional details. This allowed us to effectively manage and organize our product data. Additionally, Sanity's Restful API enabled us to effortlessly fetch and manipulate content, further streamlining our content management process.

### Architecture Diagram:

![image](https://github.com/s4iTen/PFA_Project/assets/108961283/8bda83fb-04e0-4bb2-9def-61145d4d3479)

![image](https://github.com/s4iTen/PFA_Project/assets/108961283/7b0ede79-c0ae-439a-af50-d6837b2cb7a6)


### Result of the Project:

The result of our project is a fully functional Nike Shoes eCommerce website that allows users to browse, customize, and purchase Nike shoes online. Users can explore the latest Nike shoe collection, personalize their shoes using a 3D model customization feature, and securely complete their purchases through integrated payment functionality. The website provides a seamless and user-friendly experience

### Completed Features:

User Registration and Authentication: Our platform provides a seamless user registration and authentication system. Users can easily create accounts and securely log in to access personalized features, such as saved customization preferences. By implementing robust authentication measures, we ensure the privacy and security of user data.
3D Model Customization: One of the key features of our website is the interactive 3D model customization capability. Users can personalize their Nike shoes by selecting different colors and styles. The changes made in the customization interface are dynamically applied to the 3D model in real-time, providing users with an immersive and engaging experience. This feature allows individuals to truly express their unique style and preferences.
Seamless Checkout with Stripe: To facilitate a seamless purchasing experience, we integrated Stripe payment processing into our platform. With Stripe, users can confidently complete their transactions securely. By adding customized shoes to their cart, entering their payment details, and finalizing the transaction, users can enjoy a smooth and hassle-free checkout process. Stripe's robust payment infrastructure ensures the security and reliability of every transaction, instilling trust and peace of mind for our users.

### Technical Challenge:

Situation:
During the development process, one of the tasks we encountered was displaying a card component for each color dictionary retrieved from the database. This required dynamically generating and rendering the cards based on the available color data.
Task:
Our task was to iterate over the color dictionaries retrieved from the database and create a visually appealing card component for each dictionary. Each card component needed to display the relevant information, such as the color name and hex code.
Result:
We successfully implemented the solution by utilizing React.js, Firestore, and frontend styling techniques. The result was a dynamic display of card components, with each card representing a color dictionary from the database. Users could easily view and interact with the different color options in an organized and visually pleasing manner.
Technical Takeaways:
Integration of Firestore: We gained valuable experience in working with Firestore to fetch data from the database and utilize it within our frontend application.
Dynamic Card Generation: Through iterating over the color dictionaries, we developed a deeper understanding of dynamically generating components based on retrieved data.
Frontend Styling: Applying appropriate styling to the card components allowed us to enhance the visual appeal and user experience of the application.
Personal Growth:
This task provided an opportunity for personal growth and skill development. We enhanced our proficiency in frontend development using React.js and learned to effectively integrate external databases into our applications. Additionally, we honed our design skills by creating visually appealing and user-friendly card components.
Future Implications:
The successful implementation of this feature opens up possibilities for further enhancements in the future. We can continue expanding the application's functionality, such as allowing users to interact with the card components to apply colors and see real-time changes on the 3D model. This feature has the potential to greatly enhance the user experience and further personalize the customization process.
Confirming and Questioning Beliefs:
This task confirmed our belief in the power of utilizing efficient frameworks like React.js to streamline development and improve productivity. It also raised questions about scalability and performance when working with a large number of color dictionaries. We will continue to explore optimizations to ensure smooth performance as the application grows.



