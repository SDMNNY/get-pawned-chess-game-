const addComment = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#newCommentTextArea").value;
  console.log(comment);

  if (comment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to add comment");
    }
  }
};

document.querySelector(".commentBtn").addEventListener("click", addComment);
