import React, { Component } from "react";
import DiscussionDetails from "./discussiondetails.component";
import './discussion.scss';

export default class Discussion extends Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      openPost : false,
      posts: [
        {
          title: "What is Lorem Ipsum?",
          author: "Ponting",
          createdAt: "2020-03-11",
          comments: "24",
          course: "Learn JS",
          content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
        },
        {
          title: "Where does it come from?",
          author: "Maxwell",
          createdAt: "2020-02-14",
          comments: "50",
          course: "Learn HTML5",
          content:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,",
        },
        {
          title: "Why do we use it?",
          author: "Gilly",
          createdAt: "2020-01-10",
          comments: "12",
          course: "Learn CSS3",
          content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
        },
      ],
    };
  }

  openPost = (index) => {
    this.setState({
      currentPost: this.state.posts[1],
      openPost : true

    })
  };

  render() {
    if( this.state.openPost )
    {
      return(
        <DiscussionDetails post={this.state.currentPost}></DiscussionDetails>
      );
    }

    else{
      return (
        <div>
          <div class="discussions-wrapper px-4">
            <div class="row post-list ml-4">
              {this.state.posts.map((post,index) => (
                <div class="post-item col-sm-11 col-xs-12 mt-4" onClick={(index) => this.openPost(index)}>
                  <h6>
                    {post.title}&nbsp;&nbsp;
                    <span class="badge badge-warning py-1 px-2">
                      {post.course}
                    </span>
                    <span class="float-right comments">
                      <i class="fa fa-comments-o" aria-hidden="true"></i>&nbsp;{post.comments}
                      </span>
                    </h6>
                    <p class="mb-2">by&nbsp;&nbsp;{post.author}</p>
                    <p>
                      <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;
                        {post.createdAt}
                      </p>
                      <div class="mb-3 post-desc">
                        {post.content}&nbsp;
                        <span class="text-primary font-sm cursor-pointer">
                          Continue Reading
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      }
    }
