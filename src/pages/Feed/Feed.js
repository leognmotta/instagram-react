import React, { Component } from 'react';
import api from '../../services/api';

import { PostSection } from './style';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

class Feed extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    const response = await api.get('/v1/post/index');

    this.setState({ feed: response.data });
  }

  render() {
    return (
      <PostSection>
        {this.state.feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>

              <img src={more} alt="mais" />
            </header>

            <img className="img-post" src={`http://localhost:3333/files/${post.image}`} alt="" />

            <footer>
              <div className="actions">
                <img src={like} alt="" />
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>

              <strong>{post.likes} Curtidas</strong>

              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </PostSection>
    );
  }
}

export default Feed;
