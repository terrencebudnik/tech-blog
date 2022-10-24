const commentBtn = $("#comment-btn");

function newComment(event) {
    event.preventDefault();
    const commentContent = $("#comment-content");
    const newComment = {
      body: commentContent.val()
    };
    fetch('/api/comments', {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
    .then(response => {
      console.log(response)
      if (!response.ok) {
        console.log('Comment successful')
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create comment');
      }
    })

};

  commentBtn.on('click', newComment);