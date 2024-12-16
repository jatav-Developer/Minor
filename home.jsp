<%-- 
    Document   : index
    Created on : Dec 16, 2024, 10:08:17 PM
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Home Page</title>
        <link rel="stylesheet" href="home.css">
        <style>
            #home
            {
                background-color:white;
                color:black;
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <header class="header">
            <div class="navigation">
                <ul>
                    <li id="home"> <a href="#" id="home"> Home </a> </li>
                    <li id="search"> <a href="#" id="search"> Search </a> </li>
                    <li id="login"> <a href="#" id="login"> Login </a> </li>
                    <li id="register"> <a href="#" id="register">Registration</a> </li>
                    <li id="setting"> <a href="#" id="setting">Setting </a> </li>
                    <li id="help"> <a href="#" id="help"> Help? </a> </li>
                </ul>
            </div>
        </header>
        <section class="adds">
            <div class="slider">
                <div class="slides">
                    <div class="slide"><img
                            src="https://images.pexels.com/photos/9513107/pexels-photo-9513107.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Slide 1"></div>
                    <div class="slide"><img
                            src="https://images.pexels.com/photos/29718117/pexels-photo-29718117/free-photo-of-fresh-juicy-orange-slices-with-leaves.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Slide 2"></div>
                    <div class="slide"><img
                            src="https://images.pexels.com/photos/8352380/pexels-photo-8352380.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Slide 3"></div>
                    <div class="slide"><img
                            src="https://images.pexels.com/photos/6801212/pexels-photo-6801212.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Slide 4"></div>
                    <div class="slide"><img
                            src="https://images.pexels.com/photos/1113520/pexels-photo-1113520.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Slide 5"></div>
                    <div class="slide"><img
                            src="https://images.pexels.com/photos/10012870/pexels-photo-10012870.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Slide 6"></div>
                </div>
                <div class="controls">
                    <button class="control prev">&#9664;</button>
                    <button class="control next">&#9654;</button>
                </div>
                <div class="indicators"></div>
            </div>

            
        </section>
        <section class="top">
            <h4>Project Name</h4>
            <h2>We provide genuine product Information</h2>
            <h3>Also Provide a Good product with efficient price</h3>
            <p>Shop genuin product and make life helthier in less cost and make life long</p>
            <p><a href="#">Register/login</a></p>
        </section>

        <section class="category">
            <h1 style="text-align: center; margin-bottom: 40px;">Our Categories</h1>
            <div class="row">
                <div class="card"><img src="https://via.placeholder.com/300x150" alt="Category 1"><p>Category 1</p></div>
                <div class="card"><img src="https://via.placeholder.com/300x150" alt="Category 2"><p>Category 2</p></div>
                <div class="card"><img src="https://via.placeholder.com/300x150" alt="Category 3"><p>Category 3</p></div>
                <div class="card"><img src="https://via.placeholder.com/300x150" alt="Category 4"><p>Category 4</p></div>
                <div class="card"><img src="https://via.placeholder.com/300x150" alt="Category 5"><p>Category 5</p></div>
            </div>
            <div class="row">
                <div class="card"><img src="https://via.placeholder.com/300x150" alt="Category 1"><p>Category 1</p></div>
                <div class="card"><img src="https://via.placeholder.com/300x150" alt="Category 2"><p>Category 2</p></div>
                <div class="card"><img src="https://via.placeholder.com/300x150" alt="Category 3"><p>Category 3</p></div>
                <div class="card"><img src="https://via.placeholder.com/300x150" alt="Category 4"><p>Category 4</p></div>
                <div class="card"><img src="https://via.placeholder.com/300x150" alt="Category 5"><p>Category 5</p></div>
            </div>
        </section>
        <footer>
            <div class="footer-section">
                <div>
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                    </ul>
                </div>
                <div>
                    <h4>Connect with Us</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div>
                    <h4>Make Money with Us</h4>
                    <ul>
                        <li>Sell on Our Platform</li>
                        <li>Advertise Your Products</li>
                        <li>Become an Affiliate</li>
                    </ul>
                </div>
                <div>
                    <h4>Let Us Help You</h4>
                    <ul>
                        <li>Your Account</li>
                        <li>Returns Centre</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>

            <div class="footer-feedback">
                <h4 style="text-align: center;">Review and Feedback</h4>
                <form action="#" method="POST">
                    <center>
                        <table cellspacing="10px">
                            <tr>
                                <td>
                                    <label for="name">Name :</label>
                                </td>
                                <td>
                                    <input type="text" id="name" name="name" required>
                                </td>
                                <td rowspan="3">
                                    <textarea id="feedback" name="feedback" rows="6" placeholder="Write Something Here..." required></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="mobile">Mobile:</label>
                                </td>
                                <td>
                                    <input type="tel" id="mobile" name="mobile" required>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="email"> E-Mail :</label>
                                </td>
                                <td>
                                    <input type="email" id="email" name="email" required>
                                </td>
                            </tr>
                        </table>
                    </center>
            </div>
            <div style="text-align: center;padding:5px;margin:5px;">
                <input style="padding:3px;margin:3px;padding-left: 8px;padding-right: 8px;" type="submit" value="submit">
            </div>
        </form> 
        <div class="footer-reserved">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    </footer>
    <script src="script.js"></script>
</body> <!--  hcnk pel;fv mnfnv l myashbndcn dvn kekfvnk kf;  Ramu-->
</html>
