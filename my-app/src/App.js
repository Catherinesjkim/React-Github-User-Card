import React from 'react';
import './App.css';
import UserCard from "./UserCard";
import FollowerCard from "./FollowerCard";
import axios from "axios";

class App extends React.Component {
  state = {
      followersList: [],
      searchFollowers: [],
      searchTerm: ""
    };

  // Fetching My User on Github
  componentDidMount() {
    axios
      .get("https://api.github.com/users/Catherinesjkim")
      .then(res => {
        console.log("API is Here:", res.data); 
        this.setState({
          name: res.data.name,
          img: res.data.avatar_url, 
          github: res.data.html_url,
          files: res.data.repos_url, 
          area: res.data.loctaion, 
          repoNum: res.data.public_repos, 
          followed: res.data.following,
          followers: res.data.followers,
        })
  })
    .catch(err => console.log('error on fetch: ', err));
  
    axios
      .get("https://api.github.com/users/Catherinesjkim/followers")
      .then(res => {
        console.log("API is Here:", res.data);
    this.setState({
      searchFollowers: res.data,
      followersList: res.data,
    })
  })
    .catch (err => console.log('error on fetch: ', err));
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
    console.log("SearchTerm: we have state change!");
    
    const follower = this.state.searchFollowers.filter(people =>
      people.login.toLowerCase().includes(this.state.searchTerm.toLowerCase()),
    );
    this.setState({followersList: follower})
    }
   }

    // handleSubmit = event =>
    //   event.preventDefault();
    //   return()

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    
    // handleUserTextChange = event => {
    //   this.setState({ ...this.state, userText: event.target.value });
    // };

    render() {
      return (
        <div className="App">
          <h1>Github Users:</h1>
          <form>
            <input 
              name="searchTerm"
              type="text" 
              value={this.state.searchTerm} 
              onChange={this.handleChange}
            />
            {/* <button onClick={this.handleUserFetch}>fetch users</button> */}
          </form>

          <div className="followersList">
            {this.state.followersList &&
              this.state.followersList.map(info => {
                return <FollowerCard 
                  width="30" 
                  src={info.avatar_url} 
                  key={info.id}
                  name={info.login}
                  />;
            })}
          <UserCard
            login={this.state.name}
            img={this.state.img}
            url={this.state.url}
            followers={this.state.followers}
          />
          </div>
        </div>
      );
    }
  }

export default App;