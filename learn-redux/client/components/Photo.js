import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import CSSTransitionGroup from "react-addons-css-transition-group";
import { connect } from "react-redux";

class Photo extends React.Component {
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
              className="grid-photo"
            />
          </Link>
          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={post.likes} className="likes-hearts">
              {post.likes}
            </span>
          </CSSTransitionGroup>

          <figcaption>
            <p>{post.caption}</p>
            <div className="control-buttons">{post.caption}</div>
            <button
              onClick={this.props.increment.bind(null, i)}
              className="likes"
            >
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble" />
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </figcaption>
        </div>
      </figure>
    );
  }
}

export default connect(null)(Photo);
