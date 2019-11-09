import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card } from "antd";

const ArticleDetailsComponent = ({ match: {params: { articleID: idValue } }}) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    /**
     * id was destructuring from this object
     *  {this.props.match.params.articleID} */
    axios.get(`http://127.0.0.1:8000/api/${idValue}`).then(res => {
      setArticle(res.data);
    });
  });

  return (
    <Card title={article.title}>
      <p>{article.content}</p>
    </Card>
  );
};

export default ArticleDetailsComponent;
