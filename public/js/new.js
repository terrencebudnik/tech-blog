const postBtn = $("#post-btn");
const delBtn = $("#delete-btn")




function newPost(event) {
  event.preventDefault();
  const postTitle = $("#post-title");
  const postContent = $("#post-content");
  const newPost = {
    title: postTitle.val(),
    content: postContent.val()
  };
  fetch('/api/posts', {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json())
    .then(response => {
      console.log(response)
      if (!response.ok) {
        console.log('Post successful')
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    })

};

const delPost = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

postBtn.on('click', newPost);
delBtn.on('click', delPost);