import React from 'react';
import List from '../../components/List';
import Link from '../../components/Link';
import styled from 'styled-components';


const ProfiledStyled = styled.div`
  width: 50%;
  margin: 10px auto;
`;

const AvatarStyled = styled.img`
  width: 50%;
`;


class Profile extends React.Component {
  state = {
    data: {},
    repositories: [],
    loading: true,
    error: '',
  }

  async componentDidMount(){
    try {
      const profile = await fetch('https://api.github.com/users/alxroots')
      const profileJSON = await profile.json()

      if (profileJSON){
        const repos = await fetch(profileJSON.repos_url);
        const reposJSON = await repos.json();

        this.setState({
          data: profileJSON,
          repositories: reposJSON,
          loading: false,
        })
      }
    }
    catch(error) {
      this.setState({
        loading: false,
        error: error.message,
      })
    }
  }

  render(){
    const {data, loading, repositories, error } = this.state;
    if (loading || error){
      return <div>{loading ? 'Loading ...' : error }</div>
    }

    const items = [
      { label: 'html_url', value: '<Link url={data.html_url} title="GitHub URL"/>' },
      { label: 'repos_url', value: data.repos_url },
      { label: 'name', value: data.name},
      { label: 'company', value: data.company },
      { label: 'location', value: data.location },
      { label: 'email', value: data.email },
      { label: 'bio', value: data.bio }
    ]
    const projects = repositories.map( repository => ({
      label: repository.name,
      value: <Link url={repository.html_url} title='Github URL'/>
    }));

    return (
      <ProfiledStyled>
        <AvatarStyled src={data.avatar_url} alt="avatar"/>
        <List title='Profile' items={items} />
        <List title='Projects' items={projects} />
      </ProfiledStyled>
    )
  }
}

export default Profile;