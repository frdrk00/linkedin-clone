import { FiberManualRecord, Info } from "@mui/icons-material"
import "./Widgets.css"


function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <Info />
        </div>
        {newsArticle("this is it", "top news - 9099 readers")}
        {newsArticle("this is it", "top news - 9099 readers")}
        {newsArticle("this is it", "top news - 9099 readers")}
        {newsArticle("this is it", "top news - 9099 readers")}
        {newsArticle("this is it", "top news - 9099 readers")}
        {newsArticle("this is it", "top news - 9099 readers")}
    </div>
  )
}

export default Widgets