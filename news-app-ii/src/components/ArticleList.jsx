import ArticleGroup from "./ArticleGroup"
import ArticleTeaser from "./ArticleTeaser"



function ArticleList(props) {
    const{articles} = props

    const HandleTitleClick = (article_id) => {
        <Link></Link>
      }


    return (
        <div>
            {articles.map((article, index) => (
                <ArticleTeaser key={index + 1} {...article} />
                ))
            }
        </div>
    )


}

export default ArticleList