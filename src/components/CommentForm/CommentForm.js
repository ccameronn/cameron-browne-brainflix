import "./CommentForm.scss";

function CommentForm() {
  return (
    <section className="comment-form">
      <p className="comment-count">3 Comments</p>
      <article novalidate class="form">
        <div class="form__icon"></div>
        <form class="form__fields">
          <label for="text">JOIN THE CONVERSATION</label>
          <textarea
            placeholder="Add a new comment"
            name="text"
            rows="5"
            required
            class="form__input"
            id="comment"
          ></textarea>
          <button type="submit" class="form__button">
            COMMENT
          </button>
        </form>
      </article>
    </section>
  );
}

export default CommentForm;