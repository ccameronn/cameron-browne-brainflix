import "./CommentForm.scss";

const CommentForm = () => {
  return (
    <section className="comment-form">
      <p className="comment-counter">3 Comments</p>
      <article className="form">
        <div className="form__icon"></div>
        <form className="form__fields-container">
          <label for="text">JOIN THE CONVERSATION</label>
          <div className="form__fields">
            <textarea
            placeholder="Add a new comment"
            name="text"
            rows="5"
            className="form__input"
            id="comment"
            required
            ></textarea>
            <input
            placeholder="Add a new comment"
            name="text"
            rows="5"
            required
            className="form__input-tablet"
            id="comment"
            ></input>
            <button type="submit" className="form__button">
            COMMENT
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default CommentForm;