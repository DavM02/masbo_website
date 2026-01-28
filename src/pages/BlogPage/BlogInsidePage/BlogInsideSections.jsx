import BlogInsideHeading from "@components/sections/BlogInsideHeading/BlogInsideHeading"
import img1 from "@assets/img-36.jpg"
import img2 from "@assets/img-40.jpg"
import BlogContent from "@components/sections/BlogContent/BlogContent"
import LatestNews from "@components/sections/LatestNews/LatestNews"

function BlogInsideSections() {

  const data = {
    id: 20,
    category: 'architecture',
    title: 'Integrating Smart Technology',
    author: 'Michael Brown',
    date: '5 July',

    intro: "We develop complex engineering solutions that are focused on achieving concrete business results and long-term operational stability. Engineering for us is not a theoretical concept, but a practical and result-driven process based on real experience, verified calculations, and deep technical analysis. An individual approach and careful attention to every engineering detail allow us to deliver reliable, tested, and predictable solutions. In simple terms, we design systems by understanding how facilities actually operate in real conditions, relying on applied knowledge and accumulated expertise.",

    image: img1,

    sections: {
      heading: "Goal: Investment projects",

      paragraphs: [
        "We design engineering solutions aimed at the successful implementation of client objectives. Because engineering is a practical, result-oriented strategy applied in real conditions. We design engineering solutions aimed at the successful implementation of client objectives. Because engineering is a practical, result-oriented strategy applied in real conditions. We design engineering solutions aimed at the successful implementation of client objectives. Because engineering is a practical, result-oriented strategy applied in real conditions. The successful implementation of client objectives is achieved through systematic analysis and responsible engineering decisions.",

        "We provide engineering support that ensures the stable achievement of project goals throughout all stages of implementation. Because engineering is a structured and result-oriented process. We provide engineering support that ensures the stable achievement of project goals throughout all stages of implementation. Because engineering is a structured and result-oriented process. We provide engineering support that ensures the stable achievement of project goals throughout all stages of implementation.",

        "Our engineering approach is based on achieving measurable results and ensuring long-term system efficiency. Because engineering is a result-oriented discipline built on calculations, experience, and accountability. Our engineering approach is based on achieving measurable results and ensuring long-term system efficiency. Because engineering is a result-oriented discipline built on calculations, experience, and accountability. Our engineering approach is based on achieving measurable results and ensuring long-term system efficiency. Because engineering is a result-oriented discipline built on calculations, experience, and accountability.",

        "The achievement of project objectives requires consistent engineering control and coordinated decision-making. Because engineering is a result-oriented process focused on stability and predictability. We apply engineering solutions that ensure controlled implementation, operational reliability, and compliance with defined parameters. Engineering solutions are developed with consideration of risks, constraints, and long-term operational factors.",

        "We apply engineering solutions that ensure the successful implementation of complex projects. Because engineering is a result-oriented discipline focused on predictability and efficiency. We apply engineering solutions that ensure the successful implementation of complex projects. Because engineering is a result-oriented discipline focused on predictability and efficiency. We apply engineering solutions that ensure the successful implementation of complex projects. Because engineering is a result-oriented discipline focused on predictability and efficiency.",

        "The achievement of project objectives is ensured through systematic engineering analysis and technical control. Because engineering is a result-oriented process focused on long-term performance. We develop engineering solutions that ensure operational stability, efficiency, and compliance with defined requirements. Engineering solutions are created with consideration of risks, operational scenarios, and lifecycle costs to ensure predictable results over time."
      ],

      quote: "Engineering solutions are effective only when they are focused on real objectives, verified by calculations, and aligned with the long-term performance of the facility. Engineering is always about responsibility for the final result.",

      textImageBlock: {
        image: img2,
        paragraphs: [
          "We develop engineering solutions that ensure the stable achievement of project goals. Because engineering is a result-oriented strategy applied in real operating conditions.",
          "The achievement of project goals requires detailed analysis and engineering validation. Because engineering is a result-oriented strategy applied through calculations, modeling, and technical expertise. We develop engineering solutions that ensure stable operation and predictable performance.",
          "We design engineering systems that support the achievement of project objectives. Because engineering is a result-oriented discipline based on experience and verified technical solutions. We develop engineering systems that ensure long-term operational stability.",
          "The achievement of project objectives depends on consistent engineering decisions and technical coordination. Because engineering is a result-oriented strategy focused on reliability, safety, and efficiency throughout the lifecycle of the facility."
        ]
      }
    }
  }

  return (
    <>
      <BlogInsideHeading
        data={{
          title: data.title,
          category: data.category,
          author: data.author,
          date: data.date
        }} />

      <BlogContent
        data={data} />

      <LatestNews />
    </>
  )
}

export default BlogInsideSections
