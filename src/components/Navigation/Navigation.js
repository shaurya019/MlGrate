import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"
import Naviextra from "./Naviextra.js"
import './Navigation.css'
import logo from '../../assets/logo.png'

const Navigation = (props) => {
	const data = props.isloaggedin;
	return (
		<div className="nav">
			<div className="nav-image">
				<Link to="/">
					<img style={{height:'75px'}} src={logo} alt="logo" />
				</Link>
			</div>
			<div className="nav-items">
				<ul className="nav-link">
					<li className="nav-li">
						<Link to="/" id="link-1">
							Home
						</Link>
					</li>
					<li className="nav-li">
						<Link to="/Docs" id="">
							Docs
						</Link>
					</li>
					<li className="nav-li">
						<Link to="/extra" id="">
							<Naviextra />
						</Link>
					</li>
					{data ? 
					<li className="nav-li Profile">
						<Link to="/Profile" id="">
							<FontAwesomeIcon icon={faUser}/>
							{data.email}
						</Link>
					</li>
					:
					<li className="nav-li" id="li-4">
						<Link to="/Login" id="">
							Login
						</Link>
					</li>
					}
					
					
				</ul>
			</div>
		</div>
	);
};

export default Navigation;


// <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
<div class="wrapper">
	<div class="navbar">
		<ul>
			<li><a href="#" class="a_parent">
				<div class="wrap">
					<span class="icon">
						<i class="fas fa-volleyball-ball" aria-hidden="true"></i>
					</span>
					<span class="text">Sports</span>
				</div>
			</a>
				<div class="dd_menu">
					<ul>
						<li>
							<a href="#" class="dd_menu_a">
								<div class="wrap">
									<span class="icon">
										<i class="fas fa-running" aria-hidden="true"></i>
									</span>
									<span class="text">
										Running
									</span>
								</div>
							</a>
						</li>
						<li>
							<a href="#" class="dd_menu_a">
								<div class="wrap">
									<span class="icon">
										<i class="fas fa-biking" aria-hidden="true"></i>
									</span>
									<span class="text">Biking</span>
								</div>
							</a>
							<div class="dd_submenu">
								<ul>
									<li>
										<a href="#">
											<div class="wrap">
												<span class="icon">
													<i class="fas fa-running" aria-hidden="true"></i>
												</span>
												<span class="text">
													Running
												</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div class="wrap">
												<span class="icon">
													<i class="fas fa-biking" aria-hidden="true"></i>
												</span>
												<span class="text">Biking</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div class="wrap">
												<span class="icon">
													<i class="far fa-futbol" aria-hidden="true"></i>
												</span>
												<span class="text">Football</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div class="wrap">
												<span class="icon">
													<i class="fas fa-swimmer" aria-hidden="true"></i>
												</span>
												<span class="text">Swimmer</span>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="#" class="dd_menu_a">
								<div class="wrap">
									<span class="icon">
										<i class="far fa-futbol" aria-hidden="true"></i>
									</span>
									<span class="text">Football</span>
								</div>
							</a>
						</li>
						<li>
							<a href="#" class="dd_menu_a">
								<div class="wrap">
									<span class="icon">
										<i class="fas fa-swimmer" aria-hidden="true"></i>
									</span>
									<span class="text">Swimmer</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</div>

