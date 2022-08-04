var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  // spaceBetween: 10,
  speed: 900,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 4,
      // spaceBetween: 20,
      // centeredSlides: true,
    },
    768: {
      slidesPerView: 4,
      // spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      // spaceBetween: 50,
    },
  },
});

const tags = document.querySelectorAll(".tags");
const emoteRate = document.querySelectorAll(".rect");
const myDay = document.querySelector(".swiper-wrapper");
const post = document.querySelector(".post");

const myDayData = [
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
  {
    myday: "image/man.jpg",
    thumbnail: "image/man.jpg",
  },
];

myDayData.forEach((data) => {
  myDay.innerHTML += `<div class="swiper-slide">
  <img src="${data.thumbnail}" alt="" class="myday-pf" />
  <img src="${data.myday}" alt="" class="my" />
  </div>`;
});

const tabsAndReactFunction = (element) => {
  element.forEach((active, i) => {
    active.addEventListener("click", (e) => {
      element.forEach((fade) => {
        fade.classList.remove("active");
      });
      element[i].classList.add("active");
    });
  });
  return;
};

const postData = [
  {
    postOwner: "Min Khant Saw",
    postOwnerProfile: "image/man.jpg",
    postDate: new Date().toLocaleDateString(),
    postPhoto: "image/man.jpg",
    postCommentPeopleProfile: "image/man.jpg",
    postCommentPeopleName: "Min Khant Saw",
    postCommentText: ["I Like Your Photo"],
  },
  {
    postOwner: "Min Khant Saw",
    postOwnerProfile: "image/man.jpg",
    postDate: new Date().toLocaleDateString(),
    postPhoto: "image/man.jpg",
    postCommentPeopleProfile: "image/man.jpg",
    postCommentPeopleName: "Min Khant Saw",
    postCommentText: ["I like your post"],
  },
];

const postHtml = () => {
  postData.map((postData, i) => {
    post.innerHTML += `
    <div class="pst">
    <div class="pst-pf">
      <div class="pf-info">
        <img src="${postData.postOwnerProfile}" alt="pst-pf" class="pst-pf-pic" />
        <h4>${postData.postOwner}</h4>
      </div>
      <div class="date">
        <span>${postData.postDate}</span>
      </div>
    </div>
    <img src="${postData.postPhoto}" alt="post-photo" class="post-photo" />
    <div class="react">
      <div class="emoji">
        <i class="iconify like rect" data-icon="bxs:like"></i>
        <i class="iconify dislike rect" data-icon="bxs:dislike"></i>
      </div>
      <span class="comment">${postData.postCommentText.length} Comments</span>
    </div>
    <div class="comment-info">
      <div class="comment-form">
        <img src="image/man.jpg" alt="cmt-pf" class="comment-pf" />
        <input
          type="text"
          class="comment-input"
          placeholder="Write a comment..."
          onchange="commentInput(event)"
        />
        <i class="iconify add-newComment" data-icon="ic:round-send" onclick="addComment()"></i>
      </div>
      <div class="comment-text">
        <img
          src="${postData.postCommentPeopleProfile}"
          alt="mnt-text-pf"
          class="cmt-text-pf"
        />
        <span class="comment-texts">
          <h4>${postData.postCommentPeopleName}</h4>
          ${postData.postCommentText}
        </span>
      </div>
    </div>
    </div>
    `;
  });
  const commentInfo = document.querySelectorAll(".comment-info"),
    comment = document.querySelectorAll(".comment");

  comment.forEach((ele, i) => {
    ele.addEventListener("click", () => {
      if (getComputedStyle(commentInfo[i]).display === "none") {
        commentInfo[i].style.display = "block";
      } else {
        commentInfo[i].style.display = "none";
      }
    });
  });
  return;
};

let commentValue = undefined;

const commentInput = (event) => {
  commentValue = event.target.value;
};

const addComment = () => {
  post.innerHTML = "";
  postData.forEach((v) => {
    v.postCommentText.forEach((val) => {});
  });
  postHtml();
};

tabsAndReactFunction(tags);
tabsAndReactFunction(emoteRate);
postHtml();
