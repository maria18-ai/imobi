import { Back } from '../common/Back'
import './About.css'
import img from '../image/image-about.jpg'
import { Heading } from '../common/headers/Heading'
import img2 from '../image/image-services.jpg'

export const About = () => {
  return (
    <>
      <section className="about">
        <Back name="Sobre Nos" title="Sobre Nós - Quem somos?" cover={img}/>
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="História da nossa agência" subtitle="Veja nosso processo de trabalho"/>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nisi laudantium sequi. <br></br>Omnis praesentium eius accusantium fugiat iusto necessitatibus architecto vitae aliquam repudiandae culpa?<br></br> Magnam distinctio corrupti hic quam aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Rerum iusto velit consectetur, labore et quod aliquam dignissimos dicta dolorum doloribus quaerat. <br></br> Odio sunt modi unde rem, deleniti corrupti facere accusamus!</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa neque tempore harum amet. <br></br>Quis optio recusandae tempora exercitationem dolor odio inventore vero, numquam fugiat deserunt minus.<br></br> Earum repellat deleniti voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente incidunt animi itaque <br/>consequuntur enim earum, quos repellendus vel ullam fugiat, quaerat quidem culpa labore. <br></br> Facilis in iure a possimus saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> Veniam voluptatem dicta totam quis. Tempore qui aperiam voluptatibus dolor! Sunt deleniti praesentium perspiciatis <br/>deserunt commodi exercitationem aliquam nisi, cumque laboriosam delectus.</p>

            {/* <div className='image-2'>
              <img src={img2} alt="image" />
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
