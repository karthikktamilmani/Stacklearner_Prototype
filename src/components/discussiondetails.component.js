import React, { Component } from "react";
import './discussion.scss';

export default class DiscussionDetails extends Component {
  constructor(props) {
    super(props);

    props.post["content"] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque non tellus orci. Fringilla ut morbi tincidunt augue. Consectetur libero id faucibus nisl tincidunt eget. Aenean sed adipiscing diam donec adipiscing tristique. Tincidunt dui ut ornare lectus sit. Viverra maecenas accumsan lacus vel facilisis. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Sed augue lacus viverra vitae congue eu consequat ac. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Interdum velit euismod in pellentesque massa placerat duis. Nec feugiat in fermentum posuere urna nec tincidunt. Ullamcorper eget nulla facilisi etiam dignissim. Semper risus in hendrerit gravida. Interdum velit laoreet id donec ultrices tincidunt. Urna cursus eget nunc scelerisque viverra mauris. Neque ornare aenean euismod elementum nisi quis eleifend quam. Tellus rutrum tellus pellentesque eu. Lobortis mattis aliquam faucibus purus in massa tempor. Urna et pharetra pharetra massa. Quisque id diam vel quam. Ipsum consequat nisl vel pretium. Habitant morbi tristique senectus et netus et malesuada. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Eu feugiat pretium nibh ipsum consequat. Pulvinar proin gravida hendrerit lectus. Nibh mauris cursus mattis molestie. Eu sem integer vitae justo eget magna fermentum iaculis. Aliquet bibendum enim facilisis gravida neque convallis a. Pulvinar proin gravida hendrerit lectus. A diam sollicitudin tempor id eu nisl nunc mi. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Dictum fusce ut placerat orci nulla pellentesque. Est ullamcorper eget nulla facilisi etiam. A pellentesque sit amet porttitor. Faucibus pulvinar elementum integer enim. Metus vulputate eu scelerisque felis imperdiet. Diam in arcu cursus euismod quis. Mauris cursus mattis molestie a iaculis. Consequat ac felis donec et odio pellentesque diam. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Amet nulla facilisi morbi tempus iaculis urna id. Morbi non arcu risus quis varius quam. Augue ut lectus arcu bibendum at varius. Vestibulum sed arcu non odio euismod lacinia at quis risus. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ullamcorper morbi tincidunt ornare massa. Euismod elementum nisi quis eleifend quam adipiscing vitae. Cras fermentum odio eu feugiat. Vulputate mi sit amet mauris commodo quis imperdiet. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Quis auctor elit sed vulputate mi sit amet mauris. Ultrices eros in cursus turpis massa tincidunt dui ut. Enim nec dui nunc mattis enim. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Risus sed vulputate odio ut. Duis at consectetur lorem donec massa. Vitae semper quis lectus nulla at volutpat diam ut venenatis.";

    this.state = {
      comments : [
        {
          username : "Pointing",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: "2020-02-14"
        }
      ]
    }
  }

  addComment = () => {
    const comment = document.getElementById('comment-input').value;

    if( comment )
    {
      document.getElementById('comment-input').value = "";
      var data = { content: comment, username: "Karthikk TamilMani", createdAt: "2020-06-15" };
      //
      let commentsArray = this.state.comments;
      commentsArray.push(data);
      //
      this.setState({
        comments : commentsArray
      });
    }

  }

  render() {
    return (
      <div>
        <div class="discussions-wrapper px-4 pb-4">
          <div class="discussion-body col-sm-12">
            <div class="discussion-content">
              <div class="media">
                <div class="media-left main-section">
                    <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <div class="media-body pl-1">
                  <div class="col-sm">
                    <div class="mb-3">
                      <strong>{this.props.post.author}</strong> has started a
                        discussion &nbsp;&nbsp;
                        <span class="badge badge-warning py-1 px-2">
                          {this.props.post.course}
                        </span>
                        <div class="discussion-period">
                          {this.props.post.createdAt}
                        </div>
                      </div>
                      <h6>{this.props.post.title}</h6>
                      <p>{this.props.post.content}</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div
                class="discussion-comments col-sm-11 offset-sm-1"
                id="discussion-comments"
                >
                {this.state.comments.map((comment) => (
                  <div class="comment py-3">
                    <div class="media">
                      <div class="media-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                      </div>
                      <div class="media-body pl-1">
                        <div class="col-sm">
                          <div class="mb-2 reply">
                            <h6>{comment.username}</h6>
                          </div>
                          <p>{comment.content}</p>
                          <div class="discussion-period">{comment.createdAt}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div class="comment add-comment-section py-3 col-sm-11 offset-sm-1">
                <div class="media">
                  <div class="media-body pl-1">
                    <div class="col-sm">
                      <textarea
                        id="comment-input"
                        placeholder="Reply to the discussion.."
                        class="form-control"
                        rows="2"
                        onFocus={(event) => {document.getElementById('comment-input').setAttribute('rows', '3');
                          document.getElementById('add-comment-button-section').style.display = "block"}}
                          ></textarea>
                        <div class="btn-toolbar mt-3" id="add-comment-button-section">
                          <button class="btn btn-primary mr-3" onClick={this.addComment}>Post</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
