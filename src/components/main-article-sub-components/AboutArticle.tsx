import cool_woman from "../../assets/kakkoii-onna.jpg";
export default function AboutArticle() {
  return (
    <article className="about-me-article">
      <h1 className="title">1. <span className="high-lighter">Regarding Me</span></h1>
      <div className="about-me">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus magnam earum pariatur illo ipsum vero impedit repudiandae quidem voluptatibus est odit aut quibusdam eaque veniam temporibus, fugit fugiat laborum ducimus doloremque quaerat? Soluta earum aspernatur expedita distinctio, nobis asperiores dolorum animi accusantium ex eaque vitae, consectetur corporis tempora natus placeat molestiae blanditiis facilis. Eaque corporis, tenetur enim nesciunt adipisci possimus! Aspernatur veniam natus modi perferendis. Asperiores iure, corporis delectus aspernatur nobis ea, quas ab impedit rerum nihil, veritatis maiores sint eligendi! Quidem nesciunt veniam sapiente quas ut unde obcaecati possimus ea, asperiores totam consequatur. Veniam repellat eligendi eos repellendus quisquam.</p>
        <img src={cool_woman} alt="" />
      </div>
    </article>
  )
}
