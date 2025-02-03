import css from "./NotFound.module.css";

function NotFoundPage() {
  return (
    <div className={css.errorPage}>
      <h1>404</h1>
      <GoAlert size={24} color="black" />
      <h2>Sorry, Please refresh the page!</h2>
    </div>
  );
}
export default NotFoundPage;
