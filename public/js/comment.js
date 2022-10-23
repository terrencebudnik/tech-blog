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
        if (response.ok) {
          console.log('Post successful')
          document.location.replace('/dashboard');
        } else {
          alert('Failed to create post');
        }
      })
  
  };