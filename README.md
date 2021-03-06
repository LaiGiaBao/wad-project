# wad-project
# CHAPTER 1: INTRODUCTION
## 1.1 Motivation
Nowadays, E-Commerce websites are very popular, common, and in high demand. By creating a web application of this kind, we can hone our skills and knowledge in the most practical way possible, and prepare us to work in the industry in the near future. 
## 1.2 Problems Statement
We need an E-Commerce web application that has the typical CRUD functionalities and is as professional as possible.
## 1.3 Scope
- Goal and deliverables:
    - Data CRUD functionalities (create, read, update, and delete) with:
        - Products
        - Carts and carts details
        - User profile
        - Comments
    - Other popular features and properties in a website:
        - Searching and categorizing
        - Routing
        - Logging in
        - Registration
        - Styling

- Cost: 3 members working in 3 months.
- Deadline: 8 June, 2022 
# CHAPTER 2: LITERATURE REVIEW
## 2.1 Similar Application/Systems
As this is an E-Commerce Website, we decided to create a mock website based on some famous e-commerce websites, including Shopee, GearVN

## 2.2 Platform and Tools Review

| Tools | Description |
|---|---|
| GitHub | Provide distributed version control and source code management using Git, so that every member can collaborate on the project. Through Github, we mainly use the basic functionalities of Git such as push, pull, fetch, merge branch, etc.  |
| Bootstrap | Is a free and open-source CSS framework, with built-in responsive capability. We used it to speed up the styling process, minimize the CSS files needed, and keep the whole application style coherent. |
| ReactJS | Is a free and open-source JavaScript library for front-end web development. It is maintained by Meta (creator of Facebook) as well as its community. ReactJS itself is very fast and powerful, and it also comes with many dependencies for different tasks. Using this, we were able to quickly develop a relatively sophisticated product. |
| ExpressJS | Is a free and open-source Node.js framework for back-end web application development and APIs to the front-end side. It is considered the standard, the default framework for Node.js. |
| NodeJS | Is an open-source and cross-platform environment for back-end development, with Javascript as the programming language. It allows us developers to write scripts on the server-side to create a dynamic web application. |
| MySQL (XAMPP) | Is an open-source relational database management system (RDBMS). It provides database, each organizes data as tables, with columns and rows, and each table can relate to one another. It can create, read, update, and remove data using Queries. |

# CHAPTER 3: SYSTEM DESIGN
# 3.1 Features
## 3.1.1 Primary Features
### Client:
After landing at the homepages, clients can see various products at first sight, there are no items that you need ? Maybe you didn't find it yet ! Try to use our **Search** to search for it.  
![Search](https://i.ibb.co/DbjHVGq/Search.png)
You can also **Check the details** the item's information to check whether they like it or not. 
![Details](https://i.ibb.co/gVxh8vW/Details.png)
Every E-commerce website should have User system, in our Project, we release a system including **Sign Up**  
![Sign-Up](https://i.ibb.co/xfb42z6/Screenshot-2022-05-24-211343.png)
and **Login** for our clients.  
![login](https://i.ibb.co/qW235t3/login.png)
After signed in successfully, you are able to **Add to Cart** your favorite items and **Check your Cart** to make sure there is no unneccessary items in your cart, otherwise, you can easily **cancel** the product in your cart then continue with your shopping experience.  
If you are done with your shopping, The last thing you should do is just clicking at **Confirm** button to complete your shopping. 
You can also **check your shopping history** directly in your profile.  

### Admin:
On the admin side or we can say: Superior view, we can do everything we want, including **Adding** product
![Add product](https://i.ibb.co/SKZHtS6/addproduct.jpg)
and **Delete** product
![Delete product](https://i.ibb.co/x2ks6YS/manageproduct1.jpg) 
## 3.1.2 Secondary Features
Beside those primary things of the website, we are working on add some features, such as **More product by Category**,  
**Sort by price**  
![sort](https://i.ibb.co/GnWrLWf/sorting.png)  
and even more !!!  
If you like our product, or want to share your thought about it, please **Leave your feedback** below each product  
![Comment](https://i.ibb.co/yQwkzbN/Comment.png)

## 3.2 System Design Specification
## 3.2.1 Database Design 
![Relationship Diagram](https://user-images.githubusercontent.com/69633140/171998974-82337781-4359-4a5e-981f-6b4c3f0c3e4e.png)

## 3.2.2 Use-Case Diagram  
![Use Case](https://user-images.githubusercontent.com/69633140/170947231-53c9aca2-ff5c-4b61-8600-8c39aa93abe6.png)

## 3.2.3 Sequence Diagram
**Searching Products Sequence Diagram**
![Sequence Diagram](https://user-images.githubusercontent.com/69633140/170947476-21fc3e80-7d0b-4409-a9ed-e9f8f0084824.png)

**Shopping Cart Sequence Diagram**
![Sequence Diagram2](https://user-images.githubusercontent.com/74531792/171872872-a4a3541f-143f-4323-a93c-c117f12f8239.png)


## 3.2.4 Activity Diagram
**Creating new Shopping Cart**

![Activity Diagram](https://user-images.githubusercontent.com/74531792/171990079-09c07914-ca1b-4c37-8cc9-aecb285ded5b.png)

**Dealing with existing Shopping cart**

![Activi Diagram](https://user-images.githubusercontent.com/74531792/171990088-cbf00ef0-2c5e-46ac-bda8-c1380ea8e311.png)

# CHAPTER 4: CONCLUSION AND DISCUSSION
## 4.1 List of accomplished works
Currently, we've been completed these tasks:  
&#9745; Login    
&#9745; Sign Up  
&#9745; **Buy** Function  
&#9745; **Details** Page  
&#9745; **Cart** Page  
&#9745; **Sort**  
&#9745; **Landing** Page  
&#9745; **Search**  
&#9745; **Profile** Page  
&#9745; **Add new Product** Page  
&#9745; User Authentication
## 4.2 Future work   
&#9744; Ban account  
&#9744; Category Tags  
&#9744; Filter  
&#9744; Refill product quantity  
&#9744; Admin Authentication  
&#9744; Fix Create new Cart bug  
&#9744; Fix NavBar bug  
&#9744; Improve JWT Authentication  
# REFERENCES
- Bootstrap document: https://getbootstrap.com/docs/5.1/getting-started/introduction/
- ReactJS document: https://reactjs.org/docs/getting-started.html
- XAMPP download: https://www.apachefriends.org/
- Fullstack course: https://www.youtube.com/watch?v=Hl7diL7SFw8&list=PLpPqplz6dKxUaZ630TY1BFIo5nP-_x-nL


