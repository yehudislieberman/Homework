import './style.css';
import $ from 'jquery';

'use strict';

async function displayBlogs() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  const blogsList = $("#blogs-list");
  blogsList.empty();

  users.forEach(user => {
    const blogDiv = $("<div>").addClass("blog");
    const userInfo = $("<div>").addClass("user-info").html(`
      <p>Name: ${user.name}</p>
      <p>Website: ${user.website}</p>
      <p>Company: ${user.company.name}</p>
    `);
    blogDiv.append(userInfo);
    blogsList.append(blogDiv);

    blogDiv.on("click", () => {
      const allUserInfo = $(".user-info");
      allUserInfo.hide();

      userInfo.show();

      const allBlogs = $(".blog");
      allBlogs.each(function () {
        if (!$(this).is(blogDiv)) {
          $(this).hide();
        }
      });

      displayPosts(user.id);
    });
  });
}

async function displayPosts(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const posts = await response.json();

  const blogsList = $("#blogs-list");

  posts.forEach(post => {
    const postDiv = $("<div>").addClass("post").html(`
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button class="comment-button">Show Comments</button>
    `);
    blogsList.append(postDiv);

    postDiv.find(".comment-button").on("click", async function () {
      const button = $(this);
      const commentsDiv = $("<div>").addClass("comments");

      if (button.text() === "Show Comments") {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        const comments = await response.json();

        comments.forEach(comment => {
          const p = $("<p>").text(comment.body);
          commentsDiv.append(p);
        });

        postDiv.append(commentsDiv);
        button.text("Hide Comments");

        postDiv[0].scrollIntoView({ behavior: "smooth" });
      } else {
        postDiv.find(".comments").remove();
        button.text("Show Comments");
      }
    });
  });

  const returnLink = $("#return-link");
  returnLink.show();
  returnLink.on("click", function (event) {
    event.preventDefault();
    $(".user-info").show();
    $(".blog").show();
    $(".post").remove();

    window.scrollTo({ top: 0, behavior: "smooth" });

    $(this).hide();
  });
}

displayBlogs();
